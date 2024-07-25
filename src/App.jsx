import Deposite from "./Components/DepositePAge/Deposite";
import Handle from "./Components/Handle";
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Withdrawal from "./Components/WithdrawalPage/Withdrawal";
import IMPS from "./Components/WithdrawalPage/IMPS";
import PAytm from "./Components/WithdrawalPage/PAytm";

function App() {

  return (
    <>
       <Router>
           <Routes>
               <Route exact path="/" element={<Handle />}   />
               <Route exact path="/deposite/page" element={<Handle Doc={Deposite}/>} />
               <Route exact path="/withdrawal/page" element={<Handle Doc={Withdrawal} Method1 ={IMPS} />} />
               <Route exact path="/withdrawal/pytm" element={<Handle Doc={Withdrawal} Method1 ={PAytm} />} />
               <Route exact path="/withdrawal/imps" element={<Handle Doc={Withdrawal} Method1 ={IMPS} />} />
           </Routes>
       </Router>
    </>
  )
}

export default App
