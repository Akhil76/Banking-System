import React, { useState } from 'react';
import {
    Typography,
    Paper,
    Toolbar,
    Grid,
    TextField,
    InputLabel,
    Select,
    MenuItem,
    Button
} from '@mui/material';
import { useDispatch ,useSelector} from 'react-redux';
import { createAccount } from '../statemanager/actions/accountHoders';



function CreateAccount() {
    const dispatch = useDispatch();
    const message = useSelector((state)=>state.allAccountHoders.message);
    const error = useSelector((state)=>state.allAccountHoders.error); 
    const [accountInfo, setAccountInfo] = useState({
        FirstName: "",
        LastName: "",
        FullName: "",
        Email: "",
        Address: "",
        Mobile: "",
        Birthdate: "",
        AccountType: "",
        PrimaryAmount: "",
        Picture: "",
        Signature: "",
        Nominee: "",
        NomineePicture: ""
    });
    const submitHandler = (e) => {
        e.preventDefault();
        const accountformdata = new FormData();
        accountformdata.append("FirstName", accountInfo.FirstName);
        accountformdata.append("LastName", accountInfo.LastName);
        accountformdata.append("FullName", accountInfo.FullName);
        accountformdata.append("Email", accountInfo.Email);
        accountformdata.append("Address", accountInfo.Address);
        accountformdata.append("Mobile", accountInfo.Mobile);
        accountformdata.append("Birthdate", accountInfo.Birthdate);
        accountformdata.append("AccountType", accountInfo.AccountType);
        accountformdata.append("PrimaryAmount", accountInfo.PrimaryAmount);
        accountformdata.append("Picture", accountInfo.Picture);
        accountformdata.append("Signature", accountInfo.Signature);
        accountformdata.append("Nominee", accountInfo.Nominee);
        accountformdata.append("NomineePicture", accountInfo.NomineePicture);
        dispatch(createAccount(accountformdata));
        setAccountInfo({
            FirstName: "",
            LastName: "",
            FullName: "",
            Email: "",
            Address: "",
            Mobile: "",
            Birthdate: "",
            AccountType: "",
            PrimaryAmount: "",
            Picture: "",
            Signature: "",
            Nominee: "",
            NomineePicture: ""
        })
    }
    return (
        <Grid>
            <Toolbar />
            <Typography
                variant="h6"
                style={{ background: "#81d4fa", padding: "10px" }}
            >
                Create Account
            </Typography>
            <Typography>{message.message}</Typography>
            <p>{error.FirstName}</p>
            <Paper style={{ padding: "15px" }}>
                <form onSubmit={submitHandler}>
                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
                        <div style={{ width: "48%" }}>
                            <InputLabel>
                                First Name
                            </InputLabel>
                            <TextField
                                error={error.FirstName}
                                helperText={error.FirstName}
                                fullWidth
                                placeholder="First Name"
                                id="outlined-size-small"
                                size="small"
                                type="text"
                                Name="FirstName"
                                value={accountInfo.FirstName}
                                onChange={(e) => setAccountInfo({ ...accountInfo, FirstName: e.target.value })}
                            />
                        </div>
                        <div style={{ width: "48%" }}>
                            <InputLabel>
                                Last Name
                            </InputLabel>
                            <TextField
                                error={error.LastName}
                                helperText={error.LastName}
                                fullWidth
                                placeholder="Last Name"
                                id="outlined-size-small"
                                defaultValue=""
                                size="small"
                                type="text"
                                Name="LastName"
                                value={accountInfo.LastName}
                                onChange={(e) => setAccountInfo({ ...accountInfo, LastName: e.target.value })}
                            />
                        </div>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
                        <div style={{ width: "48%" }}>
                            <InputLabel>
                                Full Name
                            </InputLabel>
                            <TextField
                                error={error.FullName}
                                helperText={error.FullName}
                                fullWidth
                                placeholder="Full Name"
                                id="outlined-size-small"
                                defaultValue=""
                                size="small"
                                type="text"
                                Name="FullName"
                                value={accountInfo.FullName}
                                onChange={(e) => setAccountInfo({ ...accountInfo, FullName: e.target.value })}
                            />
                        </div>
                        <div style={{ width: "48%" }}>
                            <InputLabel>
                                Email
                            </InputLabel>
                            <TextField
                                error={error.Email}
                                helperText={error.Email}
                                fullWidth
                                placeholder="Email"
                                id="outlined-size-small"
                                defaultValue=""
                                size="small"
                                type="text"
                                Name="Email"
                                value={accountInfo.Email}
                                onChange={(e) => setAccountInfo({ ...accountInfo, Email: e.target.value })}
                            />
                        </div>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
                        <div style={{ width: "48%" }}>
                            <InputLabel>
                                Address
                            </InputLabel>
                            <TextField
                                error={error.Address}
                                helperText={error.Address}
                                fullWidth
                                placeholder="Address"
                                id="outlined-size-small"
                                defaultValue=""
                                size="small"
                                type="text"
                                Name="Address"
                                value={accountInfo.Address}
                                onChangeCapture={(e) => setAccountInfo({ ...accountInfo, Address: e.target.value })}
                            />
                        </div>
                        <div style={{ width: "48%" }}>
                            <InputLabel>
                                Mobile No
                            </InputLabel>
                            <TextField
                                error={error.Mobile}
                                helperText={error.Mobile}
                                type="number"
                                fullWidth
                                placeholder=" Mobile No"
                                id="outlined-size-small"
                                defaultValue=""
                                size="small"
                                value={accountInfo.Mobile}
                                onChangeCapture={(e) => setAccountInfo({ ...accountInfo, Mobile: e.target.value })}
                            />
                        </div>
                    </div>
                    <div>
                        <InputLabel>
                            Date of Birth
                        </InputLabel>
                        <TextField
                            error={error.Birthdate}
                            helperText={error.Birthdate}
                            type="date"
                            size="small"
                            Name="Birthdate"
                            value={accountInfo.Birthdate}
                            onChange={(e) => setAccountInfo({ ...accountInfo, Birthdate: e.target.value })}
                        />
                    </div>
                    <div>
                        <InputLabel>
                            Account Type
                        </InputLabel>
                        <Select
                            value={accountInfo.AccountType}
                            onChange={(e) => setAccountInfo({ ...accountInfo, AccountType: e.target.value })}
                            displayEmpty
                            //inputProps={{ 'aria-label': 'Without label' }}
                            size="small"
                        >
                            <MenuItem value="">Select a type</MenuItem>
                            <MenuItem value="Saving">Saving</MenuItem>
                            <MenuItem value="Current">Current</MenuItem>
                        </Select>
                    </div>
                    <div>
                        <InputLabel>
                            Primary Amount
                        </InputLabel>
                        <TextField
                            error={error.PrimaryAmount}
                            helperText={error.PrimaryAmount}
                            type="number"
                            placeholder=" Primary Amount"
                            id="outlined-size-small"
                            defaultValue=""
                            size="small"
                            Name="PrimaryAmount"
                            value={accountInfo.PrimaryAmount}
                            onChange={(e) => setAccountInfo({ ...accountInfo, PrimaryAmount: e.target.value })}
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
                            Name="Picture"
                            onChange={(e) => setAccountInfo({ ...accountInfo, Picture: e.target.files[0] })}
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
                            Name="Signature"
                            onChange={(e) => setAccountInfo({ ...accountInfo, Signature: e.target.files[0] })}
                        />
                    </div>
                    <div>
                        <InputLabel>
                            Nominee Name
                        </InputLabel>
                        <TextField
                            error={error.Nominee}
                            helperText={error.Nominee}
                            placeholder="Nominee Name"
                            id="outlined-size-small"
                            defaultValue=""
                            size="small"
                            type="text"
                            Name="NomineeName"
                            value={accountInfo.Nominee}
                            onChange={(e) => setAccountInfo({ ...accountInfo, Nominee:e.target.value })}
                        />
                        <InputLabel>
                            Nominee's Picture
                        </InputLabel>
                        <TextField
                            type="file"
                            id="outlined-size-small"
                            size="small"
                            Name="NomineePicture"
                            onChange={(e) => setAccountInfo({ ...accountInfo, NomineePicture: e.target.files[0] })}
                        />
                    </div>
                    <Button type="submit" variant="contained">Submit</Button>
                </form>
                
            </Paper>
        </Grid>
    )
}




export default CreateAccount;