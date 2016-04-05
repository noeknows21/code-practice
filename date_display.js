var date = new Date();
var day = date.getDay();
var dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//converts the day integer to its corresponding day string
var dayString = dayArray[day];

console.log("Today is " + dayString + ".");



var hours = date.getHours();
//sets time to AM
var amOrPm = "AM";
// if it is 12pm or later, changes time to PM
if (hours >= 12) {
  amOrPm = "PM";
  hours -= 12;
}
//converts presentation of 0 to 12
if (hours === 0) {
  hours = 12;
}
var minutes = date.getMinutes();
//if minutes are single digits, add a 0 to make it double digits
if (minutes.toString().length === 1) {
  minutes = "0" + minutes.toString();
}
var seconds = date.getSeconds();
//if seconds are single digits, add a 0 to make it double digits
if (seconds.toString().length === 1) {
  seconds = "0" + seconds.toString();
}

console.log("Current Time is : " + hours + amOrPm + ":" + minutes + ":" + seconds);
