import React from "react";
import FavoriteCity from "../../components/FavoriteCity/FavoriteCity";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const Menu =()=>{
    return(
        <Grid 
        sx={{
        width:'550px', 
        height:'450px',
        padding:'30px 25px 15px 25px',
        borderRadius:'15px', 
        backgroundColor:"rgba(255, 255, 255, .4)", 
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-start',
        }}>
            <Grid sx={{display:'flex', justifyContent:'flex-end',}}>
                <ArrowBackIcon sx={{color:'#fff', fontSize:25}}/>  
            </Grid>
            <Grid sx={{display:'flex', justifyContent:'center'}}>
                <Grid sx={{width:'50%',display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <Typography  sx={{color:'#fff'}} >تنظیمات</Typography>
                    <Box sx={{padding:'20px 0'}}>
                        <Button sx={{width:'100px',height:'20px',borderRadius:' 0 10px 10px 0',color:'#fff',border:'1px solid #fff',fontSize:'10px' }}>سیلسیوس</Button>
                        <Button sx={{width:'100px',height:'20px',borderRadius:' 10px 0 0 10px',color:'#fff',border:'1px solid #fff',fontSize:'10px' }}>فارنهایت</Button>
                    </Box>
                </Grid>
                <Grid sx={{width:'50%',display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <Typography sx={{color:'#fff',marginBottom:'20px'}}>شهرهای مورد علاقه</Typography>
                    <FavoriteCity/>
                    <FavoriteCity/>
                    <FavoriteCity/>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Menu;