import axios from 'axios';
import {TRANSACTION} from '../actionTypes/actionTypes';


export const transaction = (transactiondata) =>(dispatch)=>{
    axios.post('/transaction',transactiondata)
    .then(Response =>{
        dispatch({
            type:TRANSACTION,
            payload:{
                transaction:Response.data
            }
        })
    })
    .catch(error=>{
        console.log(error)
    })

}
