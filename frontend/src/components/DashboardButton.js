import React from 'react';
import { Grid, Typography, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import {NavLink} from 'react-router-dom';


const useStyles = makeStyles({
    root: {

    },
    paper: {
        background: "#bbdefb",
        height:"150px",
        padding: "20px 30px",
        margin: "10px"
    },
    link:{
        textDecoration:"none"
    }
});

function DashboardButton(props) {
    const classes = useStyles();
    return (
        <Grid item xs={12} sm={6} md={3}>
            <NavLink className={classes.link}to={""+props.link}>
                <Paper className={classes.paper} button>
                    <Typography variant="h6">{props.title}</Typography>
                    <Typography>{props.amount}</Typography>
                </Paper>
            </NavLink>
        </Grid>
    )
}

export default DashboardButton;