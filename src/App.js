import { useEffect, useState } from 'react';
import './App.css';
import divider from './assets/pattern-divider-mobile.svg';
import dice from './assets/icon-dice.svg'

function App() {

  const [advice, setAdvice] = useState({id: 0, advice: ''});
  
  function getAdvice(){
    fetch(
      "https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((json) => {
        let slip = json.slip;
        setAdvice(slip)
      })
  }

  useEffect(()=>{
    getAdvice();
  }, []);

  function onShuffleClick(){
    getAdvice();
  }

  return (
    <div className="parent-div">
      <div className='advice-div'>
        <p id='adviceNumber'>ADVICE #{advice.id}</p>
        <p id='quote'>"{advice.advice}"</p>
        <img id='divider' src={divider}/>
        <div className='dice-div' onClick={onShuffleClick}>
          <img id='shuffleButton' src={dice}/>
        </div>
      </div>
    </div>
  );
}

export default App;
