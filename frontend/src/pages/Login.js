import React,{useState} from 'react';
import {Box,TextField,Typography,Button,Grid } from '@mui/material';
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {login} from '../statemanager/actions/auth';


const customStyles = {
    title:{
        background:"#c5cae9",
        marginBottom:"20px"
    }
}

function Login(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [adminInfo,setAdminInfo]= useState({
        Username:"",
        Password:""
    });
    const submitHandler=(e)=>{
        e.preventDefault();
        dispatch(login(adminInfo,navigate));
    }
    return (
        <div>
            <Grid container>
                <Box style={{
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "26%",
                    marginTop: "200px",
                    marginBottom: "200px"
                }}>
                    <Typography
                        style={customStyles.title}
                        variant="h6"
                        align="center"
                    >Admin Login</Typography>
                    <form onSubmit={submitHandler}>
                        <div style={{ marginBottom: "20px" }}>
                            <TextField
                                fullWidth
                                label="Username"
                                variant="outlined"
                                name="Username"
                                value={adminInfo.Username}
                                onChange={(e)=>setAdminInfo({...adminInfo,Username:e.target.value})}
                            />
                        </div>
                        <div style={{ marginBottom: "20px" }}>
                            <TextField
                                fullWidth
                                type="password"
                                label="Password"
                                variant="outlined"
                                name="Password"
                                value={adminInfo.Password}
                                onChange={(e)=>setAdminInfo({...adminInfo,Password:e.target.value})}
                            />
                        </div>
                        <Button
                            style={{ textTransform: "none" }}
                            fullWidth
                            type="submit"
                            variant="contained"
                            color="primary"
                        >Log in</Button>
                    </form>
                </Box>
            </Grid>
        </div>
    )

}



export default Login;