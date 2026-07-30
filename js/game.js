//--------------------------------------------------
// Dragon Scavenger Hunt Game Engine v1.1
//--------------------------------------------------

let currentPageID = null;
let currentPage = null;

//--------------------------------------------------
// Start Game
//--------------------------------------------------

window.onload = function () {

    initializeGame();

    document
        .getElementById("submitButton")
        .addEventListener("click", submitAnswer);

    document
        .getElementById("continueButton")
        .addEventListener("click", continueJourney);

    document
        .getElementById("answer")
        .addEventListener("keydown", function (event) {

            if (event.key === "Enter") {
                submitAnswer();
            }

        });

};

//--------------------------------------------------
// Initialize Game
//--------------------------------------------------

function initializeGame() {

    // Resume saved progress if available

const params = new URLSearchParams(window.location.search);

const reset = params.get("reset");

const startingClue = params.get("clue");


if (reset === "true") {

    clearProgress();

    currentPageID = startingClue;

}

else {

    const saved = loadProgress();

    if (saved && pages[saved]) {

        currentPageID = saved;

    }

    else {

        currentPageID = startingClue;

    }

}

    if (!pages[currentPageID]) {

        document.body.innerHTML =
            "<h1>Invalid starting page.</h1>";

        return;

    }

    loadPage(currentPageID);

}

//--------------------------------------------------
// Load Page
//--------------------------------------------------

function loadPage(pageID) {

    currentPageID = pageID;

    currentPage = pages[pageID];

    displayPage();

}

//--------------------------------------------------
// Display Page
//--------------------------------------------------

function displayPage() {

    document.getElementById("title").textContent =
        currentPage.title;

    document.getElementById("story").innerHTML =
        currentPage.story;

    document.getElementById("characterImage").src =
        currentPage.image;

    document.getElementById("feedback").textContent = "";

    document.getElementById("continueButton").style.display = "none";

    if (currentPage.type === "clue") {

        document.getElementById("prompt").textContent =
            currentPage.prompt;

        document.getElementById("answer").style.display =
            "inline-block";

        document.getElementById("submitButton").style.display =
            "inline-block";

        document.getElementById("answer").value = "";

        document.getElementById("answer").focus();

    }

    else if (currentPage.type === "ending") {

        document.getElementById("prompt").textContent =
        currentPage.endingText +
        "\n\n" +
        currentPage.mysteryClue;
        
        document.getElementById("answer").style.display =
            "none";

        document.getElementById("submitButton").style.display =
            "none";

    }

}

//--------------------------------------------------
// Submit Answer
//--------------------------------------------------

function submitAnswer() {

    if (currentPage.type !== "clue")
        return;

    switch (currentPage.answerType) {

        case "text":
            checkTextAnswer();
            break;

        case "number":
            checkNumberAnswer();
            break;

        default:
            console.error("Unknown answer type.");

    }

}

//--------------------------------------------------
// Text Answers
//--------------------------------------------------

function checkTextAnswer() {

    const guess = normalizeAnswer(

        document
            .getElementById("answer")
            .value

    );

    const acceptedAnswers =
        currentPage.answers.accepted.map(normalizeAnswer);

    if (acceptedAnswers.includes(guess)) {

        success();

    }

    else {

        failure();

    }

}

//--------------------------------------------------
// Number Answers
//--------------------------------------------------

function checkNumberAnswer() {

    const guess = Number(

        document
            .getElementById("answer")
            .value

    );

    if (currentPage.answers.accepted.includes(guess)) {

        success();

    }

    else {

        failure();

    }

}

//--------------------------------------------------
// Normalize Text
//--------------------------------------------------

function normalizeAnswer(text) {

    return text

        .toLowerCase()

        .trim()

        .replace(/[.,!?]/g, "")

        .replace(/\s+/g, " ")

        .replace(/\s*-\s*/g, "-");

}

//--------------------------------------------------
// Correct Answer
//--------------------------------------------------

function success() {

    document.getElementById("feedback").textContent =
        currentPage.success;

    if (!currentPage.next) {
        return;
    }

    saveProgress(currentPage.next.destination);

    document.getElementById("answer").style.display = "none";

    document.getElementById("submitButton").style.display = "none";

    document.getElementById("continueButton").style.display =
        "inline-block";

}

//--------------------------------------------------
// Incorrect Answer
//--------------------------------------------------

function failure() {

    document.getElementById("feedback").textContent =
        currentPage.failure;

}
function continueJourney() {

    if (!currentPage.next) {
        return;
    }

    loadPage(currentPage.next.destination);

}