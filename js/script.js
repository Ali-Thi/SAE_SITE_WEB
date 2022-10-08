$(init);

function init() {
  new WOW().init();

  $("body").addClass("wow animate__animated animate__fadeIn");
  $("header").addClass("wow animate__animated animate__fadeIn");
  $(".nav-link").addClass("wow animate__animated animate__fadeIn");
  $(".dropdown-menu").addClass("wow animate__animated animate__fadeIn");
  $("footer").addClass("wow animate__animated animate__fadeIn");

  let scrollPos = 0;
  const mainNav = document.getElementById('mainNav');
  const headerHeight = mainNav.clientHeight;
  window.addEventListener('scroll', function () {
    if (this.screen.width >= 992) {
      const currentTop = document.body.getBoundingClientRect().top * -1;
      if (currentTop < scrollPos) {
        // Scrolling Up
        if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
          mainNav.classList.add('is-visible');
        } else {
          console.log(123);
          mainNav.classList.remove('is-visible', 'is-fixed');
        }
      } else {
        // Scrolling Down
        mainNav.classList.remove(['is-visible']);
        if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
          mainNav.classList.add('is-fixed');
        }
      }
      scrollPos = currentTop;
    }
  });
}