let hoursDiv, minutesDiv, secondsDiv, meridiemDiv, hours, minutes, seconds, meridiem;

function init() {
  hoursDiv = document.getElementById("hours");
  minutesDiv = document.getElementById("minutes");
  secondsDiv = document.getElementById("seconds");
  meridiemDiv = document.getElementById("meridiem");

  getTime();
  updateDisplay();

  updateTime();
}


function updateTime() {
  setInterval(() => {
    getTime();
    updateDisplay();
  }, 1000);
}

function getTime() {
  hours = new Date().getHours();
  minutes = new Date().getMinutes();
  seconds = new Date().getSeconds();
  if (hours >= 12) {
    meridiem = "pm";
  } else {
    meridiem = "am";
  }
  if (hours > 12) {
    hours -= 12;
  }
    
  hours = formatTime(hours);
  minutes = formatTime(minutes);
  seconds = formatTime(seconds);
}

function formatTime(time) {
  if (time < 10) {
    time = "0" + time.toString();
  }
  return time;
}

function updateDisplay() {
  hoursDiv.innerText  = hours;
  minutesDiv.innerText  = minutes;
  secondsDiv.innerText  = seconds;
  meridiemDiv.innerText  = meridiem;
  console.log(12);
}