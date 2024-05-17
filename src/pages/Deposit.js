import React, { useState } from 'react';
import KeyBtns from './KeyBtns';

function Deposit({ balanceAmountVar, handleDeposit }) {
    const [depositAmount, setDepositAmount] = useState(""); // State for deposit amount

    // tracks each time any changes happens in the text field
    const handleChange = (e) => {
        setDepositAmount(e.target.value);
    };//couldnt find any other way to read the contents of the input field. 
    //i dont understand how the syntax works but i will look into it more. this portion is copied from 
    //https://stackoverflow.com/questions/54422696/in-react-hook-no-e-target-in-handlechange-with-setvalue

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
