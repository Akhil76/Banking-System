import {TRANSACTION} from '../actionTypes/actionTypes';

const initialstate = {
    items:[],
    loading:true
}

const transaction = (state=initialstate,action)=>{
    switch(action.type){
        case TRANSACTION:
            return{
                ...state,
                transaction:action.payload
            }
        default :
            return state

    }
}

export default transaction;