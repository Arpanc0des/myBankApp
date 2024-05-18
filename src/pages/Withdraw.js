import React, { useState } from 'react';
import KeyBtns from './KeyBtns';

function Withdraw({ balanceAmountVar, handleWithdrawVar }) {
    const [withdrawAmount, setWithdrawAmount] = useState(""); // State for withdrawal amount

    // tracks each time any changes happens in the text field
    const handleChange = (e) => {
        setWithdrawAmount(e.target.value);
    };//couldnt find any other way to read the contents of the input field. 
    //i dont understand how it works but i will look into it more. this portion is copied from 
    //https://stackoverflow.com/questions/54422696/in-react-hook-no-e-target-in-handlechange-with-setvalue


    // Handler for submitting the withdrawal
    const handleSubmit = () => {
        const amount = parseFloat(withdrawAmount);
        if (isNaN(amount) || amount <= 0) { //if its not a number or less than 0
            alert("Please enter a valid positive number.");
        } else {
            handleWithdrawVar(amount); // call handleWithdrawVar through props from app.js
            setWithdrawAmount(""); // clear input field
        }
    };

    return (
        <div>
            <h2>You can withdraw your money from here.</h2>
            <p>This is your current balance</p>
            <h3>${balanceAmountVar.toFixed(2)}</h3>
            <p>How much are you willing to withdraw today?</p>
            <input
                type="number"
                value={withdrawAmount}
                onChange={handleChange}
                placeholder="Enter amount"
            />
            <KeyBtns label="Withdraw" click={handleSubmit} /> {/* Submit withdrawal */}
        </div>
    );
}

export default Withdraw;
