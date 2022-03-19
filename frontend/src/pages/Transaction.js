import React from 'react';
import { Typography, Toolbar, Grid } from '@mui/material';
import SearchAccount from '../components/SearchAccount';
//import TransactionButton from '../components/TransactionButton';
import { makeStyles } from '@mui/styles';
import { Outlet } from 'react-router-dom';

const useStyles = makeStyles({
    root: {

    },
    bar:{
        display:"flex", 
        flexWrap: "wrap",
        justifyContent: "space-between",
    }

});


function Transaction() {
    const classes = useStyles();
    return (
        <div>
            <Toolbar />
            <Grid container>
                <Grid style={{ background: "#81d4fa" }} item xs={12} sm={12} md={12}>
                    <Toolbar className={classes.bar}>
                        <Typography variant="h6">Transactions</Typography>
                        <SearchAccount url="transaction"/>
                    </Toolbar>
                </Grid>
            </Grid>
            {/* <Grid container>
                <TransactionButton title="Deposits" link=""/>
                <TransactionButton title="Withdraw" link="withdraw"/>
                <TransactionButton title="Transfer" link="transfer"/>
            </Grid> */}
            <Grid>
                <Outlet/>
            </Grid>
        </div>
    )
}


export default Transaction;