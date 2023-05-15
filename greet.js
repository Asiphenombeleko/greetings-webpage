var greetBtnElement = document.querySelector(".greetBtn");
var radiobtnElement = document.querySelector(".radiobtn");
var nameElement = document.querySelector(".fname");
var displayElement = document.querySelector(".name");
var resetBtnElement = document.querySelector(".resetBtn");
var counterElement = document.querySelector(".counter");
var textNameElement = document.querySelector(".tetxName");
var nameErrorElement = document.querySelector(".nameError");
var languageErrorElement = document.querySelector(".languageError");
var resetErrorElement = document.querySelector(".resetError");
var names = [];
var nameRegex = /^[a-zA-Z\s]+$/;


if (localStorage["names"]) {
    names = JSON.parse(localStorage["names"]);
}

var greeter = greetings(names);

counterElement.innerHTML = greeter.countingNames();

greetBtnElement.addEventListener("click", function () {
  
  names = nameElement.value;

  var checkedRadiobtnElement = document.querySelector(
    'input[name="radiobtn"]:checked'
  );

  if (checkedRadiobtnElement) {
    var languages = checkedRadiobtnElement.value;
  } else {
    languageErrorElement.innerHTML = "Please select the language!";

    setTimeout(function () {
      languageErrorElement.innerHTML = "";
    }, 2000);
  }
  if (nameElement.value != "") {
    if (languages) {
      if (nameRegex.test(nameElement.value)) {
        displayElement.innerHTML = greeter.makeGreet(names, languages);
        counterElement.innerHTML = greeter.countingNames();
        setTimeout(function () {
          displayElement.innerHTML = "";
        }, 2000);
      } else {
        nameErrorElement.innerHTML = "please enter correct details!";
        setTimeout(function () {
          nameErrorElement.innerHTML = "";
        }, 2000);
      }
    }
  } else {
    nameErrorElement.innerHTML = "Please enter your name!";

    setTimeout(function () {
      nameErrorElement.innerHTML = "";
    }, 2000);
  }
  localStorage["names"] = JSON.stringify(greeter.listOfNamesGreeted());
});

resetBtnElement.addEventListener("click", function () {
  if (resetBtnElement) {
  } else {
    resetErrorElement.innerHTML = "your reset was successful!";
  }
  resetBtnElement.innerHTML = greeter.reset();
});

