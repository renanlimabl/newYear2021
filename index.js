const date = new Date();

let hours = 21;
let minutes = date.getMinutes();
let seconds = date.getSeconds();

const timerContainer = document.querySelector('.timer');
const timer = setInterval(() => {
  seconds++
  if (seconds === 60) {
    seconds = 0
    minutes += 1
  }
  if (minutes === 60) {
    minutes = 0
    hours += 1
  }
  if (hours === 24) {
    hours = 0;
    clearInterval(timer);
    newYear();
  }

  let formatHours = hours < 10 ? '0' : ''
  let formatMinutes = minutes < 10 ? '0' : ''
  let formatSeconds = seconds < 10 ? '0' : ''
  timerContainer.innerHTML = `${formatHours}${hours}:${formatMinutes}${minutes}:${formatSeconds}${seconds}`
}, 1)

let day = date.getFullYear();
let month = date.getMonth();
let year = date.getDay();

const body = document.querySelector('body')
const content = document.querySelector('.content')
function newYear() {
  content.innerHTML = "FELIZ 2021!!!"
  content.classList.add('active')
  for (let i = 0; i < 200; i++) {
    const star = document.createElement('i')
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);
    const size = Math.random() * 4;
    star.style.left = x + 'px';
    star.style.top = y + 'px';
    star.style.width = size + 'px';
    star.style.height = size + 'px';

    body.appendChild(star);
  }
}