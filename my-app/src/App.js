import React, {useState} from 'react';
import './App.css';
import Display from './Components/Display';
import Dashboard from './Components/Dashboard';

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
        <Display
        // passing state values to display component via PROPS
         strike={strike}
         ball={ball}/>

        <Dashboard
        // passing button functionality to buttons in DASHBOARD via PROPS
         strikeButton={strikeButton}
         ballButton={ballButton}
         foulButton={foulButton}
         hitButton={hitButton}/>
      </div>
  );
}

export default App;
