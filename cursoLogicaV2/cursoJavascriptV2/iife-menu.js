// function init() {
//     let isValid = false;
//     console.log("init menu")
// }
// console.log(init())

"use strict";

(function (n1, n2, n3) {
  isValid = false;
  console.log("init menu", isValid);

  function init() {
    isValid = true;
    console.log("init menu");
  }
  init();
})(window, document);

console.log("isValid", isValid);
