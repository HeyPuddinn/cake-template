

const $btnMenu = $('.header-slicknav-btn');
const $dropMenu = $('.header-slicknav-list');
const $btnBlog = $('.header-slicknav-blog');
const $blogMenu = $('.header-slicknav-submenu');
const $btnBackToTop = $('.scrollToTop');
const $blogArrow = $('#arrow');

$($btnMenu.on('click',() => {
    $dropMenu.toggleClass('show');
}))

$($btnBlog.on('click',() => {
    $blogMenu.toggleClass('show');
}))

//slick slider items
$(document).ready(function(){
    $('.items__list').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",
        responsive:[
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
      });
});

//slick slider team member
$(document).ready(function(){
    $('.team__contain').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",
        responsive:[
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
      });
});

// slick slider team--cake
$(document).ready(function(){
    $('.team__image').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive:[
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    })
})

// navbar fixed
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(window).scrollTop() > 400) {
            $('.header-navbar').addClass('header-navbar-fixed');
            $('.scrollToTop').addClass('active');
          }
      
          if ($(window).scrollTop() < 401) {
                $('.header-navbar').removeClass('header-navbar-fixed');
                $('.scrollToTop').removeClass('active');
          }
    });

    //click button backToTop
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
})


// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: 13.081485, lng: 109.296585 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

// trainsition page
window.addEventListener("load", function(){
    const loaded = document.querySelector(".load-container");
    loaded.classList.add("showed")
    setTimeout(function(){
         loaded.classList.remove("showed");
        }, 2000);
})


