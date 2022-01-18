import React, { useEffect } from 'react';
import { Grid, Toolbar } from '@mui/material';
import DashboardButton from '../components/DashboardButton';
import { Outlet } from 'react-router-dom';



function Home() {

    return (
        <div>
            <Toolbar />
            <div>
                <Grid container>
                    <DashboardButton title="Today's Deposits" amount="50000" link="/" />
                    <DashboardButton title="Today's Withdraw" amount="50000" link="totalwithdraw" />
                    <DashboardButton title="Today's Transfer" amount="50000" link="totaltransfer" />
                    <DashboardButton title="Account Holders" link="accountholders" />
                </Grid>
                <Grid container>
                    <Outlet /> {/*---Router---*/}
                </Grid>
            </div>
        </div>
    )
}


export default Home;