function calcNumbers() {
    let number = prompt("Please enter the your number", "")
    let counter = 1
    let res = []

    for (let i = 0; i < 11; i++) {
        res[i] = counter * number;
        counter++
    }

    document.getElementById("zero").innerHTML = number + " x 0 = 0";
    document.getElementById("one").innerHTML = number + " x 1 = " + res[0];
    document.getElementById("two").innerHTML = number + " x 2 = "+ res[1];
    document.getElementById("three").innerHTML = number + " x 3 = "+ res[2];
    document.getElementById("four").innerHTML = number + " x 4 = "+ res[3];
    document.getElementById("five").innerHTML = number + " x 5 = "+ res[4];
    document.getElementById("six").innerHTML = number + " x 6 = "+ res[5];
    document.getElementById("seven").innerHTML = number + " x 7 = "+ res[6];
    document.getElementById("eight").innerHTML = number + " x 8 = "+ res[7];
    document.getElementById("nine").innerHTML = number + " x 9 = "+ res[8];
    document.getElementById("ten").innerHTML = number + " x 10 = "+ res[9];
  }