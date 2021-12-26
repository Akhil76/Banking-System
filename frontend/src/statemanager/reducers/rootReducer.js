import { combineReducers } from "redux";
import accountHolders from './accountHolders';



const rootReducer = combineReducers({
    allAccountHoders:accountHolders,
});


export default rootReducer;