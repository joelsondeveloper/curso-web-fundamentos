// function init() {
//     let isValid = false;
//     console.log("init menu")
// }
// console.log(init())

(function (n1, n2, n3) {
  let isValid = false;
  console.log("init menu", isValid, n1, n2, n3);

  function init() {
    isValid = true;
    console.log("init menu");
  }
  init();
})(10,20,30);

init()
