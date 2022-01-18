import React, { useEffect } from 'react';
import { Grid, Typography,Paper} from '@mui/material';
import { makeStyles } from '@mui/styles';
import TransactionOperation from '../transactionCom/TransactionOperation';
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
    const accountHolder = useSelector((state) => state.allAccountHoders.accountHolder)
    useEffect(() => {
        dispatch(singleAccount(params.accountNo))
    }, [singleAccount(params.accountNo)])
    return (
        <Grid>
            <Grid className={classes.AcInfo} item xs={12} sm={12} md={12}>
                <div>
                    <p>No :{params.accountNo}</p>
                    <Typography></Typography>
                    <Typography variant="h3">{accountHolder.FullName}</Typography>
                    <Typography>Account No : 888909</Typography>
                    <Typography>Total Balance : {accountHolder.MainBalance}</Typography>
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
                    <TransactionOperation id={params.accountNo}/>
                </Grid>
            </Grid>
        </Grid>
    )
}


export default AccountDetails;