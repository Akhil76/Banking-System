import React from 'react';
import {Box,TextField,Typography,Button,Grid } from '@mui/material';


const customStyles = {
    title:{
        background:"#c5cae9",
        marginBottom:"20px"
    }
}

function Login(){
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
                    <form>
                        <div style={{ marginBottom: "20px" }}>
                            <TextField
                                fullWidth
                                label="Username"
                                variant="outlined"
                                name="Username"
                                // value={Username}
                                // onChange={this.changeHandler}
                            />
                        </div>
                        <div style={{ marginBottom: "20px" }}>
                            <TextField
                                fullWidth
                                type="password"
                                label="Password"
                                variant="outlined"
                                name="Password"
                                // value={Password}
                                // onChange={this.changeHandler}
                            />
                        </div>
                        <Button
                            style={{ textTransform: "none" }}
                            fullWidth
                            type="submit"
                            variant="contained"
                            color="primary"
                        >Sign in</Button>
                    </form>
                </Box>
            </Grid>
        </div>
    )

}



export default Login;