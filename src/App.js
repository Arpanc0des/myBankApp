import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Deposit from './pages/Deposit';
import Home from './pages/Home';
import Withdraw from './pages/Withdraw';
import Transfer from './pages/Transfer';
import './App.css';
import logo from './image.png';

function App() {
  const [balanceAmount, setBalanceAmount] = useState(0);
  const [balanceAmount2, setBalanceAmount2] = useState(10);

  useEffect(() => {
    fetchBalance();
  }, []);

  // Function to fetch balance from the API
  const fetchBalance = () => {
    fetch('http://127.0.0.1:8000/balance')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setBalanceAmount(data.balance);
      })
      .catch(error => {
        console.error('Error fetching balance:', error);
      });
  };

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
