// import React from 'react';
import logo from './logo.svg';
import './App.css';
import ChoiceCard from "./components/ChoiceCard";
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import ChoiceButtons from "./components/ChoiceButtons";
import { CHOICES, getRoundOutcome } from "./utils";

import React, { useState } from "react";

function App() {
  const [prompt, setGamePrompt] = useState('Let\'s start a game!');

  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null); // Introduce two new pieces of state, playerChoice & computerChoice, with useState.
  const [previousWinner, setPreviousWinner] = useState(null);

  const [gameHistory, setGameHistory] = useState([]);

  const onPlayerChoose = playerChoice => {
  const [result, compChoice] = getRoundOutcome(playerChoice);
  const newUserChoice = CHOICES[playerChoice];
  const newComputerChoice = CHOICES[compChoice];
  setPlayerChoice(newUserChoice);
  setComputerChoice(newComputerChoice);
  console.log('result', result)
  console.log('compChoice', compChoice)
  
  if (result === "Win!") {
    setPreviousWinner("You");
  } else if (result === "Lose!") {
    setPreviousWinner("Computer");
  } else {
    setPreviousWinner("Tie!");
  }

  setGamePrompt(result);
  gameHistory.push(result);
  setGameHistory(gameHistory);
};

  return (
    <div className="App">
      <Navbar/> 
        <div className="container body mt-5">
           <div className="row mb-3 cards">
              <div className="col-md-8 themed-grid-col">
                 <div className="Card">
                 <h1>{prompt}</h1>
                    <ChoiceButtons onPlayerChoose={onPlayerChoose} />
                  <div class="choiceCard1">
                    <ChoiceCard
                      title="Computer" 
                      previousWinner={previousWinner}
                      imgURL= {computerChoice && computerChoice.url}
                      />
                    <ChoiceCard
                      title="You"
                      previousWinner={previousWinner}
                      imgURL= {playerChoice && playerChoice.url}
                      />
                  </div>
                        
                 </div>
              </div>
            </div> 
        </div>
        <div className="container history">
     
             <h3>History</h3>
               <ul>
                 {gameHistory.map(result => {
                  return <li>{result}</li>;
                  })}
               </ul>
       
        </div>
    </div>
  );
}

export default App;
