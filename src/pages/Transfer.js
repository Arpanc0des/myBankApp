import React, { useState } from 'react';
import KeyBtns from './KeyBtns';

function Transfer({ handleTransfer }) {
    const [transferAmount, setTransferAmount] = useState("");
    const [fromAcc, setFromAcc] = useState("");
    const [toAcc, setToAcc] = useState("");
    const [error, setError] = useState(""); // State for error handling

    const handleChange = (e) => {
        setTransferAmount(e.target.value);
    };

    const handleFromAcc = (e) => {
        setFromAcc(e.target.value);
    };

    const handleToAcc = (e) => {
        setToAcc(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload

        // Input validation
        if (!fromAcc || !toAcc || !transferAmount) {
            setError("All fields are required.");
            return;
        }

        if (isNaN(fromAcc) || isNaN(toAcc) || isNaN(transferAmount)) {
            setError("Please enter valid numbers.");
            return;
        }

        if (parseFloat(transferAmount) <= 0) {
            setError("Transfer amount must be greater than zero.");
            return;
        }

        setError(""); // Clear any previous errors
        handleTransfer(fromAcc, toAcc, parseFloat(transferAmount));
        console.log(`${fromAcc} ${toAcc} ${transferAmount}`);
        setTransferAmount("");
        setFromAcc("");
        setToAcc("");
    };

    return (
        <div>
            <h2>Transfer Funds</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="fromAcc">Transfer From Account Number:</label>
                    <input
                        id="fromAcc"
                        type="number"
                        onChange={handleFromAcc}
                        value={fromAcc}
                        placeholder="Transfer from"
                    />
                </div>
                <div>
                    <label htmlFor="toAcc">Transfer To Account Number:</label>
                    <input
                        id="toAcc"
                        type="number"
                        onChange={handleToAcc}
                        value={toAcc}
                        placeholder="Transfer to"
                    />
                </div>
                <div>
                    <label htmlFor="transferAmount">How much are you looking to transfer:</label>
                    <input
                        id="transferAmount"
                        type="number"
                        onChange={handleChange}
                        value={transferAmount}
                        placeholder="Enter amount"
                    />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <KeyBtns label="Transfer" click={handleSubmit} /> {/* Submit transfer */}
            </form>
        </div>
    );
}

export default Transfer;
