export const CHOICES = {
    scissors: {
        name: "scissors",
        url:  "/img/scissor1.png"
      },
      paper: {
        name: "paper",
        url: "/img/paper1.png"
      },
      rock: {
        name: "rock",
        url: "/img/fist1.png"
      }
  };
  
  export const getRandomChoice = () => {
    let choiceNames = Object.keys(CHOICES); // returns an array of the keys, so: ['scissors', 'paper', 'rock']
    let randomIndex = Math.floor(Math.random() * 3); // either 0, 1, or 2
    let choiceName = choiceNames[randomIndex];
    return CHOICES[choiceName];
  };
  
  export const getRoundOutcome = userChoice => {
    const computerChoice = getRandomChoice().name;
    let result;
  
    if (userChoice === "rock") {
      result = computerChoice === "scissors" ? "Win!" : "Lose!";
    }
    if (userChoice === "paper") {
      result = computerChoice === "rock" ? "Win!" : "Lose!";
    }
    if (userChoice === "scissors") {
      result = computerChoice === "paper" ? "Win!" : "Lose!";
    }
  
    if (userChoice === computerChoice) result = "Tie!";
    return [result, computerChoice];
  };