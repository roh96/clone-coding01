$("body").prepend("<header>");
$("body").append("<footer>");

$("header").load("./inc.html header>div", head);
$("footer").load("./inc.html footer>div", up);

let idx = localStorage.idx || 0;
let preIdx = 0;
function head() {
  //헤더메뉴 불들어오기
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

//특정컨텐츠 스크롤반응
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
}
contents();

$(".mainanime-container div").not(":first").hide();
//메인 첫비쥬얼 페이드
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

function init() {
  var swiper = new Swiper(".libox", {
    breakpoints: {
      360: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      801: {
        slidesPerView: 3,
        spaceBetween: 40,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
        },
      },
      1261: {
        slidesPerView: 3,
        spaceBetween: 50,
        //slidesPerGroup: 5,
      },
    },
    on: {
      slideChange: function (e) {
        const elActive = document.querySelector(".swiper-slide-active");
      },
    },
  });
}
init();

//첫화면 vh로 움직이게
const elMain = document.querySelector("main");
const elSec = document.querySelector("main > section");
const elMaincont = document.querySelector(".main-container");
const elIntrocont = document.querySelector(".introduce-container");

const elMaincont2 = document.querySelectorAll(
  ".main-container, .introduce-container"
);

let offset = [];
let pos = { y: 0, y2: 0, state: true };
let move = 0;
let timeOut, inter;
offset.push(elMaincont.offsetTop);
offset.push(elIntrocont.offsetTop);

let scrollTop = true;
let scrollBot = true;
window.addEventListener("mousewheel", function () {
  let delta = event.wheelDelta;
  move = window.innerHeight;

  if (delta < 0) {
    if (move > 0 && window.pageYOffset < move) {
      if (scrollBot) {
        scrollBot = false;
        $("html,body").animate(
          {
            scrollTop: move,
          },
          { queue: false, duration: 1000 }
        );
      }
      scrollTop = true;
    }
  } else if (delta > 0) {
    if (window.pageYOffset < window.innerHeight * 1.2) {
      if (scrollTop) {
        scrollTop = false;
        $("html,body").animate(
          {
            scrollTop: 0,
          },
          { queue: false, duration: 1000 }
        );
      }
      scrollBot = true;
    }
  }
});

let fadeFir = true;
//첫화면 클릭버튼
const btn = document.querySelectorAll(".arrow-box");
btn.forEach(function (btn, key) {
  btn.onclick = function () {
    if (fadeFir) {
      fadeFir = false;
      if (key == 0) {
        fade();
      } else {
        fade();
      }
    }
  };
  fadeFir = true;
});

function toolBox() {
  if (this.scrollY > 200) {
    $("footer > div").eq(1).addClass("on");
  } else {
    $("footer > div").eq(1).removeClass("on");
  }
}

//up버튼
function up() {
  $(".up-tool").click(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
