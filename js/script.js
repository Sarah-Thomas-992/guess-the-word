const guessedLetters = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const progress = document.querySelector(".word-in-progress");
const remaining = document.querySelector(".remaining");
const remainingSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";
const lettersGuessed = [];

const circleText = function(word){
    const dotLetters = [];
    for (const dot of word){
        console.log(dot);
        dotLetters.push("●");
    }
    progress.innerText = dotLetters.join("");
};

circleText(word);

guessButton.addEventListener("click", function(e){
    e.preventDefault();
    message.innerText = "";
    const entry = letterInput.value;
    const goodEntry = validLetter(entry);
    if (goodEntry){
        makeGuess(entry);
    }
    letterInput.value = "";
});

const validLetter = function(input){
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === 0){
        message.innerText = "Please enter a value";
    } else if (input.length > 1){
        message.innerText = "Please enter only one letter";
    } else if (!input.match(acceptedLetter)) {
        message.innerText = "Please enter a valid letter";
    } else {
        return input;
    }
};

const makeGuess = function(letter){
    letter = letter.toUpperCase();
    if (lettersGuessed.includes(letter)){
        message.innerText = "You already guessed that letter. Try again!";
    } else{
        lettersGuessed.push(letter);
        console.log(lettersGuessed);
    }
};