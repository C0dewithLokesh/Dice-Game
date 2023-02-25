// Select the dice images and the h1 element
var dice1 = document.querySelector(".img1");
var dice2 = document.querySelector(".img2");
var heading = document.querySelector("h1");

// Store the original text of the h1 element
var originalText = heading.innerHTML;

// Generate two random numbers between 1 and 6 (inclusive)
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Set the images of the dice based on the random numbers
dice1.setAttribute("src", "images/dice" + randomNumber1 + ".png");
dice2.setAttribute("src", "images/dice" + randomNumber2 + ".png");

// Compare the random numbers and set the text of the h1 element
if (randomNumber1 > randomNumber2) {
  heading.innerHTML = "🚩 Player 1 Wins!";
  
// Wait for 2000 milliseconds (2 seconds) and then change the text of the h1 element to the original text
setTimeout(function() {
    heading.innerHTML = originalText;
  }, 2000);
} 

else if (randomNumber2 > randomNumber1) {
  heading.innerHTML = "Player 2 Wins! 🚩";
  
  setTimeout(function() {
    heading.innerHTML = originalText;
  }, 2000);
} 

else {
  heading.innerHTML = "Draw!";
 
  setTimeout(function() {
    heading.innerHTML = originalText;
  }, 2000);
}
