import React from 'react';

const Countdown = ({count, tick, reset}) => {

    console.log(count);
    if (count) {
        console.log('setTimeout');
        setTimeout(() => tick(), 1000);
    }

    return (count) ?
        <h1>{count}</h1> :
        <div onClick={() => reset(10)}>
            <h1>CELEBRATE!</h1>
            <p>(click to reset)</p>
        </div>
};

export default Countdown;