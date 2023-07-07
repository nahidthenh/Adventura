import { createBrowserRouter } from "react-router-dom";
import Error from '../pages/Error'
import Main from "../layout/Main";
import Home from "../pages/Home";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }
]);