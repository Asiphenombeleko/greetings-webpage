function greetings(nameList) {
  var greetedNames = nameList || [];

  function makeGreet(names, languages) {
    

    namesGreeted(names);

    if (languages === "english") {
      return "Hello " + names;
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
    console.log(greetedNames);
  }

  function countingNames() {
    return greetedNames.length;
  }
  function reset() {
    localStorage.clear();
    location.reload();
  }

  function listOfNamesGreeted() {
    return greetedNames;
  }
 

  return {
    makeGreet,
    countingNames,
    namesGreeted,
    listOfNamesGreeted,
    reset,
    
  };
}
