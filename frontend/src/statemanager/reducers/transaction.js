import {ALL_TRANSACTION, MAKE_TRANSACTION} from '../actionTypes/actionTypes';

const initialstate = {
    transactions:[],
    loading:true
}

const transaction = (state=initialstate,action)=>{
    switch(action.type){
        case MAKE_TRANSACTION:
            return{
                ...state,
                transaction:action.payload
            }
        case ALL_TRANSACTION:
            return{
                ...state,
                transactions:action.payload.alltransactions,
                loading:false
            }
        default :
            return state

    }
}

export default transaction;