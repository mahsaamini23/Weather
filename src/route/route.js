import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Layout from "../components/Layout/Layout";
import SinglePageCity from "../pages/SinglePageCity/SinglePageCity";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                index:true,
                element:<Home/>,
            },
            {
                path:"/menu",
                element:<Menu/>
            },
            {
                path:"/singlePageCity/:cityID",
                element:<SinglePageCity/>
            }
        ]
    } 
])

export default router;