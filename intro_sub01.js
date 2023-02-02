let key = 0;
const elOrange = document.querySelectorAll(
  ".fifth-intro-container div div ul li"
);

// orange.forEach(function (cont, key) {
//   setInterval(function () {
//     $(".fifth-intro-container div div ul").eq(preKey).removeClass("orange");
//     $(".fifth-intro-container div div ul").eq(key).addClass("orange");
//     preKey = key;
//   }, 2000);
// });

setInterval(() => {
  $(".fifth-intro-container div div ul li").removeClass("orange");
  $(".fifth-intro-container div div ul li").eq(key).addClass("orange");
  key++;
  if (key > 4) {
    key = 0;
  }
}, 2000);

// function orange() {
//   $(".fifth-intro-container div div ul").eq(num1).removeClass;
// }

// function oranges() {
//   orangeInterval = setInterval(function () {
//     orange();
//   }, 2000);
// }
