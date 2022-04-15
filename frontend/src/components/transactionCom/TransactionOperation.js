import React, { useState ,useEffect} from 'react';
import { TextField, Button } from '@mui/material';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Alert } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import { useDispatch, useSelector } from 'react-redux';
import { maketransaction } from '../../statemanager/actions/transaction';





function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function TransactionOperation(props) {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    //----------------------------------------------------------------------------------------------------
    const dispatch = useDispatch();
    const message = useSelector((state) => state.transaction.message);
    
    const [depositData, setDepositData] = useState({
        id: props.id,
        Name: props.Name,
        AccountNo: props.AccountNo,
        TransactionType: "Deposit",
        Deposit: ""
    })
 
    const [withdrawData, setWithdrawData] = useState({
        id: props.id,
        Name: props.Name,
        AccountNo: props.AccountNo,
        TransactionType: "Withdraw",
        Withdraw: ""
    })
    const [transferData, setTransferData] = useState({
        id: props.id,
        Name: props.Name,
        AccountNo: props.AccountNo, 
        TransactionType: "Transfer",
        TransferingAccountNo: "",
        Transfer: ""
    })
    console.log(depositData);
    console.log(props.id,props.Name);
    const DepositHandler = (e) => {
        e.preventDefault();
        dispatch(maketransaction(depositData));
        setDepositData({ 
            id:props.id,
            Name:props.Name,
            AccountNo:props.AccountNo,
            TransactionType:"Deposit",
            Deposit: "" 
        });
        //id,Name,AccontNo,TransactionType were getting empty during 2nd time event fire 
    }
   
    const WithdrawHandler = (e) => {
        e.preventDefault();
        dispatch(maketransaction(withdrawData));
        setWithdrawData({ 
            id: props.id,
            Name: props.Name,
            AccountNo: props.AccountNo,
            TransactionType: "Withdraw",
            Withdraw: "" 
        });
    }
    const TransferHandler = (e) => {
        e.preventDefault();
        dispatch(maketransaction(transferData));
        setTransferData({
            id: props.id,
            Name: props.Name,
            AccountNo: props.AccountNo, 
            TransactionType: "Transfer",
            TransferingAccountNo: "",
            Transfer: ""

        });
    }
    //--------------------------------------------------------------------------------------------------------------
    const [open, setOpen] = React.useState(true);// for opening successful message snackbar

    return (

        <Box sx={{ width: '70%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
               {
               message.message &&
               <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={() => setOpen(false)}
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                >
                    <Alert severity="success" sx={{ width: '100%' }}>
                        {message.message}
                    </Alert>
                </Snackbar>
                }
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab style={{ textTransform: "none" }} label="Deposit" {...a11yProps(0)} />
                    <Tab label="Withdraw" {...a11yProps(1)} />
                    <Tab label="Transfer" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <form onSubmit={DepositHandler}>
                    <label>Deposit Amount:</label>
                    <p>{props.id}</p>
                    <p>{props.Name}</p>
                    <TextField
                        fullWidth
                        type="text"
                        size="small"
                        placeholder='Enter amount'
                        value={depositData.Deposit}
                        onChange={(e) => setDepositData({ ...depositData, Deposit: e.target.value })}
                    />
                    <Button
                        style={{ textTransform: "none" }}
                        type="submit"
                        variant="contained"
                        color="primary"
                    >Deposit</Button>
                </form>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <form onSubmit={WithdrawHandler}>
                    <label>Withdraw Amount:</label>
                    <TextField
                        fullWidth
                        type="text"
                        size="small"
                        placeholder='Enter amount'
                        value={withdrawData.Withdraw}
                        onChange={(e) => setWithdrawData({ ...withdrawData, Withdraw: e.target.value })}
                    />
                    <Button
                        style={{ textTransform: "none" }}
                        type="submit"
                        variant="contained"
                        color="primary"
                    >Withdraw</Button>
                </form>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <form onSubmit={TransferHandler}>
                    <label>Transfer To:</label>
                    <TextField
                        fullWidth
                        type="text"
                        size="small"
                        placeholder='Account no'
                        value={transferData.TransferingAccountNo}
                        onChange={(e) => setTransferData({ ...transferData, TransferingAccountNo: e.target.value })}
                    />
                    <label>Transfer Amount:</label>
                    <TextField
                        fullWidth
                        type="text"
                        size="small"
                        placeholder='Enter amount'
                        value={transferData.Transfer}
                        onChange={(e) => setTransferData({ ...transferData, Transfer: e.target.value })}
                    />
                    <Button
                        style={{ textTransform: "none" }}
                        type="submit"
                        variant="contained"
                        color="primary"
                    >Transfer</Button>
                </form>
            </TabPanel>
        </Box>
    );
}
