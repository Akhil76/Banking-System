import React from 'react';
import { Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

function Spinner(){
    return(
        <Box style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            width: "5%",
            marginTop: "300px"
        }}>
            <CircularProgress />
        </Box>
    )
}

export default Spinner;