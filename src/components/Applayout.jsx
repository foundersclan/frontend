import { Outlet, useLocation } from "react-router-dom"
import { Header } from "./header"
import { Footer } from "../pages/footer"
import { motion } from "motion/react"
import { useContext, useEffect, useState } from "react"
import { MyContext } from "../context/my-context"
import { ReactTyped } from "react-typed"
import { Intro } from "./components/intro"
import { Loader } from "./components/loading"


export const Applayout = () => {
    const location = useLocation();
    const { loading } = useContext(MyContext);
    const [intro, setintro] = useState(true);

    const hideRoutes = [
        '/events',
        '/login',
        '/signup',
        '/register',
        '/about',
        '/support',
    ]
    const authHideRoutes = [
        '/login',
        '/signup',
        '/request-invitation'
    ]
    const shouldHideUi = hideRoutes.includes(location.pathname);
    const shouldHideHeaderAndFooter = authHideRoutes.includes(location.pathname);
    if (loading) {
        return (
            <Loader />
        )
    }
    return (
        <>
            {
                intro ? <Intro onFinish={() => setintro(false)} /> :
                    <div className=" w-full overflow-hidden">
                        {
                            !shouldHideHeaderAndFooter && <Header />
                        }
                        <div className="">
                            <Outlet />
                        </div>
                        {
                            !shouldHideHeaderAndFooter && <Footer />
                        }

                    </div>
            }
        </>
    )
}