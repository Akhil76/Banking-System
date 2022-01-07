import {Routes,Route} from "react-router-dom";
import Home from '../pages/Home';
import TotalDeposit from "../components/TotalDeposit";
import TotalWithdraw from '../components/TotalWithdraw';
import TotalTransfer from '../components/TotalTransfer';
import AccountHolders from '../components/AccountHolders';
import CreateAccount from '../pages/CreateAccount';
import Transaction from "../pages/Transaction";
import Deposit from "../components/transactionCom/Deposit";
import Withdraw from "../components/transactionCom/Withdraw";
import Transfer from "../components/transactionCom/Transfer";
import AccountManager from "../pages/AccountManager";


function Router() {
    return (
        <Routes>
            <Route path="/*" element={<Home />}>
                <Route path="/*" element={<TotalDeposit/>}/>
                <Route path="totalwithdraw" element={<TotalWithdraw/>}/>
                <Route path="totaltransfer" element={<TotalTransfer/>}/>
                <Route path="accountholders" element={<AccountHolders/>}/>
            </Route>
            <Route path="/createaccount" element={<CreateAccount />}/>
            <Route path="/transaction" element={<Transaction/>}>
                <Route path="" element={<Deposit/>}/>
                <Route path="withdraw" element={<Withdraw/>}/>
                <Route path="transfer" element={<Transfer/>}/>
            </Route>
            <Route path="/accountmanager" element={<AccountManager/>}/>
        </Routes>
    )
}

export default Router;