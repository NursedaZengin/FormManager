 
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
   
    autoplay: {
        delay: 5000,  
        },
   
});

var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
    },
    autoplay: {
        delay: 5000,  
        },
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        520: {
            slidesPerView: 1,
            spaceBetween: 0
        },

        768: {
            slidesPerView: 2,
            spaceBetween: 0
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 0
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 0
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 0
        }
    }
});


AOS.init();

    var swiper = new Swiper(".mySwiper2", {
        slidesPerView: 2,
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
        },
        autoplay: {
            delay: 5000,
        },
        breakpoints: {
            300: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            520: {
                slidesPerView: 1,
                spaceBetween: 0
            },

            768: {
                slidesPerView: 2,
                spaceBetween: 0
            },
            991: {
                slidesPerView: 2,
                spaceBetween: 0
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 0
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 0
            }
        }
    });



var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
    },
});

//var swiper = new Swiper(".mySwiper1", {
//    slidesPerView: 4,
//    spaceBetween: 30,
//    pagination: {
//        el: ".swiper-pagination",
//        clickable: true,
//    },
//});

$(document).ready(function () {

    $(".setlangselect").change(function () {
        var id = $(this).val();
        var fd = new FormData();
        fd.append("id", id);
        $.ajax({
            type: "POST",
            url: "/home/setLang",
            data: fd,
            contentType: false,
            cache: false,
            processData: false,
            success: function (data) {
                if (data["status"] == "200") {
                    location.reload();
                } else {
                    Swal.fire({
                        title: "Hata !",
                        text: "Birşeler ters gitti.",
                        showCancelButton: false,
                        showConfirmButton: true,
                        confirmButtonText: "Tamam",
                        icon: 'error',
                    }).then((result) => {
                        location.reload();
                    })
                }
            },
            error: function () {
                Swal.fire({
                    icon: 'warning',
                    title: 'Hay Aksi...',
                    text: "İşlem Başarısız",
                    confirmButtonText: 'Tamam',
                });
            }
        });


    });


    $("#owl-demo").owlCarousel({

        navigation: true, // Show next and prev buttons

        slideSpeed: 300,
        paginationSpeed: 400,

        items: 1,
        itemsDesktop: false,
        itemsDesktopSmall: false,
        itemsTablet: false,
        itemsMobile: false,
        navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"]

    });

    $("#owl-demo1").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        items: 4,
        itemsDesktop: [1199, 3],
        navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
        itemsDesktopSmall: [979, 3]

    });

    $("#owl-demo2").owlCarousel({

        autoPlay: 3000, //Set AutoPlay to 3 seconds

        items: 4,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3]

    });

});


$('.slider-single').slick({
    //slidesToShow: 1,
    //slidesToScroll: 1,
    arrows: true,
    fade: false,
    adaptiveHeight: true,
    infinite: false,
    useTransform: true,
    speed: 400,
    cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 5,
        }
    }, {
        breakpoint: 640,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    }, {
        breakpoint: 420,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    }]
});

$('.slider-nav')
    .on('init', function (event, slick) {
        $('.slider-nav .slick-slide.slick-current').addClass('is-active');
    })
    .slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        prevArrow: '<button class="slide-arrow prev-arrow"><i class="fas fa-arrow-right"></i></button>',
        nextArrow: '<button class="slide-arrow next-arrow"><i class="fas fa-arrow-right"></i></button>',
        focusOnSelect: false,
        infinite: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
            }
        }, {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }, {
            breakpoint: 420,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });

$('.slider-single').on('afterChange', function (event, slick, currentSlide) {
    $('.slider-nav').slick('slickGoTo', currentSlide);
    var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
    $('.slider-nav .slick-slide.is-active').removeClass('is-active');
    $(currrentNavSlideElem).addClass('is-active');
});

$('.slider-nav').on('click', '.slick-slide', function (event) {
    event.preventDefault();
    var goToSingleSlide = $(this).data('slick-index');

    $('.slider-single').slick('slickGoTo', goToSingleSlide);
});



$(".video-div > .poster > .container > .texts > .play-button").click(function () {
    $(".video-div > .poster").addClass("active");
     
    document.getElementsByClassName('video-kodarge')[0].play();

});

$(".video-kodarge").click(function () {

    document.getElementsByClassName('video-kodarge')[0].pause();

});

$(".pause-button").click(function () {
    $(".video-div > .poster").removeClass("active");
    
    document.getElementsByClassName('video-kodarge')[0].pause();

});


$('.slider-nav1').slick({
    //slidesToShow: 4,
    //slidesToScroll: 1,
    prevArrow: '<button class="slide-arrow prev-arrow"><i class="fas fa-arrow-right"></i></button>',
    nextArrow: '<button class="slide-arrow next-arrow"><i class="fas fa-arrow-right"></i></button>',
    asNavFor: '.slider-for',
    dots: true,
    focusOnSelect: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 5,
        }
    }, {
        breakpoint: 640,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    }, {
        breakpoint: 420,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    }]
});


$(".button-pop-up").click(function () {
    if (!$(".form").hasClass("active")) {
        $(".form").addClass("active");

    } else {
        $(".form").removeClass("active");
    }
});


//$(".form > .bot > .button").click(function () {   
//        $(".form").removeClass("active");     
//});



$(".header > .container > .menu").click(function () {
    if (!$(".hambuger-menu").hasClass("active")) {
        $(".hambuger-menu").addClass("active");

    } else {
        $(".hambuger-menu").removeClass("active");
    }
});


$(".hamburger-in > .top > .close,.hamburger-in >.bot > .button").click(function () {
    $(".hambuger-menu").removeClass("active");
});
