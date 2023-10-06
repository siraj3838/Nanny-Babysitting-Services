import { createBrowserRouter } from "react-router-dom";
import Root from "../MainRoot/Root";
import Home from "../Pages/Home/Home";
import Features from "../Pages/Features/Features";

const MainRouter = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/features',
                element: <Features></Features>
            },
            {
                path: '/services',
                element:
            }
        ]
    }
])

export default MainRouter;