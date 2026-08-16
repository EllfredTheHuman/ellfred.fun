/* =========================================================
   WORDY WORDS
   Game Logic
========================================================= */

let currentPuzzle = 0;
let score = 0;


/* =========================================================
   ELEMENTS
========================================================= */

const puzzleNumber = document.getElementById("puzzle-number");
const puzzleType = document.getElementById("puzzle-type");
const puzzleQuestion = document.getElementById("puzzle-question");

const answerInput = document.getElementById("answer");
const submitButton = document.getElementById("submit-button");

const feedback = document.getElementById("feedback");
const scoreDisplay = document.getElementById("score");


/* =========================================================
   LOAD PUZZLE
========================================================= */

function loadPuzzle() {

    const puzzle = PUZZLES[currentPuzzle];

    puzzleNumber.textContent = currentPuzzle + 1;

    puzzleType.textContent = puzzle.type.toUpperCase();

    puzzleQuestion.textContent = puzzle.question;

    answerInput.value = "";

    feedback.textContent = "";

    answerInput.focus();
}


/* =========================================================
   CHECK ANSWER
========================================================= */

function checkAnswer() {

    const puzzle = PUZZLES[currentPuzzle];

    const playerAnswer = answerInput.value
        .trim()
        .toUpperCase();

    if (playerAnswer === puzzle.answer.toUpperCase()) {

        score++;

        scoreDisplay.textContent = score;

        feedback.textContent = "✓ Correct!";

        currentPuzzle++;

        if (currentPuzzle >= PUZZLES.length) {

            finishGame();

        } else {

            setTimeout(() => {
                loadPuzzle();
            }, 700);

        }

    } else {

        feedback.textContent = "✗ Not quite. Try again!";
    }
}


/* =========================================================
   FINISH GAME
========================================================= */

function finishGame() {

    puzzleType.textContent = "COMPLETE";

    puzzleQuestion.textContent = "You solved every puzzle!";

    answerInput.style.display = "none";

    submitButton.style.display = "none";

    feedback.textContent = `Final score: ${score}/${PUZZLES.length}`;
}


/* =========================================================
   BUTTON
========================================================= */

submitButton.addEventListener("click", checkAnswer);


/* =========================================================
   ENTER KEY
========================================================= */

answerInput.addEventListener("keydown", event => {

    if (event.key === "Enter") {
        checkAnswer();
    }

});


/* =========================================================
   START GAME
========================================================= */

loadPuzzle();
