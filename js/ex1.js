function calcGradeStanding() {
    let person = prompt("Please enter your name", "");
    let nbOfUnits = prompt("Please enter the number of units completed at college");
    let gradeStanding = "";

    if (nbOfUnits > 0 && nbOfUnits <= 30)
        gradeStanding = "Freshman";
    else if (nbOfUnits > 30 && nbOfUnits <= 60)
        gradeStanding = "Sophomore";
    else if (nbOfUnits > 60 && nbOfUnits <= 90)
        gradeStanding = "Junior"
    else if (nbOfUnits > 90 && nbOfUnits <= 100)
        gradeStanding = "Senior"
    else
        alert("Invalid number of units")

    if (person === "")
        alert("Please enter a valid name")

    if (person && gradeStanding) {
      document.getElementById("firstSentence").innerHTML = "Hello " + person;
      document.getElementById("secondSentence").innerHTML = "Your grade standing is  " + gradeStanding;
    }
  }