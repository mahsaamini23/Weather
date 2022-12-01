import React from "react";
import { Outlet } from "react-router-dom";
import background from "../../assets/images/farm.jpg";

const Layout=()=>{
    return(
        <React.Fragment>
            <main style={{
                width:'100%',
                height:'700px',
                padding:'30px 20px',
                display:'flex',
                justifyContent:'center',
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
