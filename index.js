var randomNumber1 = Math.random();
var randomNumber2 = Math.random();
randomNumber1 = Math.floor(randomNumber1*6)+1;
randomNumber2 = Math.floor(randomNumber2*6)+1;
document.querySelector(".img1").setAttribute("src", "./assets/images/dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src", "./assets/images/dice"+randomNumber2+".png");

function whoWins(randomNumber1, randomNumber2){
    
    if(randomNumber1===randomNumber2){
        document.querySelector("h1").textContent = "Refresh Me";
    } else if(randomNumber1 > randomNumber2){
        document.querySelector("h1").textContent = "🚩Player1 wins";
    } else if(randomNumber1 < randomNumber2){
        document.querySelector("h1").textContent = "Player2 wins🚩"
    }

}

whoWins(randomNumber1, randomNumber2);