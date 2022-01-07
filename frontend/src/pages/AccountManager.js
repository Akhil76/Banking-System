import React from 'react';
import { Typography, Toolbar, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    root: {

    }
});


function AccountManager() {
    const classes = useStyles();
    return (
        <div>
            <Toolbar />
            <Grid container>
                <Grid item xs={12} sm={6} md={4}>
                    <Typography>Account Manager</Typography>
                    <Typography>Account Manager</Typography>
                    <Typography>Account Manager</Typography>
                    <Typography>Account Manager</Typography>
                    <Typography>Account Manager</Typography>
                </Grid>
            </Grid>
        </div>

    )
}


export default AccountManager;