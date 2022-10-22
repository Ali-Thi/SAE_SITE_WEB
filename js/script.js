$(init);

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

  //CAROUSEL DES ACTUS
  init_carousel();

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

function init_carousel(){
  // alert($("actualites.html#img_actus").html());
  alert($("actualites.html#img_actus").first().html());
  for(let i = 0 ; i < $("actualites.html#img_actus").length ; ++i){
    $("#carousel .carousel-indicators").append("<button type='button' data-bs-target='#caroussel' data-bs-slide-to=" + i +"></button>");
    $("#carousel .carousel-inner").append("<div class='carousel-item'><img src=" + $("actualites.html#img_actus")[i].attr("src") +" alt=" + $("actualites.html#img_actus")[i].attr("alt") +" class='d-block'></div>");
  }
  $("#carousel .carousel-indicators button").first().addClass("active");
  $("#carousel .carousel-inner div").first().addClass("active");
  
  for (element in $("actualites.html#img_actus")){

  }
}