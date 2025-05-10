(function () {
  const dateEventDom = document
    .querySelector(".hero-content span")
    .textContent.trim();
  const dateEvent = getDate(dateEventDom);
  const ONE_MINUTE = 60 * 1000;
  const ONE_HOUR = 60 * ONE_MINUTE;
  const ONE_DAY = 24 * ONE_HOUR;

  let daysLeft;
  let hoursLeft;
  let minutesLeft;
  let secondsLeft;

  setInterval(() => {
    updateDate();
    addLeftTime(daysLeft, hoursLeft, minutesLeft, secondsLeft);
  }, 1000);

  const p = document.createElement("p");
  document.querySelector(".hero-content").appendChild(p);

  function addLeftTime(d, h, m, s) {
    p.textContent = `contagem regressiva: ${d} dias ${h} horas ${m} minutos e ${s} segundos`;
  }

  function getDate(str) {
    const [date, hour] = str.split(" ");
    const [day, month, year] = date.split("/");
    const [h, m] = hour.split("H");
    return new Date(year, month - 1, day, h, m);
  }

  function updateDate() {
    const today = new Date();

    let left = dateEvent.getTime() - today.getTime();
    console.log(left);

    daysLeft = parseInt(left / ONE_DAY);
    left -= daysLeft * ONE_DAY;

    hoursLeft = parseInt(left / ONE_HOUR);
    left -= hoursLeft * ONE_HOUR;

    minutesLeft = parseInt(left / ONE_MINUTE);
    left -= minutesLeft * ONE_MINUTE;

    secondsLeft = parseInt(left / 1000);
    console.log(daysLeft, hoursLeft, minutesLeft, secondsLeft);
  }
})();
