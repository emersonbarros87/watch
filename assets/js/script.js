const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const watch = setInterval(function time() {
  let dateNow = new Date();
  let hour = dateNow.getHours();
  let minute = dateNow.getMinutes();
  let second = dateNow.getSeconds();

  hours.textContent = hour;
  minutes.textContent = minute;
  seconds.textContent = second;

});