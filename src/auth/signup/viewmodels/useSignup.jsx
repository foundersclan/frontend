import { useState, useEffect, useContext } from "react";
import { registerUser } from "../repository/signupFuncion";
import { useNavigate } from "react-router";
import { MyContext } from "../../../context/my-context";

export const useSignup = () => {
    const navigate = useNavigate();
    const { setLoading, setisLoggedIn, loading, isLoggedIn, setUser } = useContext(MyContext);

    const [userdata, setUserData] = useState({
        firstName: "",
        lastName:  "",
        email:     "",
        password:  "",
        phone:     "",
    })
    const [errors, setErrors] = useState({})

    // ✅ REMOVED the auto-redirect useEffect

    // Validate on input change
    useEffect(() => {
        validate()
    }, [userdata])

    const validate = () => {
        const newErrors = {}
        const nameRegex = /^[A-Za-z]+$/

        if (!userdata.firstName) {
            newErrors.firstName = "First name is required"
        } else if (!nameRegex.test(userdata.firstName)) {
            newErrors.firstName = "First name must contain only letters"
        }

        if (!userdata.lastName) {
            newErrors.lastName = "Last name is required"
        } else if (!nameRegex.test(userdata.lastName)) {
            newErrors.lastName = "Last name must contain only letters"
        }

        if (!userdata.email) {
            newErrors.email = "Email is required"
        } else if (!/\S+@\S+\.\S+/.test(userdata.email)) {
            newErrors.email = "Enter a valid email address"
        }

        if (!userdata.password) {
            newErrors.password = "Password is required"
        } else if (userdata.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters"
        }

        if (userdata.phone && !/^[0-9]{10}$/.test(userdata.phone)) {
            newErrors.phone = "Enter a valid 10-digit phone number"
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSignup = async () => {
        if (!validate()) {
            setisLoggedIn(false)
            return
        }

        setLoading(true)
        try {
            const data = await registerUser({
                first_name: userdata.firstName,
                last_name:  userdata.lastName,
                email:      userdata.email,
                password:   userdata.password,
                phone:      userdata.phone,
            })

            setUser(data.user)
            setisLoggedIn(true)
            setUserData({
                firstName: "",
                lastName:  "",
                email:     "",
                password:  "",
                phone:     "",
            })

            if (data.user.role === 'admin') {
                navigate('/admin')
            } else {
                navigate('/')
            }

        } catch (error) {
            setisLoggedIn(false)
            setErrors({ general: error.message || 'Signup failed' })
        } finally {
            setLoading(false)
        }
    }

    return {
        userdata,
        errors,
        validate,
        setUserData,
        handleSignup,
        loading,
        isLoggedIn
    }
}