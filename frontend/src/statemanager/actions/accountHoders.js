import axios from 'axios';
import { ALL_ACCOUNT_HOLDERS } from '../actionTypes/actionTypes';


export const allAccountHolders = () =>(dispatch)=>{
    axios.get('/allaccountholders')
    .then(Response =>{
        dispatch({
            type:ALL_ACCOUNT_HOLDERS,
            payload:{
                accountHolders:Response.data
            }
        })
    })
    .catch(error=>{
        console.log(error)
    })

}

