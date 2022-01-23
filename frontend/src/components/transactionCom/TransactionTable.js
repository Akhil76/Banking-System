import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useDispatch,useSelector} from 'react-redux';
import {alltransactions} from '../../statemanager/actions/transaction';

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



export default function TransactionTable() {
  const dispatch = useDispatch();
  const transactions = useSelector((state)=>state.transaction.transactions);

  React.useEffect(()=>{
    dispatch(alltransactions());
  },[]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Account No</StyledTableCell>
            <StyledTableCell align="right">Type</StyledTableCell>
            <StyledTableCell align="right">Description</StyledTableCell>
            <StyledTableCell align="right">Amount</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {
              transactions.map((tran)=>(
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                {tran.Name}
              </StyledTableCell>
              <StyledTableCell align="right">{tran.AccountHolderId}</StyledTableCell>
              <StyledTableCell align="right">{tran.TransactionType}</StyledTableCell>
              <StyledTableCell align="right">Cheque</StyledTableCell>
              <StyledTableCell align="right">{tran.Withdraw}{tran.Deposit}</StyledTableCell>
            </StyledTableRow>
              ))
            }
        </TableBody>
      </Table>
    </TableContainer>
  );
}