import axios from 'axios';
import {MAKE_TRANSACTION,ALL_TRANSACTION,TRANS_BY_TYPE} from '../actionTypes/actionTypes';


export const maketransaction = (transactiondata) =>(dispatch)=>{
    axios.post('/transaction',transactiondata)
    .then(Response =>{
        dispatch({
            type:MAKE_TRANSACTION,
            payload:{
                message:Response.data
            }
        })
    })
    .catch(error=>{
        console.log(error)
    })
}


export const alltransactions = () =>(dispatch)=>{
    axios.get('/alltransactions')
    .then(Response =>{
        dispatch({
            type:ALL_TRANSACTION,
            payload:{
                alltransactions:Response.data
            }
        })
    })
    .catch(error=>{
        console.log(error)
    })

}

export const transactionByType = (type) =>(dispatch)=>{
    axios.get(`/transactionsbytype/${type}`)
    .then(Response =>{
        dispatch({
            type:TRANS_BY_TYPE,
            payload:{
                transactionByType:Response.data
            }
        })
    })
    .catch(error=>{
        console.log(error)
    })

}



