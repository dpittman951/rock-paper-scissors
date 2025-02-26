let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let a = Math.random() * 100; //prints a random number between 0 and 100 (0 and 1 without * 100).
    if(a < 33.33){
        return "rock";
    }else if(a >= 33.33 && a < 66.66){
        return "paper";
    }else{
        return "scissors";
    }
}

function getHumanChoice(){
    let choice = prompt("Type rock, paper, or scissors.");
    if(choice.toLowerCase() === "rock" || choice.toLowerCase() === "paper" || choice.toLowerCase() === "scissors"){
       return choice;
    }
    while(choice.toLowerCase() !== "rock" || choice.toLowerCase() !== "paper" || choice.toLowerCase() !== "scissors"){
        choice = prompt("What you wrote is not a valid choice. Try again.");
        if(choice.toLowerCase() === "rock" || choice.toLowerCase() === "paper" || choice.toLowerCase() === "scissors"){
            break;
        }
    }
    return choice;
}

function playRound(humanChoice, computerChoice){
    if(humanChoice.toLowerCase() === computerChoice){
        console.log(`Draw. ${humanChoice.toLowerCase() } is the same as ${computerChoice}. Score: You:${humanScore} Computer:${computerScore}`);
    }
    else if(humanChoice.toLowerCase()  === "rock" && computerChoice === "scissors" || humanChoice.toLowerCase()  === "paper" && computerChoice  === "rock" || humanChoice.toLowerCase()  === "scissors" && computerChoice === "paper"){
        humanScore++;
        console.log(`You win! ${humanChoice.toLowerCase() } beats ${computerChoice}. Score: You:${humanScore} Computer:${computerScore}`);
    }
    else if(humanChoice.toLowerCase()  === "paper" && computerChoice === "scissors" || humanChoice.toLowerCase()  === "scissors" && computerChoice === "rock" || humanChoice.toLowerCase()  === "rock" && computerChoice === "paper"){
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice.toLowerCase()}. Score: You:${humanScore} Computer:${computerScore}`);
    }
}

const rockButt = document.querySelector("#rock");
const rockContent = document.createElement("div");
rockButt.addEventListener("click", () => {
    const humanSelection = "rock";
    const computerSelection = getComputerChoice();
    // console.log(playRound(humanSelection, computerSelection));
    rockContent.textContent = playRound(humanSelection, computerSelection);
    scoreKeeper();
});
    const papButt = document.querySelector("#paper");
const papContent = document.createElement("div");
    papButt.addEventListener("click", () => {
        const humanSelection = "paper";
        const computerSelection = getComputerChoice();
        // console.log(playRound(humanSelection, computerSelection));
        papContent.textContent = playRound(humanSelection, computerSelection);
        scoreKeeper();
    });
    const sciButt = document.querySelector("#scissors");
const sciContent = document.createElement("div");
    sciButt.addEventListener("click", () => {
        const humanSelection = "scissors";
        const computerSelection = getComputerChoice();
        // console.log(playRound(humanSelection, computerSelection));
        sciContent.textContent = playRound(humanSelection, computerSelection);
        scoreKeeper();
    });

    function scoreKeeper(){
        if(humanScore === 5){
            console.log("You were  the first to 5. Congrats, you won the game!");
            humanScore = 0;
            computerScore = 0;
        } 
        if(computerScore === 5){
            console.log("The computer was the first to 5. You lost the game!");
            humanScore = 0;
            computerScore = 0;
        }
    }

function playGame(){
    humanScore = 0;
    computerScore = 0;
    /*for(let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }*/

    if(humanScore === computerScore){
        return `Tie Game! Score: You:${humanScore} Computer:${computerScore}`
    }else if(humanScore > computerScore){
        return `You win! Score: You:${humanScore} Computer:${computerScore}`
    }
    else{
        return `You lose! Score: You:${humanScore} Computer:${computerScore}`
    }
}