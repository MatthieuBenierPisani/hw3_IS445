function getFollowingDay() {
    let day = prompt("Please enter your day", "");
    let followingDay = "";

    switch (day) {
        case "mon":
            followingDay = "tue"
            break;
        case "tue":
            followingDay = "wed"
            break;
        case "wed":
            followingDay = "thu"
            break;
        case "thu":
            followingDay = "fri"
            break;
        case "fri":
            followingDay = "sat"
            break;
        case "sat":
            followingDay = "sun"
            break;
        default:
            alert("Please enter a valid day");
            break;
    }
    document.getElementById("firstSentence").innerHTML = "You entered : " + day;
    document.getElementById("secondSentence").innerHTML = "The following day is : " + followingDay;
  }