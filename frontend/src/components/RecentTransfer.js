import React, { useEffect,useState } from "react";
import { Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Spinner from '../components/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import {transactionByType} from '../statemanager/actions/transaction';


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

function RecentTransfer(){
    const dispatch = useDispatch();
    const transactions = useSelector((state)=>state.transaction.transactions);
    const loading = useSelector((state)=>state.transaction.loading);
    var Type = "Transfer";

    useEffect(()=>{
        dispatch(transactionByType(Type));
    },[]);
    return(
        <Grid item xs={12} sm={12} md={12}>
            {
                loading ?
                    <Spinner />
                    :
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align="Left">Name</StyledTableCell>
                                    <StyledTableCell align="center">Account No</StyledTableCell>
                                    <StyledTableCell align="Left">Account Type</StyledTableCell>
                                    <StyledTableCell align="right">Deposit Amount</StyledTableCell>
                                    <StyledTableCell align="right">Balance</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    transactions.map((tran) =>
                                        <StyledTableRow>             
                                            <StyledTableCell align="Left">Empty</StyledTableCell>
                                            <StyledTableCell align="center">{tran._id}</StyledTableCell>
                                            <StyledTableCell align="left">{tran._id}</StyledTableCell>
                                            <StyledTableCell align="right">{tran.Transfer}</StyledTableCell>
                                            <StyledTableCell align="right">{tran.Balance}</StyledTableCell>
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


export default RecentTransfer;