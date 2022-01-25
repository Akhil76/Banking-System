import React, { useEffect } from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Spinner from '../../components/Spinner';
import { Grid ,Button} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { allAccountHolders } from '../../statemanager/actions/accountHoders';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function AllaccountHolders() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    var accountHolders = useSelector((state) => state.allAccountHoders.accountHolders);
    const loading = useSelector((state) => state.allAccountHoders.loading);

    useEffect(() => {
        dispatch(allAccountHolders());
    }, []);

    return (
        <Grid item xs={12} sm={12} md={12}>
            {
                loading ?
                    <Spinner />
                    :
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Photo</StyledTableCell>
                                    <StyledTableCell align="Left">Name</StyledTableCell>
                                    <StyledTableCell align="center">Account No</StyledTableCell>
                                    <StyledTableCell align="Left">Balance</StyledTableCell>
                                    <StyledTableCell align="center">Actions</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    accountHolders.map((acholder) =>
                                        <StyledTableRow>
                                            <StyledTableCell>
                                                <div style={{display:"inline-flex",width:"30px", height:"40px"}}>
                                                    <img src={"http://localhost:3001/imagereader/"+acholder.Picture}/>
                                                </div>
                                            </StyledTableCell>
                                            <StyledTableCell align="Left">{acholder.FullName}</StyledTableCell>
                                            <StyledTableCell align="center">{acholder.AccountNo}</StyledTableCell>
                                            <StyledTableCell align="left">{acholder.MainBalance}</StyledTableCell>
                                            <StyledTableCell align="center">
                                                <Button 
                                                variant="contained" 
                                                color="primary"
                                               
                                                >Modify</Button>
                                                <Button 
                                                variant="contained" 
                                                color="primary"
                                                >Delete</Button>
                                                <Button 
                                                variant="contained" 
                                                color="primary"
                                                onClick={()=>{navigate(`/accountmanager/${acholder.AccountNo}`)}}
                                                >Details</Button>
                                            </StyledTableCell>
                                        </StyledTableRow>
                                    )
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>

            }
        </Grid>
    )
}


export default AllaccountHolders;