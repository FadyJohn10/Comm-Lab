function initCyberbook() {
    "use strict";
    //   loader ------------------
    firstLoad();
    function firstLoad() {
        TweenMax.to($(".loading-spinner img"), 1.0, {
            force3D: true,
            scale: "0.9",
            opacity: 0,

            ease: Expo.easeInOut,
            delay: 0.5,
            onComplete: function () {
                $(".main-loader-wrap").fadeOut(100, function () {
                    $("#main").animate({
                        opacity: "1"
                    }, 1200);

                });
            }
        });
    }
    function csselem() {
        $(".height-emulator").css({
            height: $(".main-footer").outerHeight(true)-33
        });
    }
    $(window).on("resize", function () {
        csselem();
    });
    csselem();
    //   duplicate ------------------	
    $.fn.duplicate = function (a, b) {
        const c = [];
        for (var d = 0; d < a; d++) $.merge(c, this.clone(b).get());
        return this.pushStack(c);
    };
    $("<span class='pr-button-dot'></span>").duplicate(4).appendTo(".pr_btn_dots");
    $("<div class='container full-height'></div>").appendTo(".sec-lines");
    $("<div class='line-item'></div>").duplicate(5).appendTo(".sec-lines .container");
    $("<span class='arrow_dec_dot'></span>").duplicate(9).appendTo(".arrow_dec");
    $("<span class='overlay-dec-dot'></span>").duplicate(9).appendTo(".overlay-dec");
    $("<span class='hsd_dec-dot'><i class='fas fa-caret-up'></i></span>").duplicate(3).appendTo(".hdec_d");
    $("<span class='h_a-dot'><i class='fas fa-caret-right'></i></span>").duplicate(4).appendTo(".hero-arrows_dec");

    //   Background image ------------------
    const a = $(".bg");
    a.each(function (a) {
        if ($(this).attr("data-bg")) $(this).css("background-image", "url(" + $(this).data("bg") + ")");
    });

    //  list ------------------	
    $(".list-item_link").on("click", function () {
        $(this).parents(".list-item").find(".list-item_content").slideToggle(500);
        $(this).toggleClass("actdetlink");
        const cbc = $(".piechart-holder").attr("data-skcolor");
        $(this).parents(".list-item").find(".chart").easyPieChart({
            barColor: cbc,
            trackColor: "#000",
            scaleColor: "#000",
            size: "180",
            lineWidth: "12",
            lineCap: "square",
            animate: 3500,
            onStep: function (value) {
                this.$el.parents(".piechart-item").find('.percentage').text(~~value + 1);
            }
        });
    });
    $('.list-item').on('mouseover', function () {
        const hidworit_index_each = $(this).data("bgsrc");
        $(this).find(".reval-image .bg").css("background-image", "url(" + hidworit_index_each + ")");
    });

    //   sliders ------------------
    if ($(".half-carousel").length > 0) {
        const hc = new Swiper(".half-carousel .swiper-container", {
            preloadImages: true,
            loop: true,
            centeredSlides: true,
            freeMode: false,
            slidesPerView: 2,
            spaceBetween: 10,
            grabCursor: true,
            mousewheel: false,
            parallax: true,
            speed: 1400,
            navigation: {
                nextEl: '.hcw-cont-next',
                prevEl: '.hcw-cont-prev',
            },
            pagination: {
                el: '.cen-slider-pagination',
                clickable: true,
            },
            breakpoints: {
                768: {
                    slidesPerView: 1,
                },

            }
        });
    }
    if ($(".testimonilas-carousel").length > 0) {
        const ms1 = new Swiper(".testimonilas-carousel .swiper-container", {
            loop: true,
            grabCursor: true,
            autoHeight: false,
            centeredSlides: true,
            slidesPerView: 3,
            spaceBetween: 0,
            speed: 1400,
            pagination: {
                el: '.tc-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.tc-button-next',
                prevEl: '.tc-button-prev',
            },
            breakpoints: {
                1920: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
            }
        });
    }
    var lsct2 = 0;
    $(window).on("scroll", function () {
        var wst = $(this).scrollTop();
        if (wst < lsct2) {
            $(".dir-arrow").addClass("dird");
        } else {
            $(".dir-arrow").removeClass("dird");
        }
        lsct2 = wst;
    });
    //   appear------------------
    $(".stats").appear(function () {
        $(".num").countTo();
    });
    //input effect
    $( '.js-input' ).keyup(function() {
        if( $(this).val() ) {
           $(this).addClass('not-empty');
        } else {
           $(this).removeClass('not-empty');
        }
    });
    //   accordion ------------------
    $(".accordion a.toggle").on("click", function (a) {
        a.preventDefault();
        $(".accordion a.toggle").removeClass("act-accordion");
        $(this).addClass("act-accordion");
        if ($(this).next('div.accordion-inner').is(':visible')) {
            $(this).next('div.accordion-inner').slideUp();
        } else {
            $(".accordion a.toggle").next('div.accordion-inner').slideUp();
            $(this).next('div.accordion-inner').slideToggle();
        }
    });
    //   buttons ------------------		
    $(".page-scroll-nav_wrap ").singlePageNav({
        filter: ":not(.external)",
        updateHash: false,
        offset: 110,
        threshold: 120,
        speed: 1200,
        currentClass: "act-sec"
    });
    $(".hidden_wrap_btn").on("click", function () {
        $(".page-scroll-nav_wrap").fadeToggle(500);
    });
    //  cursor  ------------------
    $("a , .btn ,   textarea,   input  , .leaflet-control-zoom , .share_btn , .close-contact_form , .hc-single_btn  , .nav-button, .swiper-pagination-bullets , .to-top-btn  , .gc-slider-cont  , .hp_popup , button  , .fw_cb , .promo-video-btn , .fsc , .hsc , .play-pause_slider , .act-cf , .blog-btn , .ss-slider-cont , .shop-opt_btn , .nice-select , .irs  , .add_cart , .pr-remove , .cbc_btn").on({
        mouseenter: function () {
            $(".element-item").addClass("elem_hover");
        },
        mouseleave: function () {
            $(".element-item").removeClass("elem_hover");
        }
    });
    $(".swiper-slide").on({
        mouseenter: function () {
            $(".element-item").addClass("slider_hover");
        },
        mouseleave: function () {
            $(".element-item").removeClass("slider_hover");
        }
    });	
	
}
if ($(".element-item").length > 0) {
    const mouse = {
        x: 0,
        y: 0
    };
    const pos = {
        x: 0,
        y: 0
    };
    const ratio = 0.15;
    const active = false;
    const ball = document.querySelector('.element-item');
    TweenLite.set(ball, {
        xPercent: -50,
        yPercent: -50
    });
    document.addEventListener("mousemove", mouseMove);
    function mouseMove(e) {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        mouse.x = e.pageX;
        mouse.y = e.pageY - scrollTop;
    }
    TweenMax.ticker.addEventListener("tick", updatePosition);
    function updatePosition() {
        if (!active) {
            pos.x += (mouse.x - pos.x) * ratio;
            pos.y += (mouse.y - pos.y) * ratio;
            TweenMax.set(ball, {
                x: pos.x,
                y: pos.y
            });
        }
    }
}

//   Init All Functions------------------
$(document).ready(function () {
    initCyberbook();
});