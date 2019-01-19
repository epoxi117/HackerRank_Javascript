var timeString = "12:45:54PM";

const timeConversion = timeString => {
  var str = timeString.split(":");

  var hour = str[0];
  var minutes = str[1];
  var seconds = str[2].substring(0, 2);
  var meridiem = str[2].substring(2, 4);

  var militaryTime = "";

  if (meridiem === "PM" && Number(hour) < 12) {
    hour = Number(hour) + 12;
    hour = String(hour);
  }

  if (meridiem === "AM" && Number(hour) == 12) {
    hour = "00";
  }

  militaryTime = hour + ":" + minutes + ":" + seconds;

  console.log(militaryTime);
  return militaryTime;
};

timeConversion(timeString);
