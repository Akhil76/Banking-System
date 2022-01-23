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
                    <DashboardButton title="Recent Deposits" amount="50000" link="/" />
                    <DashboardButton title="Recent Withdraw" amount="50000" link="recentwithdraw" />
                    <DashboardButton title="Recent Transfer" amount="50000" link="recenttransfer" />
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