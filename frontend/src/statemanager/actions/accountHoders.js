import axios from 'axios';
import { ALL_ACCOUNT_HOLDERS,CREATE_AC, SINGLE_ACCOUNT } from '../actionTypes/actionTypes';

export const createAccount = (formdata)=>(dispatch)=>{
    axios.post('/createaccount',formdata,{
        headers:{
            "content-type":"application/json"
        }
    })
    .then(Response =>{
        dispatch({
            type:CREATE_AC,
            payload:{
                accountHolder:Response.data
            }
        })
    })
    .catch(error=>{
        console.log(error)
    })
}

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

export const singleAccount = (id) =>(dispatch)=>{
    axios.get(`/singleaccountholder/${id}`)
    .then(Response =>{
        dispatch({
            type:SINGLE_ACCOUNT,
            payload:{
                accountHolders:Response.data
            }
        })
    })
    .catch(error=>{
        console.log(error)
    })

}


