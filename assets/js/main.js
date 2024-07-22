(function ($) {
    'use strict';

    //=== Main Menu
    function mainMenu() {
        // Variables
        var var_window = $(window),
            navContainer = $('.template-navigation'),
            navbarToggler = $('.navbar-toggler'),
            navMenu = $('.nav-menu'),
            navMenuLi = $('.nav-menu ul li ul li'),
            closeIcon = $('.navbar-close');
        // navbar toggler
        navbarToggler.on('click', function () {
            navbarToggler.toggleClass('active');
            navMenu.toggleClass('menu-on');
        });
        // close icon
        closeIcon.on('click', function (e) {
            navMenu.removeClass('menu-on');
            navbarToggler.removeClass('active');
        });
        // adds toggle button to li items that have children
        navMenu.find('li a').each(function () {
            if ($(this).next().length > 0) {
                $(this).parent('li').append('<span class="mm-trigger"><i class="fa-solid fa-angle-down"></i></span>');
            }
        });
        // expands the dropdown menu on each click
        navMenu.find('li .mm-trigger').on('click', function (e) {
            e.preventDefault();
            $(this).parent('li').children('ul').stop(true, true).slideToggle(350);
            $(this).parent('li').toggleClass('active');
        });
        // check browser width in real-time
        function breakpointCheck() {
            var windoWidth = window.innerWidth;
            if (windoWidth <= 1199) {
                navContainer.addClass('mobile-breakpoint-on');
            } else {
                navContainer.removeClass('mobile-breakpoint-on');
            }
        }
        breakpointCheck();
        var_window.on('resize', function () {
            breakpointCheck();
        });
    }

    // Document Ready
    $(document).ready(function () {
        mainMenu();
    });

    // Nav Overlay On
    $('.navbar-toggler, .navbar-close,.nav-overlay').on('click', function (e) {
        $('.nav-overlay').toggleClass('active');
    });
    $('.nav-overlay').on('click', function (e) {
        $('.navbar-toggler').removeClass('active');
        $('.nav-menu').removeClass('menu-on');
    });


    //=== Sticky
    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 15) {
            $('.template-navigation').removeClass('sticky');
        } else {
            $('.template-navigation').addClass('sticky');
        }
    });

    //=== Back to top
    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200);
        } else {
            $('.back-to-top').fadeOut(200);
        }
    });
    $('.back-to-top').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate(
            {
                scrollTop: 0,
            },
            150,
        );
    });

    //======= Aos Animate js
    AOS.init({
        // easing: 'linear',
        duration: 1200
    });
})(window.jQuery);


// Type Writer
var app = document.getElementById('mySkill');

var typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
});

typewriter
    .pauseFor(200)
    .typeString('Data Analyst.')
    .deleteChars(13)
    .pauseFor(200)
    .typeString('Business Analyst.')
    .deleteChars(17)
    .pauseFor(200)
    .typeString('Business Intelligence Engineer.')
    .deleteChars(31)
    .pauseFor(300)
    .typeString('Tableau Developer.')
    .deleteChars(18)
    .pauseFor(300)
    .typeString('Data Engineer.')
    .pauseFor(1000)
    .start();


const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.arrow-next',
        prevEl: '.arrow-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});