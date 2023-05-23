const guessedLetters = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const progress = document.querySelector(".word-in-progress");
const remaining = document.querySelector(".remaining");
const remainingSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";

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
    const entry = letterInput.value;
    console.log(entry);
    letterInput.value = "";
});