// main selector 
let button = document.querySelector(".btn-rules");
let pageRules = document.querySelector(".page-rules");
let imgRules = document.querySelector(".page-rules .parent-rules");
let close = document.querySelector(".close");
let allShape = document.querySelectorAll(".shapes .shape");
let shapesContainer = document.querySelector(".shapes");
let section = document.querySelector(".section");
let textScore = document.querySelector(".score h1");
let userClicked = document.getElementById("user-clicked");
let computerClicked = document.getElementById("computer-clicked");
let statusGame = document.querySelector(".status-text");
let play = document.querySelector(".play-button");
const arrChoice = ["paper", "scissors", "rock"];
let userChoice;
let score = 0;


// function score
const updateScore = (val) => {
    score += val;
    textScore.innerText = score;
}

// random choice function.
const randomChoice = () => {
    return arrChoice[Math.floor(Math.random() * arrChoice.length)];
}


// function to Update section
const updateSection = (eleSection, choice) => {
    // reset the shape
    eleSection.classList.remove("paper");
    eleSection.classList.remove("rock");
    eleSection.classList.remove("scissors");

    // add the shape src 
    const img = eleSection.querySelector("img");
    img.src = `./images/icon-${choice}.svg`;
    img.alt = choice;

    // add class to show color
    eleSection.classList.add(choice);


}



// function check winner user or computer 
const checkWinnerUserOrComputer = () => {
    const computerChoice = randomChoice();

    // run function to reset the shape  and get the choice shape user and computer
    updateSection(userClicked, userChoice);
    updateSection(computerClicked, computerChoice);

    if (computerChoice === userChoice) {
        statusGame.innerHTML = "You Draw";
        document.querySelector(".draw").play();

    } else if (
        computerChoice === "paper" && userChoice === "rock" ||
        computerChoice === "rock" && userChoice === "scissors" ||
        computerChoice === "scissors" && userChoice === "paper"
    ) {
        // user lost
        statusGame.innerHTML = "You Lose";
        document.querySelector(".fail").play();
        updateScore(-1);
    } else {
        // user win
        statusGame.innerHTML = "You win";
        updateScore(1);
        document.querySelector(".sucsse").play();
    }
}


// loop in all shapes then saved user clicked element data
allShape.forEach(shape => {
    shape.onclick = function () {
        userChoice = shape.getAttribute("data-choice");
        shapesContainer.style.display = "none";
        section.style.display = "flex";
        checkWinnerUserOrComputer();
    }
})





// show Rules Game 
button.onclick = function () {
    pageRules.style.display = "block";
}

// Remove Rules Game
close.onclick = function () {
    pageRules.style.display = "none";
}

// play again the game 

play.onclick = function () {
    shapesContainer.style.display = "flex";
    section.style.display = "none";
}




