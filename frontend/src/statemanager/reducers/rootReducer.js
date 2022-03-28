import { combineReducers } from "redux";
import accountHolders from './accountHolders';
import transaction from './transaction';
import authReducer from './auth';



const rootReducer = combineReducers({
    allAccountHoders:accountHolders,
    transaction:transaction,
    auth:authReducer
});


export default rootReducer;