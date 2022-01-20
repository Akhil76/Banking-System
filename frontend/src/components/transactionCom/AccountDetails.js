import React, { useEffect } from 'react';
import { Grid, Typography, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import TransactionOperation from '../transactionCom/TransactionOperation';
import Spinner from '../../components/Spinner';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { singleAccount } from '../../statemanager/actions/accountHoders';


const useStyles = makeStyles({
    root: {

    },
    AcInfo: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginTop: "5px",
        padding: "10px"
    },
    tranOperation: {
        display: "flex",
        flexWrap: "wrap",
        //justifyContent: "space-between",
        marginTop: "5px",
        padding: "10px"
    }

});

function AccountDetails() {
    const params = useParams();
    const classes = useStyles();
    const dispatch = useDispatch();
    const accountHolder = useSelector((state) => state.allAccountHoders.accountHolder);
    const loading = useSelector((state) => state.allAccountHoders.loading);

    useEffect(() => {
        dispatch(singleAccount(params.accountNo))
    }, [singleAccount(params.accountNo)]);
    return (
        <Grid>
            {
                loading ?
                    <Spinner /> :
                    <div>         
                {
                accountHolder.map((ac)=>(
                <div>
                    <Grid className={classes.AcInfo} item xs={12} sm={12} md={12}>
                        <div>
                            <Typography></Typography>
                            <Typography variant="h3">{ac.FullName}</Typography>
                            <Typography>Account No : {ac.AccountNo}</Typography>
                            <Typography>Total Balance : {ac.MainBalance}</Typography>
                        </div>
                        <Paper>
                            <img src="/logo192.png" />
                        </Paper>
                    </Grid>
                    <Grid>
                        <Grid className={classes.tranOperation} item xs={12} sm={12} md={12}>
                            <Paper>
                                <Typography variant="h6">Signature Verification :</Typography>
                                <img src="/logo192.png" />
                            </Paper>
                            <TransactionOperation 
                            id={ac._id} 
                            />
                        </Grid>
                    </Grid>
                </div>
                ))
                }      
                    </div>
            }
        </Grid>
    )
}


export default AccountDetails;