function quantoFaltaPara(m, d) {
  const birthday = document.getElementById("txtnascimento").value;
  let today = new Date();
  today = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  const arrBirth = removeYear(birthday);
  const arrToday = removeYear(today);

  let contagem = calculeInterval(arrToday, arrBirth);
  let daysLeft = parseInt(contagem / (1000 * 60 * 60 * 24));
  console.log(daysLeft);

  if (daysLeft == 365) {
    daysLeft = 0;
  }


return daysLeft;
}

function removeYear(date) {
    const [year, month, day] = date.split('-');
    return new Date(2000, month - 1, day)
}

function calculeInterval (date1, date2) {
    date1 = date1.getTime();
    date2 = date2.getTime();
    if (date1 < date2) {
        return date2 - date1;
    } else {
        const fullYear = 1000 * 60 * 60 * 24 * 365;
        return fullYear - (date1 - date2);
    }
}