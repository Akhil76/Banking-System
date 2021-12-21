import {Routes,Route} from "react-router-dom";
import Home from '../pages/Home';
import CreateAccount from '../pages/CreateAccount';

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/createaccount" element={<CreateAccount />}/>
        </Routes>
    )
}

export default Router;