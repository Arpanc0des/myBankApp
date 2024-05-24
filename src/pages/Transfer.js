import React, { useState } from 'react';
import KeyBtns from './KeyBtns';

function Transfer({ handleTransfer }) {
    const [transferAmount, setTransferAmount] = useState(""); // State for transfer amount
    const [fromAcc, setFromAcc] = useState(""); // State for from account
    const [toAcc, setToAcc] = useState(""); // State for to account

    // Track changes in the transfer amount input field
    const handleChange = (e) => {
        setTransferAmount(e.target.value);
    };

    const handleFromAcc = (e1) => {
        setFromAcc(e1.target.value);
    };

    const handleToAcc = (e2) => {
        setToAcc(e2.target.value);
    };

    // Handler for submitting the transfer
    const handleSubmit = () => {
        const amount = parseFloat(transferAmount);
        handleTransfer(fromAcc,toAcc,transferAmount);
        setTransferAmount("");
        setFromAcc("");
        setToAcc("");
    };

    return (
        <div>
            <h2>Transfer Funds</h2>
            <p>Transfer From Account Number:</p>
            <input
                type="number"
                onChange={handleFromAcc}
                placeholder="Transfer from"
            /><br />
            <p>Transfer To Account Number:</p>
            <input
                type="number"
                onChange={handleToAcc}
                placeholder="Transfer to"
            /><br />
            <p>How much are you looking to transfer:</p>
            <input
                type="number"
                onChange={handleChange}
                placeholder="Enter amount"
            />
            <KeyBtns label="Transfer" click={handleSubmit} /> {/* Submit transfer */}
        </div>
    );
}

export default Transfer;
