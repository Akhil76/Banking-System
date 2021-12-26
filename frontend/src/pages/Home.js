import React, { useEffect } from 'react';
import { Typography, Toolbar, Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
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
            {
                accountHolders.map((acholder) => (
                    <Typography paragraph>
                        {acholder.FullName}
                    </Typography>
                ))
            }
        </div>
    )
}




export default Home;