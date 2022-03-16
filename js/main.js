const responsive = {
  0: {
    items: 1,
  },
  320: {
    items: 1,
  },
  560: {
    items: 2,
  },
  960: {
    items: 3,
  },
};

$(Document).ready(function () {
  $nav = $(".nav");
  $toggleCollapse = $(".toggle-collapse");

  // click even on toggle menu
  $toggleCollapse.click(function () {
    $nav.toggleClass("collapse");
  });
  // owl carousel for blog
  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    dots: false,
    nav: true,
    navText: [
      $(".owl-navigation .owl-nav-prev"),
      $(".owl-navigation .owl-nav-next"),
    ],
    responsive: responsive,
  });
  // $(window).scroll(function () {
  //   if ($(this).scrollTop() > 100) {
  //     $(".move-up span").fadeIn();
  //   } else {
  //     $(".move-up span").fadeOut();
  //   }
  // });
  // // click to scroll top
  // $(".move-up span").click(function () {
  //   $("html,body").animate(
  //     {
  //       scrollTop: 0,
  //     },
  //     1000
  //   );
  // });
});
let upTuTop = document.querySelector(".move-up span");
window.onscroll = function () {
  this.scrollY >= 200
    ? upTuTop.classList.add("show")
    : upTuTop.classList.remove("show");
};
upTuTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
