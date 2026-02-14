import { useState, useEffect, useContext } from "react";
import { loginUser, googleLogin, getStoredUser, isAuthenticated } from "../repository/login";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../../context/my-context";

export const useLogin = () => {
    const navigate = useNavigate();
    const { setLoading, setisLoggedIn, loading, isLoggedIn, setUser } = useContext(MyContext);

    const [userCred, setUserCred] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({});

    // ✅ REMOVED the auto-redirect useEffect

    // Validate on input change
    useEffect(() => {
        validate()
    }, [userCred])

    const validate = () => {
        const newErrors = {}

        if (!userCred.email) {
            newErrors.email = "Email is required"
        } else if (!/\S+@\S+\.\S+/.test(userCred.email)) {
            newErrors.email = "Enter a valid email address"
        }

        if (!userCred.password) {
            newErrors.password = "Password is required"
        } else if (userCred.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters"
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleLogin = async () => {
        if (!validate()) {
            setisLoggedIn(false)
            return
        }

        setLoading(true)
        try {
            const data = await loginUser({
                email:    userCred.email,
                password: userCred.password,
            })

            setUser(data.user)
            setisLoggedIn(true)
            setUserCred({ email: "", password: "" })

            if (data.user.role === 'admin') {
                navigate('/admin')
            } else {
                navigate('/')
            }

        } catch (error) {
            setisLoggedIn(false)
            setErrors({ general: error.message || 'Login failed' })
        } finally {
            setLoading(false)
        }
    }

    const handleGoogleSignIn = async (googleUserData) => {
        setLoading(true)
        try {
            const data = await googleLogin({
                email:     googleUserData.email,
                firstName: googleUserData.given_name,
                lastName:  googleUserData.family_name,
            })

            setUser(data.user)
            setisLoggedIn(true)

            if (data.user.role === 'admin') {
                navigate('/admin')
            } else {
                navigate('/')
            }

        } catch (error) {
            setisLoggedIn(false)
            setErrors({ general: error.message || 'Google login failed' })
        } finally {
            setLoading(false)
        }
    }

    return {
        errors,
        userCred,
        setUserCred,
        handleLogin,
        handleGoogleSignIn,
        loading,
        isLoggedIn,
    }
}