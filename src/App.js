import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Deposit from './pages/Deposit';
import Home from './pages/Home';
import Withdraw from './pages/Withdraw';
import './App.css';
import logo from './image.png';

function App() {
  const [balanceAmount, setBalanceAmount] = useState(100);

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
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home balanceAmountProp={balanceAmount} />} />  {/*Passing balanceammount to home for it to plau around with. just the variable*/}
        <Route path="/withdraw" element={<Withdraw balanceAmountVar={balanceAmount} handleWithdrawVar={handleWithdraw} />} /> {/*passing balance variable and handler function*/}
        <Route path="/deposit" element={<Deposit balanceAmountVar={balanceAmount} handleDeposit={handleDeposit} />} />{/*same as withdrawing */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
