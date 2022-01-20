const rock = [
    {
        name: 'Rock',
        picture: '<img src="./image/theRock200.jpg" alt="PLayer" width="200" height="200">',
        value: 1
    }
]

const paper = [
    {
        name: 'paper',
        picture: '<img src="./image/paper.jfif" alt="PLayer" width="200" height="200">',
        value: 1
    }
]

const scissors = [
    {
        name: 'scissors',
        picture: '<img src="./image/scissors200.jpg" alt="PLayer" width="200" height="200">',
        value: 1
    }
]


const choice1 = document.getElementById("choice1");
const choice2 = document.getElementById("choice2");

const buttonRock = document.getElementById("rock");
const buttonPaper = document.getElementById("paper");
const buttonScissors = document.getElementById("scissors");




buttonRock.addEventListener('click', function () {
    event.preventDefault();
    choice1.innerHTML = rock[0].picture;


})

buttonPaper.addEventListener('click', function () {
    event.preventDefault();
    choice1.innerHTML = paper[0].picture;


})

buttonScissors.addEventListener('click', function () {
    event.preventDefault();
    choice1.innerHTML = scissors[0].picture;


})




