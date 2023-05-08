function greetings() {
  var greetedNames = [];

  var greets = 0;

  var names = "";

  function makeGreet(names, languages) {

    // name = names.charAt(0).toUpperCase()
    namesGreeted(names)
    
    if (languages === "english") {
      return "hello " + names;
    }
    if (languages === "xhosa") {
      return "Molo " + names;
    }
    if (languages === "French") {
      return "Salut " + names;
    }
  }
  function namesGreeted(name) {
    if (greetedNames.includes(name) === false) {
      greetedNames.push(name);

    }
    
  }

  function countingNames() {
    return greetedNames.length;

  }

  return {
    makeGreet,
    countingNames,
    namesGreeted
  };
}
