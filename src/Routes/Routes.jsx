import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import {
    Error,
    Blog,
    Home,
    Destination,
    Contact,
    Profile,
    Tour,
    Signin,
    Signup,
    DestinationDetails,
    TourDetails,
    BlogDetails
} from '../pages/index'
import PrivateRoute from "./PrivateRoute";

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
                    return fetch('https://adventura-server.vercel.app/destinations')
                }),
                element: <Destination></Destination>
            },
            {
                path: '/destinations/:id',
                loader: ({ params }) => fetch(`https://adventura-server.vercel.app/destinations/${params.id}`),
                element: <PrivateRoute><DestinationDetails></DestinationDetails></PrivateRoute>
            },
            {
                path: '/tour',
                loader: (() => {
                    return fetch('https://adventura-server.vercel.app/tour')
                }),
                element: <Tour></Tour>
            },
            {
                path: '/tour/:id',
                loader: (({ params }) => {
                    return fetch(`https://adventura-server.vercel.app/tour/${params.id}`)
                }),
                element: <PrivateRoute><TourDetails></TourDetails></PrivateRoute>
            },
            {
                path: '/blog',
                loader: (() => {
                    return fetch('https://adventura-server.vercel.app/blog')
                }),
                element: <Blog></Blog>
            },
            {
                path: '/blog-details/:id',
                loader: (({ params }) => {
                    return fetch(`https://adventura-server.vercel.app/blog/${params.id}`)
                }),
                element: <PrivateRoute><BlogDetails></BlogDetails></PrivateRoute>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: '/signin',
                element: <Signin></Signin>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            }
        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }
]);
