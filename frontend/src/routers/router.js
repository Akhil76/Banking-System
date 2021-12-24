import {Routes,Route} from "react-router-dom";
import Home from '../pages/Home';
import CreateAccount from '../pages/CreateAccount';
import Transaction from "../pages/Transaction";


function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/createaccount" element={<CreateAccount />}/>
            <Route path="/transaction" element={<Transaction/>}/>
        </Routes>
    )
}

export default Router;