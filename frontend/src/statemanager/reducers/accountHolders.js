import {ALL_ACCOUNT_HOLDERS, SINGLE_ACCOUNT} from '../actionTypes/actionTypes';

const initialstate = {
    items:[],
    accountHolder:{},// Single accountholder only
    loading:true
}

const accountHolders = (state=initialstate,action)=>{
    switch(action.type){
        case ALL_ACCOUNT_HOLDERS:
            return{
                ...state,
                items:action.payload.accountHolders,
                loading:false
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