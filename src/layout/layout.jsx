import { matchPath, useLocation, NavLink } from "react-router-dom";
import Cookies from "js-cookie";
import Header from "../pages/protected/header/header";
import Footer from "../pages/protected/footer/footer";
import AppRoutes from "../routes/routes";
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { useState } from "react";
import { FaBars } from 'react-icons/fa';
import styles from './layout.module.scss'

// PublicLayout (Example for unauthenticated users)
const PublicLayout = () => (
    <>

        {/* Header */}
        {<Header />}

        {/* Routes */}
        <AppRoutes />

        {/* Footer */}
        {<Footer />}

    </>
);

const Layout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const location = useLocation();
    const authToken = Cookies.get("authToken");
    const isLoggedIn = authToken ? true : false;

    const routesWithoutHeaderFooter = ["/u/:shortURL", "/auth/signin", "/auth/signup"];
    const shouldShowHeaderFooter = !routesWithoutHeaderFooter.some((route) =>
        matchPath(route, location.pathname)
    );

    // Render PublicLayout for unauthenticated users
    if (!isLoggedIn) {
        return <PublicLayout />;
    }

    return (
        <>
            {/* Sidebar for Authenticated Users */}
            <div className="sidebar-container" style={{background:'#002147'}}>
                <Sidebar collapsed={collapsed} >
                    <div className="sidebar-header d-flex align-items-center pb-4" style={{background:'#002147'}}>
                        <button className="sidebar-toggle" onClick={() => setCollapsed(!collapsed)}>
                            <FaBars />
                        </button>
                        <h5>{collapsed ? "" : "CU Analysis"}</h5>
                    </div>

                    <hr/>

                    {/* Navigation Menu */}
                    <Menu className="pt-4" style={{background:'#002147'}}>
                        <MenuItem
                            icon={<i className="fas fa-home" style={{color:'#BD9434'}}></i>}
                            component={<NavLink to="/" />}
                            style={{color:'white'}}
                            className={`${styles.navItem} mt-2`}
                        >
                            Financial Summary
                        </MenuItem>
                        <MenuItem
                            icon={<i className="fas fa-user-tie" style={{color:'#BD9434'}}></i>}
                            component={<NavLink to="/peer-analysis" />}
                            style={{color:'white'}}
                            className="mt-2"
                        >
                            Peer Analysis
                        </MenuItem>
                        <MenuItem
                            icon={<i className="fas fa-box" style={{color:'#BD9434'}}></i>}
                            component={<NavLink to="/forecasting" />}
                            style={{color:'white'}}
                            className="mt-2"
                        >
                            Forecasting
                        </MenuItem>
                        <MenuItem
                            icon={<i className="fas fa-calendar" style={{color:'#BD9434'}}></i>}
                            component={<NavLink to="/liquidity-stress-testing" />}
                            style={{color:'white'}}
                            className="mt-2" 
                        >
                            Liquidity Stress Testing
                        </MenuItem>
                    </Menu>
                </Sidebar>
            </div>

            {/* Main Content */}
            <div
                className="main-content"
                style={{
                    marginLeft: collapsed ? "80px" : "250px",
                }}
            >
                {/* Header */}
                {shouldShowHeaderFooter && isLoggedIn && <Header />}

                {/* Routes */}
                <AppRoutes />

            </div>
        </>
    );
};

export default Layout;
