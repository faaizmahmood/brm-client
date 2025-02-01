/* eslint-disable react-hooks/rules-of-hooks */
import { toast } from "react-toastify";
import Cookies from "js-cookie"
import axios from "axios"
import { useNavigate } from "react-router-dom";

const handleGoogleLoginSuccess = async (credentialResponse) => {

    console.log(credentialResponse.credential)

    const navigate = useNavigate()

    try {
        // Send OAuth token to backend for verification and user creation
        const response = await axios.post('https://brm-server-a9fe47f057bd.herokuapp.com/api/auth/oauth/google', {
            credential: credentialResponse.credential,
        });

        // Handle backend response (e.g., user details and token)
        const { user } = response.data;

        // Store the token in cookies or localStorage
        Cookies.set("authToken", user, { expires: 7 });

        
        toast.success("Google sign-in successful! 🎉");

        // Navigate to the homepage or dashboard after successful login
        navigate('/')

    } catch (error) {
        console.log(error)
        toast.error("Google sign-in failed. Please try again.");
    }
};


export default handleGoogleLoginSuccess