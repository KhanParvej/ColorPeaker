var numOfColor = 6;
var colors = [];
var PickedColor;
var specials = document.getElementsByClassName("special");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var displayMode = document.querySelectorAll(".mode");

init();

function init() {
  setupModeButton();
  setupSpecials();
  reset();
}

function setupModeButton() {
  // mode button event listener
  for (var i = 0; i < displayMode.length; i++) {
    displayMode[i].addEventListener("click", function () {
      displayMode[0].classList.remove("selected");
      displayMode[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? (numOfColor = 3) : (numOfColor = 6);
      reset();
    });
  }
}
function setupSpecials() {
  for (var i = 0; i < specials.length; i++) {
    // Add click listeners to special
    specials[i].addEventListener("click", function () {
      // grab color of clicked special
      var clickedColor = this.style.backgroundColor;
      // compare color to pickedColor

      if (clickedColor === PickedColor) {
        messageDisplay.textContent = "Correct!";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
        resetButton.textContent = "Play Again?";
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
}
function reset() {
  // generate all colors
  colors = generateRandomColors(numOfColor);
  // peak a random color
  PickedColor = peakColor();
  colorDisplay.textContent = PickedColor;

  for (var i = 0; i < specials.length; i++) {
    if (colors[i]) {
      specials[i].style.display = "block";
      specials[i].style.backgroundColor = colors[i];
    } else {
      specials[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";
}

resetButton.addEventListener("click", function () {
  reset();
});

function changeColors(color) {
  // loop through all special
  for (var i = 0; i < specials.length; i++) {
    specials[i].style.backgroundColor = color;
  }
  // Change each color to match given color
}

// to genarate a random number
function peakColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  //make an array
  var arr = [];
  // repeat num times
  for (var i = 0; i < num; i++) {
    // get random color and push into arr
    arr.push(randomColor());
  }

  // return that array
  return arr;
}

function randomColor() {
  // pick a "red" from 0 - 255
  var r = Math.floor(Math.random() * 256);
  // pick a "green" from 0 - 255
  var g = Math.floor(Math.random() * 256);
  // pick a "blue" from 0 - 255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
