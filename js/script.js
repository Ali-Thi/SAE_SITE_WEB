$(init);

var prevScrollpos;

function init() {
  //ANIMATIONS
  new WOW().init();
  $("body").addClass("wow animate__animated animate__fadeIn");
  $("header").addClass("wow animate__animated animate__fadeIn");
  $(".nav-link").addClass("wow animate__animated animate__fadeIn");
  // $(".dropdown-menu").addClass("wow animate__animated animate__fadeIn");
  $("footer").addClass("wow animate__animated animate__fadeIn");

  //CHANGEMENT DU LOGO
  onResize();
  addEventListener('resize', onResize);

  //ANIMATION NAVBAR LORS DU SCROLL
  prevScrollpos = window.pageYOffset;
  addEventListener('scroll', onScroll);

}

function onResize() {
  if (window.innerWidth >= 1200) {
    $("#logo").attr("src", 'Images/logo_beauvaisis_blanc_inline.png');
    $("#logo").css("width", 553);
  }
  else if (window.innerWidth >= 890) {
    $("#logo").attr("src", 'Images/logo_beauvaisis_blanc.png');
    $("#logo").css("width", 200);
  }
  else {
    $("#logo").attr("src", 'Images/logo_compresser_blanc.png');
    $("#logo").css("width", 90);
  }
}

function onScroll() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    $("header").css("top", 0);
  } else {
    $("header").css("top", -130);
  }
  prevScrollpos = currentScrollPos;
}