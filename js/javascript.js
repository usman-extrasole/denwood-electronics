// Start Category Swiper
var swiper = new Swiper(".myCategories", {
    slidesPerView: 'auto',
    spaceBetween: 10,
    slideWidth: 200,
    slidesPerGroup: 1,
    breakpoints: {
        300: {
            slidesPerView: 2,
            spaceBetween: 0,
            centeredSlides: true,
        },
        320: {
            slidesPerView: 1,

        },
        420: {
            slidesPerView: 2,
        },
        576: {
            slidesPerView: 3,
        },
        640: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 4,

        },
        1280: {
            slidesPerView: 5,
            spaceBetween: 0,
        },
        1380: {
            slidesPerView: 5,
            spaceBetween: 0,
        },
        1700: {
            slidesPerView: 6,
            spaceBetween: 0,

        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// End Category Swiper

// Start  Category-two Swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: true,
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: true,
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 5,
        },
        420: {
            slidesPerView: 1,
            spaceBetween: 5,
        },
        576: {
            slidesPerView: 1.5,
            spaceBetween: 5,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 5,
        },
        1280: {
            slidesPerView: 3,
        },
        1380: {
            slidesPerView: 3,
        },
        1700: {
            slidesPerView: 3,

        },
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

});
// End  Category-two Swiper

// Start  Category-two Swiper Button Disable Script
let slider_one = $('.swiper-one');
let slideCount_one = slider_one.find('.swiper-slide').length;
let slideIndex_one = 0;
$('.swiper-next-one').on('click', function () {
    slideIndex_one++;
    if (slideIndex_one >= slideCount_one - 6) {
        $('#disable-right').show();
        $('#right-active').hide();
    }
    if (slideIndex_one == 1) {
        $('#disable-left').hide();
        $('#left-active').show();
    }
});
$('.swiper-prev-one').on('click', function () {
    slideIndex_one--;
    if (slideIndex_one > 0) {
        $('#disable-right').hide();
        $('#right-active').show();
    }
    if (slideIndex_one === 0) {
        $('#disable-left').show();
        $('#left-active').hide();
    }
});
// End  Category-two Swiper Button Disable Script

$(document).ready(function(){
    //jquery for toggle sub menus
    $('.side-nav-drop-head').click(function(){
      $(this).next('.side-nav-dropdown').slideToggle();
      $(this).find('.dropdown').toggleClass('rotate');
    });
});

var nav = document.getElementById("side-nav");
function opennav() {
  nav.style.display = "block";
  document.getElementById("overlay-bg").style.display = "block";
}
function closenav() {
  nav.style.display = "none";
  document.getElementById("overlay-bg").style.display = "none";
}

$(document).ready(function () {$('.decrease_')
  .click(function () {
    decreaseValue(this);
  });
  $('.increase_').click(function () {
    increaseValue(this);
});
  function increaseValue(_this) {
    var value = parseInt($(_this).siblings('input#number').val(), 10);
    value = isNaN(value) ? 0 : value;
    value++;
    $(_this).siblings('input#number').val(value);
  }

  function decreaseValue(_this) {
    var value = parseInt($(_this).siblings('input#number').val(), 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    $(_this).siblings('input#number').val(value);
  }
});

$(document).ready(function () {
    $('.piclist li').on('click', function (event) {
      var $pic = $(this).find('img');
      $('.picZoomer-pic').attr('src', $pic.attr('src'));
  });
});
