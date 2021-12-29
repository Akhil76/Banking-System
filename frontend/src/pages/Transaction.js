import React from 'react';
import { Typography, Toolbar, Grid, TextField } from '@mui/material';
import TransactionButton from '../components/TransactionButton';
import { makeStyles } from '@mui/styles';



const useStyles = makeStyles({
  root:{

  }

});




function Transaction() {
    const classes = useStyles();
    return (
        <Grid container>
            <Toolbar/>
            <Grid style={{ background: "#81d4fa" }} item xs={12} sm={12} md={12}>
                <Toolbar>
                    <Typography variant="h6">Transactions</Typography>
                    <TextField
                        style={{ marginLeft: "auto", background: "white", borderRadius: "5px" }}
                        placeholder="Account No"
                        id="outlined-size-small"
                        defaultValue=""
                        size="small"
                    />
                </Toolbar>
            </Grid>
            <TransactionButton title="Deposits" />
            <TransactionButton title="Withdraw" />
            <TransactionButton title="Transfer" />
        </Grid>
    )
}




export default Transaction;