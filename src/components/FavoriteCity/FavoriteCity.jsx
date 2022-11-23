import React from "react";
import Grid from "@mui/material/Grid";
import Typography  from "@mui/material/Typography";
import WbSunnyIcon from '@mui/icons-material/WbSunny';


const FavoriteCity =()=>{
    return(
        <Grid container sx={{display:'flex',justifyContent:'space-between', borderRadius:'15px',border:'1px solid #fff', padding:'10px 20px', margin:"5px 0 "}}>
            <Grid>
                <Typography>تهران</Typography>
            </Grid>
            <Grid sx={{display:'flex',justifyContent:'space-evenly',gap:'15px' }}>
                <WbSunnyIcon sx={{color:'#fff'}}/>
                <Typography>3</Typography>
            </Grid>
        </Grid>
    )
}

export default FavoriteCity;