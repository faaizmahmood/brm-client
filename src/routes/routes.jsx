import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoutes from './protectedRoutes';
import React, { Suspense } from 'react';

// Delay utility function
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Lazily loading components with a 2-second delay
const Dashboard = React.lazy(() =>
    delay(2000).then(() => import('../pages/protected/dashboard/dashboard'))
);
const Home = React.lazy(() =>
    delay(2000).then(() => import('../pages/unProtected/home/home'))
);
const Signup = React.lazy(() =>
    delay(2000).then(() => import('../auth/signup/signup'))
);
const Signin = React.lazy(() =>
    delay(2000).then(() => import('../auth/signin/signin'))
);

import Loading from '../components/Loading/Loading';
import { useSelector } from 'react-redux';
import Error from '../components/Error/Error';

const user = localStorage.getItem('user');
const isLoggedIn = !!user; // Converts to boolean

function AppRoutes() {
    const { profile } = useSelector((state) => state.user);

    if (isLoggedIn && profile === null) {
        return (
            <>
                <Error
                    call={"serverError"}
                    title={"We're sorry - something has gone wrong on our end"}
                    description={"We're currently experiencing technical difficulties. Please reload this page to resolve. If the problem persists, please contact Support."}
                />
            </>
        );
    }

    return (
        <>
            <Suspense fallback={<Loading />}>
                <Routes>
                    {/* Public Routes */}
                    <Route path="/auth/signup" element={isLoggedIn ? <Navigate to="/" replace /> : <Signup />} />
                    <Route path="/auth/signin" element={isLoggedIn ? <Navigate to="/" replace /> : <Signin />} />

                    {/* Conditional Route */}
                    <Route path="/" element={isLoggedIn ? <Dashboard /> : <Home />} />

                    {/* Protected Routes */}
                    <Route
                        path="/peer-analysis"
                        element={
                            <ProtectedRoutes allowedRoles={['admin', 'user']}>
                                <h1>Peer Analysis Page is here</h1>
                            </ProtectedRoutes>
                        }
                    />

                    <Route
                        path="/forecasting"
                        element={
                            <ProtectedRoutes allowedRoles={['admin', 'user']}>
                                <h1>Forecasting page is here</h1>
                            </ProtectedRoutes>
                        }
                    />

                    <Route
                        path="/liquidity-stress-testing"
                        element={
                            <ProtectedRoutes allowedRoles={['admin', 'user']}>
                                <h1>Liquidity Stress Testing is here</h1>
                            </ProtectedRoutes>
                        }
                    />


                    {/* Catch-All Route for 404 */}
                    <Route
                        path="*"
                        element={
                            <Error
                                call={"routeError"}
                                title={"Oops! Page Not Found"}
                                description={
                                    "The page you're looking for doesn't exist or has been moved. Please check the URL or return to the homepage."
                                }
                            />
                        }
                    />
                </Routes>
            </Suspense>
        </>
    );
}

export default AppRoutes;
