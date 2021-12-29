import React from 'react';
import { Typography,
     Paper, 
     Toolbar, 
     Grid, 
     TextField,
     InputLabel,
     Select,
     MenuItem, 
     Button } from '@mui/material';




function CreateAccount() {

    return (
        <Grid>
            <Toolbar />
            <Typography
                variant="h6"
                style={{ background: "#81d4fa", padding: "10px" }}
            >
                CreateAccount
            </Typography>
            <Paper style={{ padding: "15px" }}>
                <form>
                    <div style={{ width: "40%", paddingTop: "10px" }}>
                        <InputLabel>
                            First Name
                        </InputLabel>
                        <TextField
                            placeholder="First Name"
                            id="outlined-size-small"
                            defaultValue=""
                            size="small"
                        />
                    </div>
                    <div style={{ width: "40%" }}>
                        <InputLabel>
                            Last Name
                        </InputLabel>
                        <TextField
                            placeholder="Last Name"
                            id="outlined-size-small"
                            defaultValue=""
                            size="small"
                        />
                    </div>
                    <div>
                        <InputLabel>
                            Full Name
                        </InputLabel>
                        <TextField
                            fullWidth
                            placeholder="Full Name"
                            id="outlined-size-small"
                            defaultValue=""
                            size="small"
                        />
                    </div>
                    <div>
                        <InputLabel>
                            Email
                        </InputLabel>
                        <TextField
                            fullWidth
                            placeholder="Email"
                            id="outlined-size-small"
                            defaultValue=""
                            size="small"
                        />
                    </div>
                    <div>
                        <InputLabel>
                            Address
                        </InputLabel>
                        <TextField
                            fullWidth
                            placeholder="Address"
                            id="outlined-size-small"
                            defaultValue=""
                            size="small"
                        />
                    </div>
                    <div>
                        <InputLabel>
                            Mobile No
                        </InputLabel>
                        <TextField
                            type="number"
                            fullWidth
                            placeholder=" Mobile No"
                            id="outlined-size-small"
                            defaultValue=""
                            size="small"
                        />
                    </div>
                    <div>
                        <InputLabel>
                            Date of Birth
                        </InputLabel>
                        <TextField
                            type="date"
                            size="small"
                        />
                    </div>
                    <div>
                        <InputLabel>
                            Account Type
                        </InputLabel>
                        <Select
                            value=""
                            //onChange={handleChange}
                            displayEmpty
                            //inputProps={{ 'aria-label': 'Without label' }}
                            size="small"
                        >
                            <MenuItem value="">
                                <em>Select a type</em>
                            </MenuItem>
                            <MenuItem value="Savings">Savings</MenuItem>
                            <MenuItem value="Current">Current</MenuItem>
                        </Select>
                    </div>
                    <div>
                        <InputLabel>
                            Primary Amount
                        </InputLabel>
                        <TextField
                            type="number"
                            fullWidth
                            placeholder=" Primary Amount"
                            id="outlined-size-small"
                            defaultValue=""
                            size="small"
                        />
                    </div>
                    <div>
                        <InputLabel>
                            Account Holder's Picture
                        </InputLabel>
                        <TextField
                            type="file"
                            id="outlined-size-small"
                            size="small"
                        />
                    </div>
                    <div>
                        <InputLabel>
                            Signature Verification Image
                        </InputLabel>
                        <TextField
                            type="file"
                            id="outlined-size-small"
                            size="small"
                        />
                    </div>
                    <div>
                        <InputLabel>
                            Nominee Name
                        </InputLabel>
                        <TextField
                            fullWidth
                            placeholder="Nominee Name"
                            id="outlined-size-small"
                            defaultValue=""
                            size="small"
                        />
                        <InputLabel>
                            Nominee's Picture
                        </InputLabel>
                        <TextField
                            type="file"
                            id="outlined-size-small"
                            size="small"
                        />
                    </div>
                    <Button variant="contained">Submit</Button>
                </form>
            </Paper>
        </Grid>
    )
}




export default CreateAccount;