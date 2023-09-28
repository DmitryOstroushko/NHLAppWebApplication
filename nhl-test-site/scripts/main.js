var myImage = document.querySelector("img");

myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "images/nhl_logo.png") {
    myImage.setAttribute("src", "images/mls_logo.png");
  } else {
    myImage.setAttribute("src", "images/nhl_logo.png");
  }
};

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  var storedName = localStorage.getItem("name");
  myHeading.textContent = "Mozilla is cool, " + storedName;
}

myButton.onclick = function () {
  setUserName();
};

function setUserName() {
  var myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = "Mozilla is cool, " + myName;
}