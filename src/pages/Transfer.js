import React, { useState } from 'react';
import KeyBtns from './KeyBtns';

function Transfer({ balanceAmountVar, balanceAmount2Var, handleTransfer }) {
  const [transferAmount, setTransferAmount] = useState(""); // State for transfer amount
  const [fromAcc, setFromAcc] = useState(""); // State for from account
  const [toAcc, setToAcc] = useState(""); // State for to account

  // Track changes in the transfer amount input field
  const handleChange = (e) => {
    setTransferAmount(e.target.value);
  };

  // Track changes in the from account input field
  const handleFromAcc = (e1) => {
    setFromAcc(e1.target.value);
  };

  // Track changes in the to account input field
  const handleToAcc = (e2) => {
    setToAcc(e2.target.value);
  };

  // Handler for submitting the transfer
  const handleSubmit = () => {
    const amount = parseFloat(transferAmount);
    if (fromAcc !== "1" && fromAcc !== "2") {
      alert("Your account number you want to transfer from is not available.");
    } if (toAcc !== "1" && toAcc !== "2") {
      alert("Your account number you want to transfer to is not available.");
    } if (fromAcc === toAcc) {
      alert("You can't transfer from and to the same account.");
    } 
    if(fromAcc !== "1") {
      handleTransfer(amount, fromAcc, toAcc); // Call handleTransfer through props from App.js
    }
    setTransferAmount(""); // Clear input fields
    setFromAcc("");
    setToAcc("");
  };

  return (
    <div>
      <h2>Transfer Funds</h2>
      <p>Transfer From Account Number:</p>
      <input
        type="number"
        value={fromAcc}
        onChange={handleFromAcc}
        placeholder="Transfer from"
      /><br/>
      <p>Transfer To Account Number:</p>
      <input
        type="number"
        value={toAcc}
        onChange={handleToAcc}
        placeholder="Transfer to"
      /><br/>
      <p>How much are you looking to transfer:</p>
      <input
        type="number"
        value={transferAmount}
        onChange={handleChange}
        placeholder="Enter amount"
      />
      <KeyBtns label="Transfer" click={handleSubmit} /> {/* Submit transfer */}
    </div>
  );
}

export default Transfer;
