const h = document.getElementById('hour');
const m = document.getElementById('minute');
const text = document.getElementById('text');
const minuteHand = document.getElementById('min-hand');
const hourHand = document.getElementById('hour-hand');
const dial = document.getElementById('dial');
const submit = document.getElementById('submit');
let result;
let x = 0;

for (let i = 0; i < 60; i++) {
    x += 6;
    const span = document.createElement("SPAN");
    dial.appendChild(span);
    span.className = 'diallines';
    span.style.transform = `rotate(${x}deg)`;
}

function computeAngle() {
    const hour = parseInt(h.value);
    const minute = parseInt(m.value);
    const minAngle = minute * 6;
    const hourAngle = hour * 30 + minute * (360 / 720);
    minuteHand.style.transform = `rotate(${minAngle}deg)`;
    hourHand.style.transform = `rotate(${hourAngle}deg)`;
    result = ((hour + minute / 60) * 30) - minute * 6;
    if (isNaN(Math.abs(result))) {
        text.innerText = ':-)';
    } else {
        text.innerText = Math.abs(result)
    }
}

submit.addEventListener("click", computeAngle);
