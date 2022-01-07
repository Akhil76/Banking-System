import React from 'react';
import { Typography, Toolbar, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    root: {

    }

});


function Deposit() {
    const classes = useStyles();
    return (
        <div>
            <Grid container>
                <Typography>Deposit</Typography>
            </Grid>
        </div>
    )
}


export default Deposit;