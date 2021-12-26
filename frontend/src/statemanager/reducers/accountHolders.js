import {ALL_ACCOUNT_HOLDERS} from '../actionTypes/actionTypes';

const initialstate = {
    items:[],
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
        default :
            return state


    }
}

export default accountHolders;