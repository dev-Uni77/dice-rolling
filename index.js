

var randomNum1 = Math.floor(Math.random() * 6 + 1);
var randomImg = "dice" + randomNum1+ ".png";
var randImgSrc= "images/" + randomImg;

var image1= document.querySelectorAll("img")[0];

image1.setAttribute("src", randImgSrc);


var randomNum2 = Math.floor(Math.random() * 6 + 1);
var randImgSrc= "images/dice" + randomNum2+ ".png";

document.querySelectorAll("img")[1].setAttribute("src", randImgSrc);





if (randomNum1>randomNum2){
    document.querySelector("h1").innerHTML = "🚩Player 1 win!";
} else if (randomNum1===randomNum2) {
    document.querySelector("h1").innerHTML = "🏳Draw🏳";
} else {
    document.querySelector("h1").innerHTML = "Player 2 win!🚩";
}
