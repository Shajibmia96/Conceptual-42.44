import { createBrowserRouter } from "react-router-dom";
import Layout from "../Component/Layouts/Layout";
import Products from "../Component/Pages/Products";
import About from "../Component/Pages/About";
import Home from "../Component/Pages/Home";
import DashBoard from "../Component/DashBoard/DashBoard";
import Product from "../Component/Product/Product";
import DashProfile from "../Component/DashBoard/DashProfile";
import Profile from "../Component/DashBoard/Profile";
import EditProfile from "../Component/DashBoard/EditProfile";

const myCreateRoute = createBrowserRouter(
    [
       {
        path : '/',
        element: <Layout></Layout>,
        children : [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/products',
                element: <Products></Products>,
                loader : ()=> fetch("https://dummyjson.com/products")
                
            },
            {
                path : "/products/:id",
                element : <Product></Product>,
                loader : ({params})=> fetch(`https://dummyjson.com/products/${params.id}`)
            },
            {
                path : "/about",
                element : <About></About>
            },
            {
                path : "/dashboard",
                element : <DashBoard></DashBoard>,
                children : [
                    {
                        path : '/dashboard',
                        element: <DashProfile></DashProfile>
                    },
                    {
                        path : '/dashboard/profile',
                        element : <Profile></Profile>
                    },
                    {
                        path : '/dashboard/editProfile',
                        element: <EditProfile></EditProfile>
                    }
                ]
                
            }
        ]
       }
    ]
) 

export default myCreateRoute;