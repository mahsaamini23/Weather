import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import SinglePageCity from "../pages/SinglePageCity/SinglePageCity";

const router = createBrowserRouter([
    
    {
        path:'/',
        element:<Home/>
    },
    {
        path:"singlePageCity/:cityID",
        element:<SinglePageCity/>
    }
])

export default router;