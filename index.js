//Dice app
var randomNumber1 = getRandomNumber();
var randomNumber2 = getRandomNumber();

if (randomNumber1 > randomNumber2)
{
    var text = document.querySelectorAll("h1")[0];
    text.innerHTML = "🚩 Player 1 Wins";
}
else if(randomNumber2 > randomNumber1)
{
    var text = document.querySelectorAll("h1")[0];
    text.innerHTML = "Player 2 Wins 🚩";
}
else
{
    var text = document.querySelectorAll("h1")[0];
    text.innerHTML = "it's a Tie";
}

var Image1 = randomDiceImage(randomNumber1);
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", Image1);

var Image2 = randomDiceImage(randomNumber2);
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", Image2);


function getRandomNumber() {
  var num =  Math.random();
    return Math.ceil(num*6);
}

function randomDiceImage(num) {
    var Image = "https://raw.githubusercontent.com/PrashanthReddy03/DiceApp/main/images/dice" + num + ".png";
    return Image;
}

function refreshPage()
{
    window.location.reload();
}
