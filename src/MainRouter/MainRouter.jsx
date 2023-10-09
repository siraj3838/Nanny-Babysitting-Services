import { createBrowserRouter } from "react-router-dom";
import Root from "../MainRoot/Root";
import Home from "../Pages/Home/Home";
import Features from "../Pages/Features/Features";
import Login from "../Pages/Login/Login";
import HireCardDetails from "../Components/HireCardDetails/HireCardDetails";
import Registration from "../Pages/Registration/Registration";
import PrivateRouter from "./PrivateRouter/PrivateRouter";
import Employers from "../Pages/Services/Employers";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const MainRouter = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/servicesData.json')
            },
            {
                path: '/features',
                element: <PrivateRouter><Features></Features></PrivateRouter>
            },
            {
                path: '/employers',
                element: <PrivateRouter><Employers></Employers></PrivateRouter>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/hiredetails/:id',
                element: <PrivateRouter><HireCardDetails></HireCardDetails></PrivateRouter>,
                loader: () => fetch('/servicesData.json')
            }
        ]
    }
])

export default MainRouter;