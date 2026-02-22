import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const loginUser = async ({ email, password }) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/auth/login`, { email, password })

        localStorage.setItem('Founders_token', response.data.token)
        localStorage.setItem('Founders_user', JSON.stringify(response.data.user))

        return response.data

    } catch (error) {
        throw error.response?.data || { message: 'Login failed' }
    }
}


export const registerUser = async ({ first_name, last_name, email, password, phone }) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/auth/register`, {
            first_name,
            last_name,
            email,
            password,
            phone
        })


        localStorage.setItem('Founders_token', response.data.token)
        localStorage.setItem('Founders_user', JSON.stringify(response.data.user))

        return response.data

    } catch (error) {
        throw error.response?.data || { message: 'Registration failed' }
    }
}

export const googleLogin = async ({ email, firstName, lastName }) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/auth/google`, {
            email,
            firstName,
            lastName
        })

        localStorage.setItem('Founders_token', response.data.token)
        localStorage.setItem('Founders_user', JSON.stringify(response.data.user))

        return response.data

    } catch (error) {
        throw error.response?.data || { message: 'Google login failed' }
    }
}

export const getCurrentUser = async () => {
    try {
        const token = localStorage.getItem('token')
        const response = await axios.get(`${BASE_URL}/api/auth/me`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        return response.data

    } catch (error) {
        throw error.response?.data || { message: 'Failed to get user' }
    }
}

export const logoutUser = () => {
    localStorage.removeItem('Founders_token')
    localStorage.removeItem('Founders_user')
}

export const getAuthHeaders = () => {
    const token = localStorage.getItem('Founders_token')
    return { Authorization: `Bearer ${token}` }
}

export const isAuthenticated = () => {
    return !!localStorage.getItem('Founders_token')
}

export const getStoredUser = () => {
    const user = localStorage.getItem('Founders_user')
    return user ? JSON.parse(user) : null
}