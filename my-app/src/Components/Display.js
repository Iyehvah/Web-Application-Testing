import React from 'react';

const Display = props => {
    return (
        <div>
            <h3>Display</h3>
            <p>Ball: {props.ball}</p>
            <p>Strike: {props.strike}</p>
        </div>
    )
}

export default Display;