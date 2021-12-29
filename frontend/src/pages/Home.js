import React, { useEffect } from 'react';
import { Typography, Grid, Toolbar, Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import DashboardButton from '../components/DashboardButton';
import TotalDeposit from '../components/TotalDeposit';
import TotalWithdraw from '../components/TotalWithdraw';
import TotalTransfer from '../components/TotalTransfer';
import { useDispatch, useSelector } from 'react-redux';
import { allAccountHolders } from '../statemanager/actions/accountHoders';
import { Routes, Route } from 'react-router-dom';

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
                    <Box style={{
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                        width: "5%",
                        marginTop: "300px"
                    }}>
                        <CircularProgress />
                    </Box>
                    :

                    <div>
                        <Grid container>
                            <DashboardButton title="Today's Deposits" amount="50000" link="/"/>
                            <DashboardButton title="Today's Withdraw" amount="50000" link="totalwithdraw" />
                            <DashboardButton title="Today's Transfer" amount="50000" link="totaltransfer" />
                            <DashboardButton title="Account Holders"/>
                        </Grid>
                        <Grid container>
                            <Routes>
                                <Route path="/" element={<TotalDeposit/>} />
                                <Route path="totalwithdraw" element={<TotalWithdraw/>} />
                                <Route path="totaltransfer" element={<TotalTransfer/>} />
                            </Routes>
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