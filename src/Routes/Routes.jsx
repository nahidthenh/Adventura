import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import {
    Error,
    Blog,
    Home,
    Destination,
    Contact,
    Profile
} from '../pages/index'
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/destination',
                loader: (() => {
                    return fetch('http://localhost:5000/destinations')
                }),
                element: <Destination></Destination>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            }
        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }
]);