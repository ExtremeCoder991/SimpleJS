//converting consts
const CELSIUS = document.getElementById("Celsius");
const FAHRENHEIT = document.getElementById("Fahrenheit");

//date feature
var myDate = new Date(),
    month = myDate.getMonth(),
    date = myDate.getDate(),
    day = myDate.getDay(),
    year = myDate.getFullYear();

var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

document.getElementById("time").innerHTML =
    days[day] + " " + months[month] + " " + date + ", " + year;

//display time
function displayTime() {
    var myTime = new Date();
    var hrs = myTime.getHours();
    var min = myTime.getMinutes();
    var sec = myTime.getSeconds();

    if (min < 10) {
        min = "0" + min;
    }

    if (hrs >= 12) {
        hrs = hrs - 12;
        document.getElementById("date").innerHTML =
            "Time : " + hrs + ":" + min + " pm";
    } else {
        document.getElementById("date").innerHTML =
            "Time : " + hrs + ":" + min + " am";
    }
}
setInterval(displayTime, 10);

//This is what happens when the button is clicked
document.getElementById("submit").onclick = function () {
    //these are conversion
    if (FAHRENHEIT.checked) {
        temp = document.getElementById("temperature").value;

        temp = Number(temp);
        //checks for number
        if (Number.isNaN(temp)) {
            alert("Please Enter a Number");
        } else {
            temp = (temp * 9) / 5 + 32;
            document.getElementById("show").innerHTML = temp + "° Fahrenheit";
        }
    }
    //conversion choice too
    else if (CELSIUS.checked) {
        temp = document.getElementById("temperature").value;
        temp = Number(temp);
        if (Number.isNaN(temp)) {
            alert("Please Enter a Number");
        } else {
            temp = ((temp - 32) * 5) / 9;
            document.getElementById("show").innerHTML = temp + "° Celsius";
        }
    } else if (Number.isNaN(temp) && !(FAHRENHEIT.checked || CELSIUS.checked)) {
        alert("Please Check One Of the Conversion Choices and Enter a Number");
    } else {
        alert("Please Check One Of The Conversion Choices");
    }
};