var greetBtnElement = document.querySelector(".greetBtn");
var radiobtnElement = document.querySelector(".radiobtn");
var nameElement = document.querySelector(".fname");
var displayElement = document.querySelector(".name");
var resetBtnElement = document.querySelector(".resetBtn");
var counterElement = document.querySelector(".counter");

var greeter = greetings();
counterElement.innerHTML = greeter.countingNames();
greetBtnElement.addEventListener("click", function () {
  names = nameElement.value;
  var checkedRadiobtnElement = document.querySelector(
    'input[name="radiobtn"]:checked'
  );
  if (checkedRadiobtnElement) {
    var languages = checkedRadiobtnElement.value;

    displayElement.innerHTML = greeter.makeGreet(names, languages);
    counterElement.innerHTML = greeter.countingNames();
  }

  //  displayElement.innerHTML = greeter.greetXhosa(names);
  // displayElement.innerHTML = greeter.greetFrench(names);
});

//  radiobtn(){
//     var checkedRadiobtnElement = document.querySelector('input[name="radiobtn"]:checked');
//     if (checkedRadiobtnElement){
//         var languages = checkedRadioBtn.value

//     }
// }
