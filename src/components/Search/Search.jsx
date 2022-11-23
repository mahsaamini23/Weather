import React from "react";
import Grid from "@mui/material/Grid";
import InputBase from '@mui/material/InputBase';


const SearchCity =({setSearch, search})=>{

    const handleChange =(e)=>{
        setSearch(e.target.value)
    }

    return(
        <Grid sx={{}}>
            <InputBase sx={{borderBottom:'2px solid #fff',color:'#fff',padding:'0 15px'}} value={search}  onChange={handleChange}/>
        </Grid>
    )
}

export default SearchCity;
// width:'300px'