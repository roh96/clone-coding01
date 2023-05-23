$("body").prepend("<header>");
$("body").append("<footer>");

$("header").load("./inc.html header>div", head);
$("footer").load("./inc.html footer>div", up);

//헤더메뉴 불들어오기
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

  $("header > div > div > .open-sitemap").click(function () {
    $("header > div > div > .hammenu").addClass("burgeron");
  });
  $("header > div > div > .hammenu > .hambox > .haminnerbox > .burger").click(
    function () {
      $("header > div > div > .hammenu").removeClass("burgeron");
    }
  );
}

//특정컨텐츠 스크롤반응
const elMove = document.querySelectorAll(".moveHide");
const elRad = document.querySelectorAll(".hide");
const elIconhide = document.querySelectorAll(".iconHide");
//const elOpening = document.querySelectorAll(".opening-txt");

window.addEventListener("scroll", contents);
window.addEventListener("scroll", toolBox);
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
//메인 첫비쥬얼 페이드
let num = 0;
function fade() {
  $(".mainanime-container div").eq(num).fadeOut(2000);
  num++;
  if ($(".mainanime-container div").length == num) num = 0;
  $(".mainanime-container div").eq(num).fadeIn(1000);
}
let fadeInterval;
function fades() {
  clearInterval(fadeInterval);
  fadeInterval = setInterval(function () {
    fade();
  }, 4000);
}

fades();

//news-container swipe
function init() {
  var swiper = new Swiper(".libox", {
    /*slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,*/

    /*autoplay: {
      delay: 2500,
      disabledOnInteraction: false,
    },*/
    breakpoints: {
      360: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      801: {
        slidesPerView: 3,
        spaceBetween: 40,
        loop: true,
        //loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
        },
        /*navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },*/
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
        //if (elActive) elActive.style = `color:red`;

        //console.log(e.activeIndex, e.realIndex);
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
//console.log(elIntrocont.getBoundingClientRect().top);
let offset = [];
let pos = { y: 0, y2: 0, state: true };
let move = 0;
let timeOut, inter;
offset.push(elMaincont.offsetTop);
offset.push(elIntrocont.offsetTop);

//elMain.style = `height:${elSec.offsetHeight}px`;

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
//let fadeSec = true;
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

      /*clearTimeout(btntime);
      btntime = setTimeout(function () {
        $(".mainanime-container div").eq(key).fadeOut(2000);
        key++;
        $(".mainanime-container div").eq(key).fadeIn(1000);
      }, 2000);*/

      /*clearTimeout(btntime);
      setTimeout(function () {
        btntime = $(".mainanime-container div").eq(key).fadeOut(2000);
        key--;
        $(".mainanime-container div").eq(key).fadeIn(1000);
      }, 2000);*/
    }
    /*fadeInterval = setInterval(function () {
      $(".mainanime-container div").eq(key).fadeOut(2000);
      num++;
      if ($(".mainanime-container div").length == num) num = 0;
      $(".mainanime-container div").eq(key).fadeIn(1000);
    }, 4000);*/
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

//페이지 최상단으로
// $("footer > div")
//   .eq(1)
//   .on("click", function () {
//     $("html,body").animate(
//       {
//         scrollTop: 0,
//       },
//       { queue: false, duration: 1000 }
//     );
//   });

//up버튼
function up() {
  $(".up-tool").click(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
