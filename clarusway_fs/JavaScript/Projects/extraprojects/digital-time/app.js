const div = document.getElementById("container");
const text = document.getElementById("text");

function showTime() {
  let dateTime = new Date();
  let time = dateTime.toLocaleTimeString();
  // console.log(time);
  text.innerText = time;
}
let display = setInterval(showTime, 1000);
