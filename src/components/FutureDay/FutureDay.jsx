import React from "react";
import Grid from "@mui/material/Grid";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Typography  from "@mui/material/Typography";


const FutureDay =({cityWeatherFuture, index})=>{
    return(
        <Grid container sx={{
            margin:'0 15px', 
            display:'flex',
            flexDirection:{sm:'column'}, 
            alignItems:'center', 
            gap:'20px'}}>
            <Grid sx={{textAlign:'center'}}>
                <Typography sx={{color:'#fff', width:{xs:'70px', sm:'none'}, fontSize:{xs:'12px', sm:'none'}}}>{cityWeatherFuture?.[index]?.dt_txt}</Typography>
            </Grid>
            <Grid>
                <WbSunnyIcon sx={{fontSize:{xs:'45px',sm:'80px'} , color:'#fff'}}/>
            </Grid>
            <Grid>
                <Typography sx={{color:'#FFF'}}>{cityWeatherFuture?.[index]?.main?.temp}</Typography>
            </Grid>
        </Grid>
    )
}

export default FutureDay;