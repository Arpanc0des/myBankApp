import React from 'react';
import KeyBtns from './KeyBtns';

function Home({ balanceAmountProp, balanceAmount2Prop }) {
    return (
        <div>
            <h2>Welcome to your Home page</h2>
            <p>These are your accounts and there amounts..</p>
            <p>Account: Checking -- 1</p>
            <h3>${balanceAmountProp.toFixed(2)}</h3>  {/*to round the after decimal to only 2 digits after "." */}
            <p>Account: Savings -- 2</p>
            <h3>${balanceAmount2Prop.toFixed(2)}</h3>
        </div>
    );
}

export default Home;
