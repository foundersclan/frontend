import { useState } from "react"
import { MyContext } from "./my-context";


export const MyState = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const storedUser = localStorage.getItem("Founders_user");
    const [isLoggedIn, setisLoggedIn] = useState(!!localStorage.getItem('Founders_token'));
    const [loggedUser, setUser] = useState(storedUser ? JSON.parse(storedUser) : null);
    return <MyContext.Provider value={{
        loading,
        setLoading,
        isLoggedIn,
        setisLoggedIn,
        loggedUser,
        setUser
    }
    }>{children}</MyContext.Provider>
}