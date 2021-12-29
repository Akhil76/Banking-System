import React from 'react';
import { Grid, Typography, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import {NavLink} from 'react-router-dom';


const useStyles = makeStyles({
    root: {

    },
    paper: {
        background: "#bbdefb",
        padding: "100px",
        margin: "10px"
    },
    link:{
        textDecoration:"none"
    }
});

function TransactionButton(props) {
    const classes = useStyles();
    return (
        <Grid item xs={12} sm={6} md={4}>
            <NavLink className={classes.link}to="#">
                <Paper className={classes.paper}>
                    <Typography variant="h6">{props.title}</Typography>
                </Paper>
            </NavLink>
        </Grid>
    )
}

export default TransactionButton;