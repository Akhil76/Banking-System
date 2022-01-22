import {ALL_ACCOUNT_HOLDERS, SINGLE_ACCOUNT} from '../actionTypes/actionTypes';

const initialstate = {
    accountHolders:[],
    accountHolder:[],// Single accountholder only
    loading:true
}

const accountHolders = (state=initialstate,action)=>{
    switch(action.type){
        case ALL_ACCOUNT_HOLDERS:
            return{
                ...state,
                accountHolders:action.payload.accountHolders,
                loading:false
            }
        case CREATE_AC:
            return{
                ...state,
                accountHolder:action.payload
            }
        case SINGLE_ACCOUNT:
            return{
                ...state,
                accountHolder:action.payload.accountHolders,
                loading:false
            }
        default :
            return state

    }
}

export default accountHolders;