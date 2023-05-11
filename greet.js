var greetBtnElement = document.querySelector(".greetBtn");
var radiobtnElement = document.querySelector(".radiobtn");
var nameElement = document.querySelector(".fname");
var displayElement = document.querySelector(".name");
var resetBtnElement = document.querySelector(".resetBtn");
var counterElement = document.querySelector(".counter");
var textNameElement = document.querySelector(".tetxName");
var names = [];

if (localStorage["names"]) {
  names = JSON.parse(localStorage["names"]);
}

var greeter = greetings(names);
counterElement.innerHTML = greeter.countingNames();

greetBtnElement.addEventListener("click", function () {
  names = nameElement.value;

  //  window.localStorage.setItem('names')
  // localStorage.getItem('names')
  var checkedRadiobtnElement = document.querySelector(
    'input[name="radiobtn"]:checked'
  );
  if (checkedRadiobtnElement) {
    var languages = checkedRadiobtnElement.value;

    displayElement.innerHTML = greeter.makeGreet(names, languages);
    counterElement.innerHTML = greeter.countingNames();
  }

  setTimeout(function() {
    nameElement.value = "";
    displayElement.innerHTML = "";
  }, "2000");

  localStorage["names"] = JSON.stringify(greeter.listOfNamesGreeted());
});
resetBtnElement.addEventListener("click", function () {
  resetBtnElement.innerHTML = greeter.reset();
});
