///////////// Stopwatch section starts here /////////////

// Selectors

let startBtn = document.getElementById("start");
let resetBtn = document.getElementById("reset");

let hour = 0;
let min = 0;
let sec = 0;
let count = 0;
let lap = 0;

let timer = false;

// Start Function
startBtn.addEventListener("click", () => {
  timer = true;
  stopWatch();
  $("#start").hide();
  $("#lap").show();
});

// Lap Function
$("#lap").click(function () {
  // on click lap button
  lap++;
  // remove active class
  $(".lap").removeClass("active");
  $(".laps").prepend(
    `
        <div class="lap active">
                <p><span>lap</span> ${lap}</p>
                <p>${hour} : ${min} :${sec} : ${count}</p>
            </div>
        `
  );
});

// Reset Function
resetBtn.addEventListener("click", () => {
  timer = false;
  hour = 0;
  min = 0;
  sec = 0;
  count = 0;
  lap = 0;
  document.getElementById("hr").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("count").innerHTML = "00";

  $(".laps").html("");

  $("#start").show();
  $("#lap").hide();
});

// Stopwatch Function
function stopWatch() {
  if (timer == true) {
    count++;
  }
  if (count == 100) {
    sec++;
    count = 0;
  }
  if (sec == 60) {
    min++;
    sec = 0;
  }
  if (min == 60) {
    hour++;
    min = 0;
    sec = 0;
  }

  let hrString = hour;
  let minString = min;
  let secString = sec;
  let countString = count;

  if (hour < 10) {
    hrString = "0" + hrString;
  }

  if (min < 10) {
    minString = "0" + minString;
  }

  if (sec < 10) {
    secString = "0" + secString;
  }

  if (count < 10) {
    countString = "0" + countString;
  }

  document.getElementById("hr").innerHTML = hrString;
  document.getElementById("min").innerHTML = minString;
  document.getElementById("sec").innerHTML = secString;
  document.getElementById("count").innerHTML = countString;
  setTimeout("stopWatch()", 10);
}

///////////// Stopwatch section ends here /////////////

///////////// Clock section starts here /////////////

// trailing zero functionality
const addTrailingZero = (num) => {
  return num < 10 ? "0" + num : num;
};

// Update Time function
const updateTime = () => {
  const time = new Date();
  let hour = time.getHours();
  let minutes = time.getMinutes();
  let second = time.getSeconds();
  let ampm = hour >= 12 ? "PM" : "AM";
  let otherAmpm = hour >= 12 ? "AM" : "PM";

  // Convet 24 hour into 12
  hour = hour % 12 || 12;

  // add trailing zero to single digit number
  hour = addTrailingZero(hour);
  minutes = addTrailingZero(minutes);
  second = addTrailingZero(second);

  // show time on document
  $("#hour").html(hour);
  $("#mint").html(minutes);
  $("#second").html(second);
  $("#ampm").html(ampm);
  $("#other_ampm").html(otherAmpm);
};

updateTime();
setInterval(updateTime, 1000);

///////////// Clock section ends here /////////////

///////////// Timer section ends here /////////////

// Selectors
let time = 0;
let timeHour = 0;
let timeMinute = 0;
let timeSecond = 0;
let timeMiliSecond = 0;
let timeInterval;

// Getting time from user Function
const getTime = () => {
  time = prompt("Enter your time in minutes");
  //Convert time into second
  time = time * 60;
  // upadte time default
  setTime();
};

// Setting time to the Function
const setTime = () => {
  timeHour = Math.floor(time / 3600);
  timeMinute = Math.floor((time % 3600) / 60);
  timeSecond = Math.floor(time % 60);

  // show user intered time on document
  $("#time_hour").html(addTrailingZero(timeHour));
  $("#time_mint").html(addTrailingZero(timeMinute));
  $("#time_second").html(addTrailingZero(timeSecond));
  $("#time_MiliSecond").html(addTrailingZero(timeMiliSecond));

  // check time up on every interval
  // TimeUp()
};

//  Timer Function
const Timer = () => {
  timeMiliSecond--;
  if (timeMiliSecond == -1) {
    timeMiliSecond = 99;
    timeSecond--;
  }
  if (timeSecond == -1) {
    timeSecond = 59;
    timeMinute--;
  }
  if (timeMinute == -1) {
    timeMinute = 59;
    timeHour--;
  }

  // update time
  $("#time_hour").html(addTrailingZero(timeHour));
  $("#time_mint").html(addTrailingZero(timeMinute));
  $("#time_second").html(addTrailingZero(timeSecond));
  $("#time_MiliSecond").html(addTrailingZero(timeMiliSecond));

  TimeUp();
};

// Start  Function
const StartTime = () => {
  // before starting check if valid time given or not
  if (
    timeHour === 0 &&
    timeMinute === 0 &&
    timeSecond === 0 &&
    timeMiliSecond === 0
  ) {
    // if all value zero getTime
    getTime();
  } else {
    timeInterval = setInterval(Timer, 10);
    $(".start_timer").hide();
    $(".stop_timer").show();
  }
};

// Stop Function
const StopTimer = () => {
  clearInterval(timeInterval);
  $(".start_timer").show();
  $(".stop_timer").hide();
};

// Reset Function
const ResetTimer = () => {
  StopTimer();
  time = 0;
  timeHour = 0;
  timeMinute = 0;
  timeSecond = 0;
  timeMiliSecond = 0;
  setTime();
};

// Checking if the remaning time is zero
const TimeUp = () => {
  if (
    timeHour === 0 &&
    timeMinute === 0 &&
    timeSecond === 0 &&
    timeMiliSecond === 0
  ) {
    ResetTimer();
    alert("Time's up");
  }
};

// Event listeners

$(".start_timer").click(function () {
  StartTime();
});
$(".stop_timer").click(function () {
  StopTimer();
});
$(".reset_timer").click(function () {
  ResetTimer();
});

$(".timer_btn").click(function () {
  // hide clock
  $(".outer_wrapper > div").hide();
  // show TIMER
  $(".timer_").show();
  $(".header").hide();
  // Type Selection
  $(".type").html("TIMER");
});

$(".stopWatch_btn").click(function () {
  // hide clock
  $(".outer_wrapper > div").hide();
  // show STOPWATCH
  $(".stop_watch").show();
  $(".header").hide();
  $(".type").html("STOPWATCH");
});

$(".back_btn").click(function () {
  $(".outer_wrapper > div").show();

  $(".stop_watch").hide();
  $(".timer_").hide();
  $(".type").html("CLOCK");
});
