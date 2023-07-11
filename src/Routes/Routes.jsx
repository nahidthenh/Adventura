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
    TourDetails
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
                path: '/destinations/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/destinations/${params.id}`),
                element: <DestinationDetails></DestinationDetails>
            },
            {
                path: '/tour',
                loader: (() => {
                    return fetch('http://localhost:5000/tour')
                }),
                element: <Tour></Tour>
            },
            {
                path: '/tour/:id',
                loader: (({ params }) => {
                    return fetch(`http://localhost:5000/tour/${params.id}`)
                }),
                element: <TourDetails></TourDetails>
            },
            {
                path: '/blog',
                loader: (() => {
                    return fetch('http://localhost:5000/blog')
                }),
                element: <Blog></Blog>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
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