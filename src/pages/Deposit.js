import React, { useState } from 'react';
import KeyBtns from './KeyBtns';

function Deposit({ balanceAmountVar, handleDeposit }) {
    const [depositAmount, setDepositAmount] = useState(""); // State for deposit amount

    // tracks each time any changes happens in the text field
    const handleChange = (e) => {
        setDepositAmount(e.target.value);
    };
    // Handler for submitting the deposit
    const handleSubmit = () => {
        const amount = parseFloat(depositAmount);
        if (isNaN(amount) || amount <= 0) {
            alert("Please enter a valid positive number.");
        } else {
            handleDeposit(amount); // call  handleDeposit through props from app.js
            setDepositAmount(""); // clear input
        }
    };

    return (
        <div>
            <h2>You can deposit your money from here.</h2>
            <p>This is your current balance</p>
            <h3>${balanceAmountVar.toFixed(2)}</h3>
            <p>How much are you willing to deposit today?</p>

            <input
                type="number"
                value={depositAmount}
                onChange={handleChange}
                placeholder="Enter amount"
            />
            <KeyBtns label="Deposit" click={handleSubmit} /> {/* btn for deposit */}
        </div>
    );
}

export default Deposit;
