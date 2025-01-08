let currentPlayer = 1;
document.getElementById("playerturn").textContent = `Pelaajan ${currentPlayer} vuoro`




function rolldice(){
    const randomNum = Math.floor(Math.random() * 6) + 1;
    const diceImage = "images/dice" + randomNum + ".png";
    document.querySelectorAll("img")[0].setAttribute("src", diceImage);

    
}