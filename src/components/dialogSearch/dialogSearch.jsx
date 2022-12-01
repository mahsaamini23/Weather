import React from "react";
import cities from "../../data/dataCities";
import Dialog from "@mui/material/Dialog";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const DialogSearch =({setOpenDialogSearch, openDialogSearch, setSelectCity,setSearch})=>{

    const handelCloseDialogSearch =()=>{
        setOpenDialogSearch(false)
    }

    const handleSelectCity =(id)=>{
        const select = (cities.filter(city => city.id ===id))
        setSelectCity(select[0].name)
        setSearch(select[0].name)
        setOpenDialogSearch(false)
    }


    return(
        <Dialog onClose={handelCloseDialogSearch} open={openDialogSearch}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 300 }}>
                    <TableBody>
                        {cities.map(city =>(
                            <TableRow cursor='pointer' sx={{width:'300px'}}>
                                <TableCell align="center" onClick={()=>handleSelectCity(city.id)}>{city.name}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Dialog>
    )
}

export default DialogSearch;