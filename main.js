let currentPlayer = 1;
let p1PointsThisRound = 0;
let p2PointsThisRound = 0;
let p1TotalPoints = 0;
let p2TotalPoints = 0;
window.onload = function(){
    displaydefault();
};

function displaydefault(){
    const firstRandomNum = Math.floor(Math.random() * 6) + 1;
    const firstDiceImage = "images/dice" + firstRandomNum + ".png";
    document.querySelectorAll("img")[0].setAttribute("src", firstDiceImage);

    document.getElementById("p1pointstotal").textContent = "P1 : 0";
    document.getElementById("p2pointstotal").textContent = "P2 : 0";
    document.getElementById("p1pointsround").textContent = "P1 : 0";
    document.getElementById("p2pointsround").textContent = "P2 : 0";
}


document.getElementById("playerturn").textContent = `Pelaajan ${currentPlayer} vuoro`

document.getElementById("rolldice").addEventListener("click", rolldice());
document.getElementById("stopturn").addEventListener("click", switchTurn());



function rolldice(){
    const randomNum = Math.floor(Math.random() * 6) + 1;
    const diceImage = "images/dice" + randomNum + ".png";
    document.querySelectorAll("img")[0].setAttribute("src", diceImage);

    if (randomNum == 1){
        switchTurn();
    }
}



function switchTurn(){
    currentPlayer = currentPlayer == 1 ? 2 : 1;
    document.getElementById("playerturn").textContent = `Pelaajan ${currentPlayer} vuoro`
}

function addPoints(){
    if (currentPlayer == 1){
        p1PointsThisRound += randomNum;
        p2PointsThisRound = 0;
    } else {
        p2PointsThisRound += randomNum;
        p1PointsThisRound = 0;
    }
    if (currentPlayer == 1){
        p1TotalPoints += p1PointsThisRound;
    } else {
        p2TotalPoints += p2PointsThisRound;
    }
    displayPoints();
}

function displayPoints(){
    document.getElementById("p1pointstotal").textContent = `P1 : ${p1TotalPoints}`;
    document.getElementById("p2pointstotal").textContent = `P2 : ${p2TotalPoints}`;
    document.getElementById("p1pointsround").textContent = `P1 : ${p1PointsThisRound}`;
    document.getElementById("p2pointsround").textContent = `P2 : ${p1PointsThisRound}`;
}