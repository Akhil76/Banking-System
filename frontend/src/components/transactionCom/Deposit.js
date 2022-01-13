import React from 'react';
import {Typography,TextField,Grid,Button } from '@mui/material';
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
                <Grid item xs={12} sm={12} md={12}>
                    <form>
                        <div>
                            <TextField
                            fullwidth
                            placeholder="amount"
                            //value="amount"
                            size="small"
                            />
                        </div>
                        <Button 
                        type="submit" 
                        variant="contained" 
                        color="primary">Deposit</Button>
                    </form>
                </Grid>
            </Grid>
        </div>
    )
}


export default Deposit;