import React from 'react';
import { Typography, Toolbar, Grid, TextField } from '@mui/material';
import TransactionButton from '../components/TransactionButton';
import { makeStyles } from '@mui/styles';
import { Outlet } from 'react-router-dom';

const useStyles = makeStyles({
    root: {

    }

});


function Transaction() {
    const classes = useStyles();
    return (
        <div>
            <Toolbar />
            <Grid container>
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
            </Grid>
            <Grid container>
                <TransactionButton title="Deposits" link=""/>
                <TransactionButton title="Withdraw" link="withdraw"/>
                <TransactionButton title="Transfer" link="transfer"/>
            </Grid>
            <Grid>
                <Outlet/>
            </Grid>
        </div>
    )
}


export default Transaction;