$("body").prepend("<header>");
$("body").append("<footer>");

$("header").load("./inc.html header>div", head);
$("footer").load("./inc.html footer>div");

let idx = localStorage.idx || 0;
let preIdx = 0;
function head() {
  //$("header a").eq(idx).css("color", "blue");
  $("header > div > div > nav > ul > li").click(function () {
    let idx = $(this).index();
    localStorage.idx = idx;

    $("header > div > div > nav > ul > li").eq(preIdx).removeClass("active");
    preIdx = idx;
    $("header > div > div > nav > ul > li").eq(idx).addClass("active");
    //$("header a").eq(idx).css("color", "blue");
  });
}

const elMove = document.querySelectorAll(".moveHide");
const elRad = document.querySelectorAll(".hide");
const elIconhide = document.querySelectorAll(".iconHide");
//const elOpening = document.querySelectorAll(".opening-txt");

window.addEventListener("scroll", contents);
function contents() {
  elMove.forEach(function (cont, key) {
    if (
      $(".moveHide").eq(key).offset().top - window.innerHeight * 0.8 <
      window.pageYOffset
    ) {
      cont.classList.add("moveUp");
    }
  });
  elRad.forEach(function (cont, key) {
    if (
      $(".hide").eq(key).offset().top - window.innerHeight * 0.8 <
      window.pageYOffset
    ) {
      cont.classList.add("rad");
    }
  });

  elIconhide.forEach(function (cont, key) {
    if (
      $(".iconHide").eq(key).offset().top - window.innerHeight * 0.8 <
      window.pageYOffset
    ) {
      setTimeout(function () {
        cont.classList.add("iconUp");
      }, 200 * key);
    }
  });
  /*elOpening.forEach(function (cont, key) {
    setTimeout(function () {
      cont.classList.add("openingUp");
    }, 300 * key);
  });*/
}
contents();

$(".mainanime-container div").not(":first").hide();

function fades() {
  let num = 0,
    fadeInterval;

  fadeInterval = setInterval(function () {
    $(".mainanime-container div").eq(num).fadeOut(2000);
    num++;
    //setTimeout(2000);
    if ($(".mainanime-container div").length == num) num = 0;
    $(".mainanime-container div").eq(num).fadeIn(1000);
    console.log(num);
  }, 4000);
}

fades();
