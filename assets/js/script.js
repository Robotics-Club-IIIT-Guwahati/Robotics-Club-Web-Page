$(document).ready(function () {
  /* For the sticky navigation */
  $('.js--section-features').waypoint(
    function (direction) {
      if (direction == 'down') {
        $('nav').addClass('sticky animated fadeIn');
      } else {
        $('nav').removeClass('sticky animated fadeIn');
      }
    },
    {
      offset: '50px;',
    }
  );

  /* Navigation scroll */
  $(function () {
    $('a[href*=#]:not([href=#])').click(function () {
      if (
        location.pathname.replace(/^\//, '') ==
          this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate(
            {
              scrollTop: target.offset().top,
            },
            1000
          );
          return false;
        }
      }
    });
  });

  /* Animations on scroll */
  $('.js--wp-1').waypoint(
    function (direction) {
      $('.js--wp-1').addClass('animated fadeIn');
    },
    {
      offset: '80%',
    }
  );

  $('.js--wp-2').waypoint(
    function (direction) {
      $('.js--wp-2').addClass('animated fadeInUp');
    },
    {
      offset: '80%',
    }
  );

  $('.js--wp-3').waypoint(
    function (direction) {
      $('.js--wp-3').addClass('animated fadeIn');
    },
    {
      offset: '80%',
    }
  );

  /* Mobile navigation */
  $('.js--nav-icon').click(function () {
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon i');
    //nav.addClass('sticky');

    nav.slideToggle(200);
    //nav.animate({ width: 'toggle' });
    if (icon.hasClass('ion-navicon-round')) {
      icon.addClass('ion-close-round');
      icon.removeClass('ion-navicon-round');
      $('header').css('height', '700px');
    } else {
      icon.addClass('ion-navicon-round');
      icon.removeClass('ion-close-round');
      $('header').css('height', '480px');
    }
  });
});

var photos = document.querySelectorAll('.photo');
console.log(Array.from(photos), 'photots');
Array.from(photos).forEach((photo) => {
  // Create button for viewing current photo
  var button = document.createElement('button');
  button.className = 'view-btn';
  var buttonText = document.createTextNode('View');
  button.addEventListener('click', (event) => {
    var target = event.target.parentNode
      .querySelector('img')
      .getAttribute('src');
    var photoModal = document.querySelector('.photo-modal');
    var currentPhoto = document.createElement('img');
    currentPhoto.setAttribute('src', target);
    photoModal.appendChild(currentPhoto);
    // Add a new
  });
  // Append text node to button
  button.appendChild(buttonText);
  photo.addEventListener('mouseover', function viewPhoto() {
    photo.classList.add('overlay');
    photo.appendChild(button);
  });
  photo.addEventListener('mouseout', function viewPhoto() {
    photo.classList.remove('overlay');
    photo.removeChild(button);
  });
});
