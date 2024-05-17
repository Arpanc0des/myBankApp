import React from 'react';
import KeyBtns from './KeyBtns';

function Home({ balanceAmountProp }) {
    return (
        <div>
            <h2>Welcome to your Home page</h2>
            <p>The following is your current balance:</p>
            <h3>${balanceAmountProp.toFixed(2)}</h3>  {/*to round the after decimal to only 2 digits after "." */}
            {/* <KeyBtns label="See Amount" click={() => {toogle to hide and show balance} /> */}
        </div>
    );
}

export default Home;
