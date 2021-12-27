import React, { useEffect } from 'react';
import { Typography, Grid, Toolbar, Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import DashboardButton from '../components/DashboardButton';
import { useDispatch, useSelector } from 'react-redux';
import { allAccountHolders } from '../statemanager/actions/accountHoders';


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
                    : null
            }
            <Grid direction="row" justifyContent="flex-start" container>
                <DashboardButton title="Today's Deposite" amount="50000" />
                <DashboardButton title="Today's Transactions" />
                <DashboardButton title="Today's Transfer" />
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
    )
}




export default Home;