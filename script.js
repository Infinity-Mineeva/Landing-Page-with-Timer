// This script will display a countdown timer on the Landing Page

// First, we set the date we're counting down to
let countdownDate = new Date("July 1 2022 00:00:00").getTime();

// Create a function that updates the countdown on the page every second
let countdownFunction = setInterval(function () {
  // get today's date and time
  let now = new Date().getTime();

  // caluculate how much time remains between now and the countdown date
  let timeLeft = countdownDate - now;

  /* calculations for days, hours, minutes, and seconds
    FOR REFERENCE:
        1s = 1000ms
        1m = 60s
        1hr = 60m
        1d = 24hr */

  // values in miliseconds
  const oneDay = 1000 * 60 * 60 * 24;
  const oneHour = 1000 * 60 * 60;
  const oneMinute = 60 * 1000;

  // calulations
  let days = Math.floor(timeLeft / oneDay);
  let hours = Math.floor((timeLeft % oneDay) / oneHour);
  let minutes = Math.floor((timeLeft % oneHour) / oneMinute);
  let seconds = Math.floor((timeLeft % oneMinute) / 1000);

  // output the results in the element with id="countdown"
  let countdownEl = document.getElementById("countdown");

  // text for time label
  let daysText = days === 1 ? "day" : "days";
  let hoursText = hours === 1 ? "hr" : "hrs";
  let minsText = minutes === 1 ? "min" : "mins";
  let secsText = seconds === 1 ? "sec" : "secs";

  countdownEl.textContent = `${days} ${daysText} | ${hours} ${hoursText} | ${minutes} ${minsText} | ${seconds} ${secsText}`;

  // when countdown reaches date, stop the time with clearInterval and write some quirky text on the page
  if (timeLeft < 0) {
    clearInterval(countdownFunction);
    countdownEl.textContent = `The future is HERE!`;
  }
}, 1000);
