window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('sticky', window.scrollY > 0);
  });
  var typed = new Typed('.typing', {
    strings: ['Frontend Developer', 'Backend Developer', 'Fullstack Developer'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });
  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: false
      }
    }
  });
  window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('sticky', window.scrollY > 0);
  });
  
  