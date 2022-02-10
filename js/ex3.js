function calcNumbers() {
    let firstNum = prompt("Please enter the first number", "");
    let secondNum = prompt("Please enter the second number", "");

    let addition = (+firstNum) + (+secondNum);
    let substraction = firstNum - secondNum;
    let multiplication = firstNum * secondNum;
    let division = firstNum / secondNum;
    let modulo = firstNum % secondNum;

    if (firstNum > 0 && secondNum > 0) {
      document.getElementById("add").innerHTML = "Addition : " + addition;
      document.getElementById("sub").innerHTML = "Substraction : " + substraction;
      document.getElementById("mul").innerHTML = "Multiplication : " + multiplication;
      document.getElementById("div").innerHTML = "Division : " + division;
      document.getElementById("mod").innerHTML = "Modulo : " + modulo;
    }
  }