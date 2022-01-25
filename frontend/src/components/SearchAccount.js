import React, { useState } from "react";
import { TextField ,Button} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';


const useStyles = makeStyles({
    root: {

    },
    btn:{
       paddingRight:"32px",
       marginTop:"3px"
    }

});

function SearchAccount(props) {
    const classes = useStyles();
    const url = props.url;
    let navigate = useNavigate();
    const [accountNo,setAccountNo] = useState("");
    const [searchErr,setSearchErr] = useState("");

    const changeHandler =(e)=>{
        setAccountNo(e.target.value);
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        if (accountNo !== "") {
            navigate(`/${url}/${accountNo}`);
            setSearchErr("");
        }else{
            setSearchErr("Please,enter an account No!") 
        }
        
    }
   
    return (
        <div>
            
            <form onSubmit={submitHandler}>
                <TextField
                    error={searchErr}
                    helperText={searchErr}
                    style={{background: "white", borderRadius: "5px" }}
                    placeholder="Account No"
                    size="small"
                    type="text"
                    Name="accountNo"
                    value={accountNo}
                    onChange={changeHandler}
                />
                <Button 
                    type="submit"
                    className={classes.btn}
                >
                    <SearchIcon/>
                </Button>
            </form>
        </div>
    )
}

export default SearchAccount;