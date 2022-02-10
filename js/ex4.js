function findPassword() {
    let password = "";
    let counter = 0;

    while (counter != 3) {
        password = prompt("Please enter the password", "")
        if (password != "secret")
            counter++;
        else
            break;
    }


    if (counter < 3) {
      document.getElementById("firstSentence").innerHTML = "You entered the correct password after : " + counter + " attempt(s)";
    } else {
        document.getElementById("firstSentence").innerHTML = "Your account is locked! You failed to enter the correct password " + counter + "times";
    }
  }