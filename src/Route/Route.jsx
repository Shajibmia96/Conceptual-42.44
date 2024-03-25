import { createBrowserRouter } from "react-router-dom";
import Layout from "../Component/Layouts/Layout";
import Products from "../Component/Pages/Products";
import About from "../Component/Pages/About";
import Home from "../Component/Pages/Home";
import DashBoard from "../Component/DashBoard/DashBoard";
import Product from "../Component/Product/Product";

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
                element : <DashBoard></DashBoard>
            }
        ]
       }
    ]
) 

export default myCreateRoute;