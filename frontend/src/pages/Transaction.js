import React from 'react';
import { Typography,Toolbar, Grid, TextField } from '@mui/material';




function Transaction() {

    return (
        <Grid>
            <Toolbar/>
            <Grid  style={{background:"#81d4fa"}}>
                <Toolbar>
                <Typography variant="h6">Transactions</Typography>
                <TextField
                style={{marginLeft:"auto",background:"white",borderRadius:"5px"}}
                placeholder="Account No"
                id="outlined-size-small"
                defaultValue=""
                size="small"
                />
                </Toolbar>
            </Grid>
                <Toolbar>
                    <Typography>Withdraw</Typography>
                    <Typography>Deposite</Typography>
                    <Typography>Modify Account</Typography>
                    <Typography>Statement</Typography>
                </Toolbar>
            <Grid>

            </Grid>
        </Grid>
    )
}




export default Transaction;