function saveProgress(clue){

    localStorage.setItem(
        "currentClue",
        clue
    );

}

function loadProgress(){

    return localStorage.getItem(
        "currentClue"
    );

}

function clearProgress(){

    localStorage.removeItem(
        "currentClue"
    );

}