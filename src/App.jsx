import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadUserProfile } from "./store/slices/userSlice"; // Updated import
import Layout from "./layout/layout";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(loadUserProfile()); // Fetch user data from localStorage
    }, [dispatch]);

    return (
        <>
            <Layout />

            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick={true}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    );
};

export default App;
