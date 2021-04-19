const myName = document.getElementById("myName");
const myClock = document.getElementById("myClock");

let name = prompt("Adınızı giriniz");
myName.innerHTML = name;

setInterval(showTime, 1000);

function showTime() {
  let currentTime = new Date();
  let hours =
    currentTime.getHours() < 10
      ? "0" + currentTime.getHours()
      : currentTime.getHours();
  let minutes =
    currentTime.getMinutes() < 10
      ? "0" + currentTime.getMinutes()
      : currentTime.getMinutes();
  let seconds =
    currentTime.getSeconds() < 10
      ? "0" + currentTime.getSeconds()
      : currentTime.getSeconds();

  let today = convertDay(currentTime.getDay());

  myClock.innerHTML = `${hours}:${minutes}:${seconds} ${today}`;
}

function convertDay(currentTime) {
  let today;
  switch (currentTime) {
    case 1:
      today = "Pazartesi";
      break;
    case 2:
      today = "Salı";
      break;
    case 3:
      today = "Çarşamba";
      break;
    case 4:
      today = "Perşembe";
      break;
    case 5:
      today = "Cuma";
      break;
    case 6:
      today = "Cumartesi";
      break;
    case 7:
      today = "Pazar";
      break;
  }
  return today;
}
