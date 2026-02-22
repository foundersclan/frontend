import "./index.css"
import { NavBar } from "./components/nav"
import { AboutUs } from "./pages/about"
import { Faqs } from "./pages/faqs"
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
import Requests from "./requests/founders-requests"
import { ComingSoon } from "./pages/comingsoon/coming-soon"
import { Services } from "./pages/services/services"
import { Toaster } from "react-hot-toast"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <Errorpage />,
    children: [
      { path: "/",                  element: <Home /> },
      { path: "/about",             element: <AboutUs /> },
      { path: "/faqs",              element: <Faqs /> },
      { path: "/support",           element: <ContactPage /> },
      { path: "/events",            element: <Events /> },
      { path: "/login",             element: <Login /> },
      { path: "/signup",            element: <Signup /> },
      { path: "/team",              element: <Team /> },
      { path: "/profile/user",      element: <UserDashboard /> },
      { path: "/admin-dashboard",   element: <AdminDashboard /> },
      { path: "/request-invitation",element: <Requests /> },
      { path: "/services",          element: <Services /> },
      { path: "/blog",              element: <ComingSoon /> },
    ]
  }
])

const App = () => {
  return (
    <MyState>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#18181b',
            color: '#fff',
            border: '1px solid #3f3f46',
          },
          success: {
            iconTheme: {
              primary: '#f59e0b',
              secondary: '#000',
            },
          },
        }}
      />
      <RouterProvider router={router} />
    </MyState>
  )
}

export default App