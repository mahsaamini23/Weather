import React from "react";
import {Link} from "react-router-dom";
import CustomButton from "../../components/Button/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import TireRepairIcon from '@mui/icons-material/TireRepair';
import AirIcon from '@mui/icons-material/Air';
import OpacityIcon from '@mui/icons-material/Opacity';



const CardCity =({cityWeather,cityID})=>{
    return(
        <Grid container  item sx={{
            width:{xs:'300px',sm:'500px'}, 
            color:'#fff',
            backgroundColor:'rgba(119,136,153, .3)', 
            border:'1px solid #fff', 
            borderRadius:'8px',
            padding:'20px 15px 16px 15px', 
            display:'flex', 
            flexDirection:'column',
            alignItems:'center',
            }}>
            <Grid>
                <Typography sx={{fontSize:{xs:'18px', sm:'30px'}}}>
                    {cityWeather?.name}
                </Typography>
            </Grid>
            <Grid sx={{
                padding:'20px 0',
                textAlign:'center',
                display:'flex', 
                flexDirection:{xs:'column',sm:'row'}, 
                justifyContent:{xs:'flex-start', sm:'space-between'}, 
                alignItems:{xs:'space-between',sm:'center'} , 
                gap:'40px',
                }}> 
                <Grid container item sx={{display:'flex',justifyContent:'center' }}>
                    <WbSunnyIcon sx={{color:'#fff',fontSize:{xs:40, sm: 70}}}/>
                </Grid>
                <Grid container item sx={{display:'flex',justifyContent:'center' }}>
                    <Typography sx={{fontSize:{xs:'50px', sm:'100px'}, paddingRight:{xs:'8px', sm:'23px'}}}>{Math.floor(cityWeather?.main?.temp)}</Typography>
                </Grid>
                <Grid container item sx={{display:'flex',justifyContent:'center' }}>
                    <Grid container item sx={{gap:'10px',display:'flex',justifyContent:'center'}}>
                        <AirIcon/>
                        <Typography>{cityWeather?.wind?.speed} m/s</Typography>
                    </Grid>
                    <Grid container sx={{gap:'10px',display:'flex',justifyContent:'center'}}>
                        <TireRepairIcon/>
                        <Typography>{cityWeather?.main?.pressure} mm Hg</Typography>
                    </Grid>
                    <Grid container sx={{gap:'10px',display:'flex',justifyContent:'center'}}>
                        <OpacityIcon/>
                        <Typography>{cityWeather?.main?.humidity} %</Typography> 
                    </Grid>
                </Grid>
            </Grid>
            <Link to={`/singlePageCity/${cityID}`} style={{textDecoration:"none"}}>
                <CustomButton children={"وضعیت چهار روز آینده"} borderRadius={'5px'}/>
            </Link>
        </Grid>
    )
}

export default CardCity;
