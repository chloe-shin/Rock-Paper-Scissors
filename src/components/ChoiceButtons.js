import React from "react";

export default function ChoiceButtons(props){
    return(
    <div className="container rspbutton">
    <button
      className="btn btn-light rspbtn"
      onClick={() => props.onPlayerChoose("rock")}
    >
     Rock
    </button>
    <button
      className="btn btn-light rspbtn"
      onClick={() => props.onPlayerChoose("paper")}
    >
      Paper
    </button>
    <button
      className="btn btn-light rspbtn"
      onClick={() => props.onPlayerChoose("scissors")}
    >
      Scissors
    </button>
  </div>
 );
}