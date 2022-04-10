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
    }, [params.accountNo]);


    return (
        <Grid>
            {
                loading ?
                    <Spinner /> :
                    <div>
                        {
                            accountHolder.map((ac) => (
                                <div>
                                    <Grid className={classes.AcInfo} item xs={12} sm={12} md={12}>
                                        <div>
                                            <Typography variant="h3">{ac.FullName}</Typography>
                                            <Typography>Account No : {ac.AccountNo}</Typography>
                                            <Typography>Account Type : {ac.AccountType}</Typography>
                                            <Typography>Mobile : {ac.Mobile}</Typography>
                                            <Typography>Email : {ac.Email}</Typography>
                                            <Typography>Address : {ac.Address}</Typography>
                                            <Typography>Birth Date : {ac.Birthdate}</Typography>
                                            <Typography>Nominee : {ac.Nominee}</Typography>
                                            <Typography>Total Balance : {ac.MainBalance}</Typography>
                                        </div>
                                        <Paper>
                                            <div style={{ display: "inline-flex", width: "160px", height: "200px" }}>
                                                <img src={"http://localhost:3001/imagereader/" + ac.Picture} />
                                            </div>
                                        </Paper>
                                    </Grid>
                                    <Grid>
                                        <Grid className={classes.tranOperation} item xs={12} sm={12} md={12}>
                                            <Paper>
                                                <Typography variant="h6">Signature Verification :</Typography>
                                                <div style={{ display: "inline-flex", width: "240px", height: "200px" }}>
                                                    <img src={"http://localhost:3001/imagereader/" + ac.Signature} />
                                                </div>
                                            </Paper>
                                            <TransactionOperation
                                                id={ac._id}
                                                Name={ac.FullName}
                                                AccountNo={ac.AccountNo}
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