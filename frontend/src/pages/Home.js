import React, { useEffect } from 'react';
import { Typography, Grid, Toolbar } from '@mui/material';
import Spinner from '../components/Spinner';
import DashboardButton from '../components/DashboardButton';
import { useDispatch, useSelector } from 'react-redux';
import { allAccountHolders } from '../statemanager/actions/accountHoders';
import { Outlet } from 'react-router-dom';



function Home() {
    const dispatch = useDispatch();
    const accountHolders = useSelector((state) => state.allAccountHoders.items);
    const loading = useSelector((state) => state.allAccountHoders.loading);

    useEffect(() => {
        dispatch(allAccountHolders());
    }, []);

    return (
        <div>
            <Toolbar />
            {
                loading ?
                    <Spinner />
                    :

                    <div>
                        <Grid container>
                            <DashboardButton title="Today's Deposits" amount="50000" link="/" />
                            <DashboardButton title="Today's Withdraw" amount="50000" link="totalwithdraw" />
                            <DashboardButton title="Today's Transfer" amount="50000" link="totaltransfer" />
                            <DashboardButton title="Account Holders" link="accountholders"/>
                        </Grid>
                        <Grid container> 
                            <Outlet /> {/*---Router---*/}
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            {
                                accountHolders.map((acholder) => (
                                    <Typography paragraph>
                                        {acholder.FullName}
                                    </Typography>
                                ))
                            }
                        </Grid>
                    </div>

            }
        </div>
    )
}


export default Home;