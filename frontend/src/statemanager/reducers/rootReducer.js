import { combineReducers } from "redux";
import accountHolders from './accountHolders';
import transaction from './transaction';



const rootReducer = combineReducers({
    allAccountHoders:accountHolders,
    transaction:transaction
});


export default rootReducer;