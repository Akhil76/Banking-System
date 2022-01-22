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
import { useDispatch } from 'react-redux';
import { createAccount } from '../statemanager/actions/accountHoders';



function CreateAccount() {
    const dispatch = useDispatch();
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
                CreateAccount
            </Typography>
            <Paper style={{ padding: "15px" }}>
                <p>{accountInfo.AccountType}{accountInfo.Birthdate}</p>
                <form onSubmit={submitHandler}>
                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
                        <div style={{ width: "48%" }}>
                            <InputLabel>
                                First Name
                            </InputLabel>
                            <TextField
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
                            type="text"
                            Name="Address"
                            value={accountInfo.Address}
                            onChangeCapture={(e) => setAccountInfo({ ...accountInfo, Address: e.target.value })}
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
                            type="tel"
                        />
                    </div>
                    <div>
                        <InputLabel>
                            Date of Birth
                        </InputLabel>
                        <TextField
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
                            type="number"
                            placeholder=" Primary Amount"
                            id="outlined-size-small"
                            defaultValue=""
                            size="small"
                            type="number"
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
                            fullWidth
                            placeholder="Nominee Name"
                            id="outlined-size-small"
                            defaultValue=""
                            size="small"
                            type="text"
                            Name="NomineeName"
                            value={accountInfo.NomineeName}
                            onChange={(e) => setAccountInfo({ ...accountInfo, NomineeName: e.target.value })}
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