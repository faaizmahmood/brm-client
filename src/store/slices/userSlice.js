import { createSlice } from '@reduxjs/toolkit';

// Helper function to get user from localStorage
const getUserFromLocalStorage = () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
};

const userSlice = createSlice({
    name: 'user',
    initialState: {
        profile: getUserFromLocalStorage(), // Load initial state from localStorage
        loading: false,
        error: null,
    },
    reducers: {
        loadUserProfile: (state) => {
            state.profile = getUserFromLocalStorage();
        },
        logoutUser: (state) => {
            localStorage.removeItem('user'); // Clear user from localStorage
            state.profile = null;
        },
    },
});

export const { loadUserProfile, logoutUser } = userSlice.actions;
export default userSlice.reducer;
