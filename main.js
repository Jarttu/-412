let currentPlayer = 1;
let p1TotalPoints = 0;
let p2TotalPoints = 0;
let p1PointsThisRound = 0;
let p2PointsThisRound = 0;
let rollsThisRound = 0;
let goalPoints = 100;
let roundWon = false;

var restartBtn = document.getElementById("restartgame");

restartBtn.setAttribute("disabled", " ");

document.addEventListener("DOMContentLoaded", function(){
    const splashContainer = document.querySelector(".splash-container");
    const goalForm = document.getElementById("goalform");
    const gameContent = document.getElementById("gamecontent");
    const goalInput = document.getElementById("goalinput");

    function splashFadeOut(){
        splashContainer.classList.add('hidden');

        setTimeout(function(){
            gameContent.classList.add('visible');
            displaydefault();
        }, 500);
        
    }

    goalForm.addEventListener("submit", function(event){
        event.preventDefault();

        const goalPointsValue = goalInput.value.trim();

        if (goalPointsValue == ""){
            splashFadeOut();
        } else {
            if (isNaN(goalPointsValue)){
                alert("Syötä numero");
            } else if (goalPointsValue < 10){
                alert("Tavoitteen tulee olla vähintään 10");
            } else if (goalPointsValue > 1000){
                alert("Tavoitteen tulee olla enintään 1000");
            } else {
                goalPoints = parseInt(goalPointsValue);
                splashFadeOut();
            }
        }
    });
});



function displaydefault(){
    const firstRandomNum = Math.floor(Math.random() * 6) + 1;
    const firstDiceImage = "images/dice" + firstRandomNum + ".png";
    document.querySelectorAll("img")[0].setAttribute("src", firstDiceImage);

    document.getElementById("goaltext").textContent = `Tavoite: ${goalPoints}`
    document.getElementById("tulos").textContent = "";
    document.getElementById("goaltext").textContent = "Tavoite: 0";
    document.getElementById("playerturn").textContent = `Pelaajan ${currentPlayer} vuoro`
    document.getElementById("p1pointstotal").textContent = "P1 : 0";
    document.getElementById("p2pointstotal").textContent = "P2 : 0";
    document.getElementById("p1pointsround").textContent = "P1 : 0";
    document.getElementById("p2pointsround").textContent = "P2 : 0";
    document.getElementById("rolls").textContent = "Heitot : 0";
}

function rolldice(){

    rollsThisRound += 1;
    const randomNum = Math.floor(Math.random() * 6) + 1;
    const diceImage = "images/dice" + randomNum + ".png";
    document.querySelectorAll("img")[0].setAttribute("src", diceImage);

    if (randomNum == 1){
        
        if (currentPlayer == 1){
            p1TotalPoints = 0;
            p2TotalPoints -=1
            
        } else {
            p2TotalPoints = 0;
            p1TotalPoints -=1
        
        }
        switchTurn();
        
    }

    if (currentPlayer == 1){
        p1PointsThisRound += randomNum;
        p2PointsThisRound = 0;
        if (randomNum == 1){
            p1PointsThisRound -= 1
        }
    }
    else{
        p2PointsThisRound += randomNum;
        p1PointsThisRound = 0;
        if (randomNum == 1){
            p2PointsThisRound -= 1
        }
        
    }
    
    if (currentPlayer == 1){
        p1TotalPoints += randomNum
        
    }
    else {
        p2TotalPoints += randomNum

    }
    
    display()
    
}

function switchTurn(){
    rollsThisRound = 0;
    p1PointsThisRound = 0;
    p2PointsThisRound = 0;
    currentPlayer = currentPlayer == 1 ? 2 : 1;
    document.getElementById("playerturn").textContent = `Pelaajan ${currentPlayer} vuoro`
    display()
}



function display(){
    if (p1TotalPoints >= goalPoints){
        roundWon = true;
        document.getElementById("result").textContent = "Pelaaja 1 voitti"
        checkWin()
    }
    
    if (p2TotalPoints >= goalPoints){
        roundWon = true;
        document.getElementById("result").textContent = "Pelaaja 2 voitti"
        checkWin()
    }
    document.getElementById("p1pointstotal").textContent = `P1 : ${p1TotalPoints}`
    document.getElementById("p2pointstotal").textContent = `P2 : ${p2TotalPoints}`
    document.getElementById("p1pointsround").textContent = `P1 : ${p1PointsThisRound}`
    document.getElementById("p2pointsround").textContent = `P2 : ${p2PointsThisRound}`
    document.getElementById("rolls").textContent = `Heitot : ${rollsThisRound}`
}

function checkWin(){
    restartBtn.removeAttribute("disabled");
    
}

function restartGame(){
    location.reload();
}