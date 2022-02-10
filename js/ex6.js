function calcNumbers() {
    let hour = prompt("Please enter the hour", "")
    let minute = prompt("Please enter the minute(s)", "")
    let second = prompt("Please enter the second(s)", "")

    let newS = parseInt(second) + 1;
    let newH = parseInt(hour);
    let newM = parseInt(minute);

    if (newS === 60) {
        newM++;
        newS = 0;
    }
    if (newM === 60) {
        newH++;
        newM = 0;
        newS = 0;
    }
    if (newH === 24) {
        newH = 0;
        newM = 0;
        newS = 0;
    }

    document.getElementById("timeNow").innerHTML = "Time input : " + hour + "h" + minute + "m" + second + "s";
    document.getElementById("timeInOneSecond").innerHTML = "One second later : " + newH + "h" + newM + "m" + newS + "s";
  }