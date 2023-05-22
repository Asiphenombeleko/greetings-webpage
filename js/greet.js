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
 

  var languages = checkedRadiobtnElement ? checkedRadiobtnElement.value : "";

  setTimeout(function () {
    languageErrorElement.innerHTML = "";
   }, 2000);
  if (greeter.errorHandling(names, languages)) {
    nameErrorElement.innerHTML = greeter.errorHandling(names, languages);
  } else {
    if (nameRegex.test(nameElement.value)) {
      displayElement.innerHTML = greeter.makeGreet(names, languages);
      counterElement.innerHTML = greeter.countingNames();

      

      setTimeout(function () {
        displayElement.innerHTML = "";
      }, 2000);
    }
    setTimeout(function () {
      nameErrorElement.innerHTML = "";
    }, 2000);
    nameElement.value ="";

    checkedRadiobtnElement.checked = "";
    
    localStorage["names"] = JSON.stringify(greeter.listOfNamesGreeted());
  }
  setTimeout(function () {
    nameErrorElement.innerHTML = "";
  }, 2000);
});

resetBtnElement.addEventListener("click", function () {
  if (resetBtnElement) {
  }
  greeter.reset();
});
