import React from "react";
import { Outlet } from "react-router-dom";
import background from "../../assets/images/farm.jpg";

const Layout=()=>{
    return(
        <React.Fragment>
            <main style={{
                width:'100%',
                height:'601px',
                padding:'30px 20px',
                display:'flex',
                justifyContent:'center',
                // backgroundImage:'linear-gradient(#00365d, #15466d, #2d4f72, #3c566f, #405870, #4A5e76, #4b677a, #4b657b)',
                backgroundImage:`url(${background})`,
                backgroundRepeat:'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                opacity:'.9'
                }}> 
                <Outlet/>
            </main>
        </React.Fragment>
    )
}

export default Layout;
