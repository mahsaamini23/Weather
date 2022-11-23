import React from "react";
import Button from "@mui/material/Button";

const CustomButton =({children, borderRadius,width})=>{
    return(
        <Button sx={{display:'flex',selfAlign:'flex-start', width:{xs:'200px',sm:'300px'}, border:'1px solid #fff', borderRadius:{borderRadius}, color:'#fff', marginTop:"20px"}}>
            {children}
        </Button>
    )
}

export default CustomButton;