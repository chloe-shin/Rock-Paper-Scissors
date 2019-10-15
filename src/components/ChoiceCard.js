import React from 'react'
import { DEFAULT_ECDH_CURVE } from 'tls';
const DEFAULT_IMG =
  "https://image.flaticon.com/icons/svg/263/263136.svg";


export default function ChoiceCard(props) {
 
        const won = props.title === props.previousWinner;
        let className;
        const hasPreviousGame =
          props.previousWinner === "Computer" || props.previousWinner === "You";
        if (hasPreviousGame) {
          className = won ? "winner" : "loser";
        }
      
        let prompt;
        if (won) {
          prompt = "Won";
          className = won ? "winner" : "loser";
        } else if (props.previousWinner === "Tie!") {
          prompt = "Tie!";
        } else if (props.previousWinner === null) {
          prompt = "Start";
        } else {
          prompt = "Lose";
        }

    console.log("Props", props);
    return (
        <div className= {`choice-card ${className}`}>
            <h4> {props.title} </h4>
            <img className = "rps" src={props.imgURL || DEFAULT_IMG} alt={props.title}/>
            <h4>{prompt}</h4>
        </div>  
    )
}
