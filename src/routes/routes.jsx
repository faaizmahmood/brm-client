import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoutes from './protectedRoutes';
import Cookies from 'js-cookie';
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

const authToken = Cookies.get('authToken');
const isLoggedIn = authToken ? true : false;

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
                        path="/hrm"
                        element={
                            <ProtectedRoutes allowedRoles={['admin', 'user']}>
                                <h1>HRM</h1>
                            </ProtectedRoutes>
                        }
                    />

                    <Route
                        path="/stock-management"
                        element={
                            <ProtectedRoutes allowedRoles={['admin', 'user']}>
                                <h1>stock-management</h1>
                            </ProtectedRoutes>
                        }
                    />

                    <Route
                        path="/projects-management"
                        element={
                            <ProtectedRoutes allowedRoles={['admin', 'user']}>
                                <h1>projects-management</h1>
                            </ProtectedRoutes>
                        }
                    />

                    <Route
                        path="/assets-management"
                        element={
                            <ProtectedRoutes allowedRoles={['admin', 'user']}>
                                <h1>assets-management"</h1>
                            </ProtectedRoutes>
                        }
                    />

                    <Route
                        path="/finance-management"
                        element={
                            <ProtectedRoutes allowedRoles={['admin', 'user']}>
                                <h1>finance-management</h1>
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
