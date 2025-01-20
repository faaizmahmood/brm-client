import { matchPath, useLocation, NavLink } from "react-router-dom";
import Cookies from "js-cookie";
import Header from "../pages/protected/header/header";
import Footer from "../pages/protected/footer/footer";
import AppRoutes from "../routes/routes";
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { useState } from "react";
import { FaBars } from 'react-icons/fa';

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
            <div className="sidebar-container">
                <Sidebar collapsed={collapsed}>
                    <div className="sidebar-header d-flex align-items-center">
                        <button className="sidebar-toggle" onClick={() => setCollapsed(!collapsed)}>
                            <FaBars />
                        </button>
                        <h2>{collapsed ? "" : "BRM"}</h2>
                    </div>

                    {/* Navigation Menu */}
                    <Menu className="mt-3">
                        <MenuItem
                            icon={<i className="fas fa-home"></i>}
                            component={<NavLink to="/" />}
                        >
                            Dashboard
                        </MenuItem>
                        <MenuItem
                            icon={<i className="fas fa-user-tie"></i>}
                            component={<NavLink to="/hrm" />}
                        >
                            HRM
                        </MenuItem>
                        <MenuItem
                            icon={<i className="fas fa-box"></i>}
                            component={<NavLink to="/stock-management" />}
                        >
                            Stock Management
                        </MenuItem>
                        <MenuItem
                            icon={<i className="fas fa-calendar"></i>}
                            component={<NavLink to="/projects-management" />}
                        >
                            Projects Management
                        </MenuItem>
                        <MenuItem
                            icon={<i className="fas fa-file-alt"></i>}
                            component={<NavLink to="/assets-management" />}
                        >
                            Assets Management
                        </MenuItem>
                        <MenuItem
                            icon={<i className="fas fa-money-bill-alt"></i>}
                            component={<NavLink to="/finance-management" />}
                        >
                            Finance Management
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

                {/* Footer */}
                {shouldShowHeaderFooter && isLoggedIn && <Footer />}
            </div>
        </>
    );
};

export default Layout;
