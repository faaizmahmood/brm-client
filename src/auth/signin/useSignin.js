/* eslint-disable no-unused-vars */
import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";

const useSignin = () => {
    const navigate = useNavigate();

    const initialValues = {
        email: '',
        password: '',
    };

    const validationSchema = Yup.object({
        email: Yup.string().required("Email is required").email("Invalid email format"),
        password: Yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
    });

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (values) => {
            try {
                // Send sign-in request
                const response = await axios.post('http://127.0.0.1:8000/auth/signin', values);
                
                // Extract user data
                const { message, user } = response.data;

                // Store user data in localStorage
                localStorage.setItem("user", JSON.stringify(user));

                // Show success message
                toast.success("Signin successful! 🎉");

                // Reset form & redirect user
                formik.resetForm();
                navigate("/");
                
            } catch (error) {
                const status = error.response?.status;

                if (status === 404) {
                    toast.error("User not found.");
                } else if (status === 401) {
                    toast.error("Incorrect password.");
                } else {
                    toast.error("An unexpected error occurred.");
                }
            }
        },
    });

    return { formik };
};

export default useSignin;
