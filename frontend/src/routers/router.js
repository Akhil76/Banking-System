import {Routes,Route} from "react-router-dom";
import Home from '../pages/Home';
import RecentDeposit from "../components/RecentDeposit";
import RecentWithdraw from '../components/RecentWithdraw';
import RecentTransfer from '../components/RecentTransfer';
import AccountHolders from '../components/AccountHolders';
import CreateAccount from '../pages/CreateAccount';
import Transaction from "../pages/Transaction";
import TransactionTable from "../components/transactionCom/TransactionTable";
import Deposit from "../components/transactionCom/Deposit";
import Withdraw from "../components/transactionCom/Withdraw";
import Transfer from "../components/transactionCom/Transfer";
import AccountDetails from "../components/transactionCom/AccountDetails";
import AccountManager from "../pages/AccountManager";


function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />}>
                <Route index element={<RecentDeposit/>}/>
                <Route path="recentwithdraw" element={<RecentWithdraw/>}/>
                <Route path="recenttransfer" element={<RecentTransfer/>}/>
                <Route path="accountholders" element={<AccountHolders/>}/>
            </Route>
            <Route path="/createaccount" element={<CreateAccount />}/>
            <Route path="/transaction/" element={<Transaction/>}>
                <Route index element={<TransactionTable/>}/>
                <Route path="deposit" element={<Deposit/>}/>
                <Route path="withdraw" element={<Withdraw/>}/>
                <Route path="transfer" element={<Transfer/>}/>
                <Route path=":accountNo" element={<AccountDetails/>}/>
            </Route>
            <Route path="/accountmanager" element={<AccountManager/>}/>
        </Routes>
    )
}

export default Router;