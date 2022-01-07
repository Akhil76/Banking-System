import React from 'react';
import { Typography, Toolbar, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    root: {

    }

});


function Transfer() {
    const classes = useStyles();
    return (
        <div>
            <Grid container>
                <Typography>Transfer</Typography>
            </Grid>
        </div>
    )
}


export default Transfer;