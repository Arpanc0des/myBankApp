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
    const transferAmount = parseFloat(amount);

    if (from === to) {
      alert("Account numbers must be either 1 or 2 and must not be the same.");
      return;
    }

    if (isNaN(transferAmount) || transferAmount <= 0) {
      alert("Please enter a valid transfer amount.");
      return;
    }

    if (from === "1" && to === "2") {
      if (balanceAmount >= transferAmount) {
        setBalanceAmount(prevBalance => prevBalance - transferAmount);
        setBalanceAmount2(prevBalance => prevBalance + transferAmount);
      } else {
        alert("Insufficient balance in Account 1!");
      }
    } else if (from === "2" && to === "1") {
      if (balanceAmount2 >= transferAmount) {
        setBalanceAmount2(prevBalance => prevBalance - transferAmount);
        setBalanceAmount(prevBalance => prevBalance + transferAmount);
      } else {
        alert("Insufficient balance in Account 2!");
      }
    } else {
      alert("Invalid account numbers. Use 1 or 2.");
    }
  }

  return (
    <BrowserRouter>
      <div>
        <nav>
          <img src={logo} alt="AgriBank Logo" />
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
        <Route path="/" element={<Home balanceAmountProp={balanceAmount} balanceAmount2Prop={balanceAmount2} />} />
        <Route path="/withdraw" element={<Withdraw balanceAmountVar={balanceAmount} handleWithdrawVar={handleWithdraw} />} />
        <Route path="/deposit" element={<Deposit balanceAmountVar={balanceAmount} handleDeposit={handleDeposit} />} />
        <Route path="/transfer" element={<Transfer handleTransfer={handleTransfer} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
