import { createBrowserRouter } from "react-router-dom";
import Root from "../MainRoot/Root";
import Home from "../Pages/Home/Home";
import Features from "../Pages/Features/Features";
import Services from "../Pages/Services/Services";
import Login from "../Pages/Login/Login";
import About from "../Pages/About/About";
import HireCardDetails from "../Components/HireCardDetails/HireCardDetails";
import Registration from "../Pages/Registration/Registration";

const MainRouter = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/servicesData.json')
            },
            {
                path: '/features',
                element: <Features></Features>
            },
            {
                path: '/services',
                element: <Services></Services>
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
                path: '/about',
                element: <About></About>
            },
            {
                path: '/details/:id',
                element: <HireCardDetails></HireCardDetails>,
                loader: () => fetch('/servicesData.json')
            }
        ]
    }
])

export default MainRouter;