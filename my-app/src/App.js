import React, {useState, useEffect} from 'react';
import './App.css';
import Display from './Components/Display';

function App() {

  const [ball, setBall] =useState(0);
  const [strike, setStrike] = useState(0);

  const strikeButton = () => {
      if (strike === 2) {
        setStrike(0)
        setBall(0)
      } else {
        setStrike(strike + 1)
      }
    }
  
    const ballButton = () => {
      if (ball === 3) {
        setStrike(0)
        setBall(0)
      } else {
        setBall(ball + 1)
      }
    }
  
    const foulButton = () => {
      if (strike === 2) {
        setStrike(2)
      } else {
        setStrike(strike + 1)
      }
    }
  
    const hitButton = () => {
      setStrike(0);
      setBall(0);
    }


  return (
      <div>
        <h2>Lets Play Some BaseBall!!!!!!</h2>
        <Display strike={strike} ball={ball} />
      </div>
  );
}

export default App;
