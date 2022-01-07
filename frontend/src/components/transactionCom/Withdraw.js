import React from 'react';
import { Typography, Toolbar, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    root: {

    }

});


function Withdraw() {
    const classes = useStyles();
    return (
        <div>
            <Grid container>
                <Typography>Withdraw</Typography>
            </Grid>
        </div>
    )
}


export default Withdraw;