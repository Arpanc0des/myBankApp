import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Deposit from './pages/Deposit';
import Home from './pages/Home';
import Withdraw from './pages/Withdraw';
import Transfer from './pages/Transfer';
import './App.css';
import logo from './image.png';

function App() {
  const [balanceAmount, setBalanceAmount] = useState(100);
  const [balanceAmount2, setBalanceAmount2] = useState(10);
  function handleWithdraw(amount) {
    if (balanceAmount >= amount) {
      setBalanceAmount(prevBalance => prevBalance - amount);
    } else {
      alert("Insufficient balance!");
    }
  }

  function handleDeposit(amount) {
    setBalanceAmount(prevBalance => prevBalance + amount);
  }

  function handleTransfer(from, to, amount) {
    if ((from === 1 || from === 2) && (to === 1 || to === 2) && from !== to) {
      if ((from === 1 && balanceAmount >= amount) || (from === 2 && balanceAmount2 >= amount)) {
        if (from === 1) {
          setBalanceAmount(prevBalance => prevBalance - amount);
          setBalanceAmount2(prevBalance => prevBalance + amount);
        } else {
          setBalanceAmount2(prevBalance => prevBalance - amount);
          setBalanceAmount(prevBalance => prevBalance + amount);
        }
      } else {
        window.alert("Insufficient funds in the source account.");
      }
    } else {
      window.alert("Account numbers must be either 1 or 2 and must not be the same.");
    }
  }


  return (
    <BrowserRouter>
      <div>
        <nav>
          <img src={logo} alt="AgriBank Logo"/>
          <h1>AgriBank</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/withdraw">Withdraw</Link></li>
            <li><Link to="/deposit">Deposit</Link></li>
            <li><Link to="/transfer">Transfer</Link></li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home balanceAmountProp={balanceAmount} balanceAmount2Prop={balanceAmount2}/>} />  {/*Passing balanceammount to home for it to plau around with. just the variable*/}
        <Route path="/withdraw" element={<Withdraw balanceAmountVar={balanceAmount} handleWithdrawVar={handleWithdraw} />} /> {/*passing balance variable and handler function*/}
        <Route path="/deposit" element={<Deposit balanceAmountVar={balanceAmount} handleDeposit={handleDeposit} />} />{/*same as withdrawing */}
        <Route path="/transfer" element={<Transfer balanceAmountVar={balanceAmount} balanceAmount2Var={balanceAmount2} handleTransfer={handleTransfer} />} /> {/*passing balance variable and handler function*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
