import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

// POST /api/auth/register
export const registerUser = async ({ first_name, last_name, email, password, phone }) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/auth/register`, {
            first_name,
            last_name,
            email,
            password,
            phone
        })

        // Save token and user to localStorage
        localStorage.setItem('Founders_token', response.data.token)
        localStorage.setItem('Founders_user', JSON.stringify(response.data.user))

        return response.data

    } catch (error) {
        throw error.response?.data || { message: 'Registration failed' }
    }
}

// POST /api/auth/google
export const googleLogin = async ({ email, firstName, lastName }) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/auth/google`, {
            email,
            firstName,
            lastName
        })

        // Save token and user to localStorage
        localStorage.setItem('Founders_token', response.data.token)
        localStorage.setItem('Founders_user', JSON.stringify(response.data.user))

        return response.data

    } catch (error) {
        throw error.response?.data || { message: 'Google signup failed' }
    }
}

// Helper: get token for authenticated requests
export const getAuthHeaders = () => {
    const token = localStorage.getItem('Founders_token')
    return { Authorization: `Bearer ${token}` }
}

// Helper: check if user is logged in
export const isAuthenticated = () => {
    return !!localStorage.getItem('Founders_token')
}

// Helper: get user from localStorage
export const getStoredUser = () => {
    const user = localStorage.getItem('Founders_user')
    return user ? JSON.parse(user) : null
}

// Logout
export const logoutUser = () => {
    localStorage.removeItem('Founders_token')
    localStorage.removeItem('Founders_user')
}