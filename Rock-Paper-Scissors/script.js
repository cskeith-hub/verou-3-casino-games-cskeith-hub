// Create array
const choiceArray = [{
        name: 'Rock',
        picture: '<img src="./image/theRock200.jpg" alt="rock" width="200" height="200">',
    },

    {
        name: 'Paper',
        picture: '<img src="./image/paper.jfif" alt="paper" width="200" height="200">',
    },

    {
        name: 'Scissors',
        picture: '<img src="./image/scissors200.jpg" alt="scissors" width="200" height="200">',
    },
]

const play = document.querySelector("button");
const buttonRock = document.getElementById("rock");
const buttonPaper = document.getElementById("paper");
const buttonScissors = document.getElementById("scissors");
let playerResult = document.getElementById("choice1");
let computerResult = document.getElementById("choice2");

play.addEventListener('click', function (startGame) {
    buttonRock.addEventListener('click', function (playerChoiceRock) {
        event.preventDefault();
        const playerRock = choiceArray[0].name;
        playerResult.innerHTML = choiceArray[0].picture;
        computer();
    })
    buttonPaper.addEventListener('click', function (playerChoicePaper) {
        event.preventDefault();
        const playerPaper = choiceArray[1].name;
        playerResult.innerHTML = choiceArray[1].picture;
        computer();
    })
    buttonScissors.addEventListener('click', function (playerChoiceScissors) {
        event.preventDefault();
        const playerScissors = choiceArray[2].name;
        playerResult.innerHTML = choiceArray[2].picture;
        computer();
    });
    console.log(buttonRock);

    // todo fetch computer choice + store variable
    const computer = () => {
        // todo make an array with options  this is global
        // todo generate random index for array
        let randomChoice = Math.floor(Math.random() * choiceArray.length);
        // todo create switch method for computer choices
        const computerChoice = choiceArray[randomChoice];
        switch (computerChoice.name) {
            case "Rock":
                computerResult.innerHTML = computerChoice.picture
                break;
            case "Paper":
                computerResult.innerHTML = computerChoice.picture
                break;
            case "Scissors":
                computerResult.innerHTML = computerChoice.picture
                break;
            default:
                return
        }
    }
    // TODO comparing variables
    // TODO result


})

// // todo fetch player choice + store variable
// buttonRock.addEventListener('click', function () {
//     event.preventDefault();
//     const playerChoiceRock = choiceArray[0].name;
//     playerChoice.innerHTML = choiceArray[0].picture;
//     computer();
// })
// buttonPaper.addEventListener('click', function () {
//     event.preventDefault();
//     const playerChoicePaper = choiceArray[1].name;
//     playerChoice.innerHTML = choiceArray[1].picture;
//     computer();
// })
// buttonScissors.addEventListener('click', function () {
//     event.preventDefault();
//     const playerChoiceScissors = choiceArray[2].name;
//     playerChoice.innerHTML = choiceArray[2].picture;
//     computer();
// });