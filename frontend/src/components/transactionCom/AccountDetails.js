import React from 'react';
import { Typography,Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles({
    root: {

    },
    paper: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginTop: "5px",
        padding: "10px"
    }

});

function AccountDetails() {
    const params = useParams();
    const classes = useStyles();
    
    return (
        <Paper className={classes.paper}>
            <div>
                <p>No :{params.accountNo}</p>
                <Typography></Typography>
                <Typography variant="h3">AKHIL Paul</Typography>
                <Typography>Account No : 888909</Typography>
                <Typography>Total Balance : 20000</Typography>
                <Paper>
                    <Typography variant="h6">Signature Verification :</Typography>
                    <img src="/logo192.png"/>
                </Paper>
            </div>
            <div>
                <Paper>
                    <img src="/logo192.png"/>
                </Paper>
            </div>
        </Paper>
    )
}


export default AccountDetails;