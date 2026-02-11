import "./index.css"
import { NavBar } from "./components/nav"
import { AboutUs } from "./pages/about"
import { Faqs } from "./pages/faqs"
// import { DemoLandingPage } from "./components/pages/demopage"
import { ContactPage } from "./pages/contact"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Applayout } from "./components/Applayout"
import { Home } from "./pages/home"
import { Errorpage } from "./pages/errorPage"
import { Events } from "./pages/events"
import { MyState } from "./context/my-state"
import { Login } from "./auth/login/login"
import Signup from "./auth/signup/signup"
import Team from "./team/team"
import UserDashboard from "./dashboards/userdashboard"
import AdminDashboard from "./dashboards/admin/admindashboard"

const router = createBrowserRouter ([
  {
    path : "/",
    element : <Applayout/>,
    errorElement : <Errorpage/>,
    children : [
      {
        path : "/",
        element : <Home/>
      },
      {
        path : "/about",
        element : <AboutUs/>
      },
      {
        path : "/faqs",
        element : <Faqs/>
      },
      {
        path : "/support",
        element : <ContactPage/>
      },
      {
        path: "/events",
        element : <Events/>
      },
      {
        path: "/login",
        element : <Login/>
      },
      {
        path: "/signup",
        element : <Signup/>
      },
      {
        path: "/team",
        element : <Team/>
      },
      {
        path: "/profile/user",
        element : <UserDashboard/>
      },
      {
        path: "/admin-dashboard",
        element : <AdminDashboard/>
      }
    ]
  }
])
const App = () => {
  return <MyState> <RouterProvider router={router}></RouterProvider></MyState>
}
export default App