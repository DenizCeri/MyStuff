let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score_board");
const result_p = document.querySelector(".result > p"); 
const rock_div = document.getElementById("r");
const scissors_div = document.getElementById("s");
const paper_div = document.getElementById("p");

function getComputerChoice() {
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}
function convertToWord(letter){
    if (letter === "r") return "Rock";
    else if (letter === "p") return "Paper";
    else if (letter === "s") return "Scissors";
}

function wins(user, computer) {
    userScore++;
    const userChoice_div = document.getElementById(user);
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(user)} beats ${convertToWord(computer)}.You Win!`
    userChoice_div.classList.add('green-glow');
    setTimeout (() => userChoice_div.classList.remove('green-glow'),550);
}

function lose(user, computer) {
    computerScore++;
    const userChoice_div = document.getElementById(user);
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(user)} loses to ${convertToWord(computer)}.You Lose!`
    userChoice_div.classList.add('red-glow');
    setTimeout (() => userChoice_div.classList.remove('red-glow'),550);
}

function draw(user, computer) {
    const userChoice_div = document.getElementById(user);
    result_p.innerHTML = `${convertToWord(user)} and ${convertToWord(computer)} is the same. It's a Draw`
    userChoice_div.classList.add('gray-glow');
    setTimeout (() => userChoice_div.classList.remove('gray-glow'),550);
}

function game(userChoice) {
   const computerChoice = getComputerChoice();
   switch (userChoice + computerChoice){
       case "rs":
       case "pr":
       case "sp":  
        wins(userChoice,computerChoice);
        break;
       case "sr":
       case "rp":
       case "ps":
        lose(userChoice,computerChoice);
        break;
       case "rr":
       case "pp":     
       case "ss":
        draw(userChoice,computerChoice);
        break;              
   }
}

function main(){
    rock_div.addEventListener('click', () => game("r"));
    scissors_div.addEventListener('click', () =>game("s"));
    paper_div.addEventListener('click', () => game("p"));
}

main();
