import React from 'react';

const Dashboard = props => {
    return (
        <div>
            <button onClick={props.strikeButton}> Strike! </button>
            <button onClick={props.ballButton}> Ball! </button>
            <button onClick={props.foulButton}> Foul Ball! </button>
            <button onClick={props.hitButton}> HIT </button>
        </div>
    )
}

export default Dashboard;