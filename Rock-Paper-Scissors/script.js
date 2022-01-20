const choiceArray = [
    {
        name: 'Rock',
        picture: '<img src="./image/theRock200.jpg" alt="PLayer" width="200" height="200">',
        value: 1
    },

    {
        name: 'paper',
        picture: '<img src="./image/paper.jfif" alt="PLayer" width="200" height="200">',
        value: 1
    },

    {
        name: 'scissors',
        picture: '<img src="./image/scissors200.jpg" alt="PLayer" width="200" height="200">',
        value: 1
    },
]



const choice1 = document.getElementById("choice1");
const choice2 = document.getElementById("choice2");
const play = document.getElementById("play");
const buttonRock = document.getElementById("rock");
const buttonPaper = document.getElementById("paper");
const buttonScissors = document.getElementById("scissors");
console.log(play);
buttonRock.addEventListener('click', function () {
    event.preventDefault();
    choice1.innerHTML = choiceArray[0].picture;


})

buttonPaper.addEventListener('click', function () {
    event.preventDefault();
    choice1.innerHTML = choiceArray[1].picture;


})

buttonScissors.addEventListener('click', function () {
    event.preventDefault();
    choice1.innerHTML = choiceArray[2].picture;


})

play.addEventListener('click', function () {
    event.preventDefault();
    for (let i = 0; i < choiceArray.length; i++){
       const randomP = Math.floor(Math.random() * choiceArray.length);
       if (randomP === 0){
           choice2.innerHTML = choiceArray[0].picture;
       }if (randomP === 1){
            choice2.innerHTML = choiceArray[1].picture;
        }if (randomP === 2){
            choice2.innerHTML = choiceArray[2].picture;
        }
    }


})






