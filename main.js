let currentPlayer = 1;
let p1TotalPoints = 0;
let p2TotalPoints = 0;
let p1PointsThisRound = 0;
let p2PointsThisRound = 0;
let rollsThisRound = 0;
window.onload = function(){
    displaydefault();
};



function displaydefault(){
    const firstRandomNum = Math.floor(Math.random() * 6) + 1;
    const firstDiceImage = "images/dice" + firstRandomNum + ".png";
    document.querySelectorAll("img")[0].setAttribute("src", firstDiceImage);

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
    document.getElementById("p1pointstotal").textContent = `P1 : ${p1TotalPoints}`
    document.getElementById("p2pointstotal").textContent = `P2 : ${p2TotalPoints}`
    document.getElementById("p1pointsround").textContent = `P1 : ${p1PointsThisRound}`
    document.getElementById("p2pointsround").textContent = `P2 : ${p2PointsThisRound}`
    document.getElementById("rolls").textContent = `Heitot : ${rollsThisRound}`
}

