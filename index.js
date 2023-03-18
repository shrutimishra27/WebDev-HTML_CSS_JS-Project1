//1st image:-
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomImage1 = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var ImageSource = "images/" + randomImage1; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",ImageSource);

//--------------------------------------------------

// 2nd image:-
var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6

var randomImageSource = "images/dice" + randomNumber2 + ".png"; //dice1.png-dice6.png

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource);

//--------------------------------------------------

   
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 1 Wins!";
    }
    else if (randomNumber1 < randomNumber2){
        document.querySelector("h1").innerHTML = "Player 2 Wins!";
    }
    else{
        document.querySelector("h1").innerHTML = "Draw!";
    }






