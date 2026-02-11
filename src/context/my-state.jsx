import { useState } from "react"
import { MyContext } from "./my-context";


export const MyState = ({children}) =>{
   const [loading , setLoading] = useState(false)
    const [isLoggedIn , setisLoggedIn] = useState(false);
    const [loggedUser ,setUser] = useState(null);
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