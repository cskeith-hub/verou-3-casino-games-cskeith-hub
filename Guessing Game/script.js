const submit = document.getElementById("submit");



const userName = prompt("Welcome to Guess the number please enter your name");
const secretNumber = Number(Math.floor(Math.random() * 25));
console.log(secretNumber);
submit.addEventListener('click', function () {
    event.preventDefault();

    const right = (`Good Guess ${userName}`);
    const low = (`Guess is to low ${userName}`);
    const high = (`Guess is to high ${userName}`);

    const guessField = document.getElementById("guess").value;
    const outputField = document.getElementById("answer");


    if (guessField == secretNumber) {
        outputField.value = right;

    } else if (guessField < secretNumber) {
        outputField.value = low;

    } else if (guessField > secretNumber) {
        outputField.value = high;
    }
})



