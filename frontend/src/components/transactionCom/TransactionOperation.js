import React,{useState} from 'react';
import { TextField, Button } from '@mui/material';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {useDispatch} from 'react-redux';
import {maketransaction} from '../../statemanager/actions/transaction';

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
    const dispatch = useDispatch();
    const [depositData,setDepositData]=useState({
        id:props.id,
        TransactionType:"Deposit",
        Deposit:""
    })

    const [withdrawData,setWithdrawData]=useState({
        id:props.id,
        TransactionType:"Withdraw",
        Withdraw:""
    })
    const [transferData,setTransferData]=useState({
        id:props.id,
        TransactionType:"Transfer",
        TransferingAccountNo:"",
        Transfer:""
    })
    const DepositHandler =(e)=>{
        e.preventDefault();
        dispatch(maketransaction(depositData));
        setDepositData({Deposit:""});
    }
    const WithdrawHandler =(e)=>{
        e.preventDefault();
        dispatch(maketransaction(withdrawData));
        setWithdrawData({Withdraw:""});
    }
    const TransferHandler =(e)=>{
        e.preventDefault();
        dispatch(maketransaction(transferData));
        setTransferData({
            TransferingAccountNo:"",
            Transfer:""
    
        });
    }
    return (
        <Box sx={{ width: '70%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <p>{props.id}</p>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Deposit" {...a11yProps(0)} />
                    <Tab label="Withdraw" {...a11yProps(1)} />
                    <Tab label="Transfer" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <form onSubmit={DepositHandler}>
                    <label>Deposit Amount:</label>
                    <TextField
                        fullWidth
                        type="text"
                        size="small"
                        placeholder='Enter amount'
                        value={depositData.Deposit}
                        onChange={(e)=>setDepositData({...depositData,Deposit:e.target.value})}
                    />
                    <Button
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
                        onChange={(e)=>setWithdrawData({...withdrawData,Withdraw:e.target.value})}
                    />
                    <Button
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
                        onChange={(e)=>setTransferData({...transferData,TransferingAccountNo:e.target.value})}
                    />
                    <label>Transfer Amount:</label>
                    <TextField
                        fullWidth
                        type="text"
                        size="small"
                        placeholder='Enter amount'
                        value={transferData.Transfer}
                        onChange={(e)=>setTransferData({...transferData,Transfer:e.target.value})}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                    >Transfer</Button>
                </form>
            </TabPanel>
        </Box>
    );
}
