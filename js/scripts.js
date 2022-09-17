$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,

        autoplay: true,
        autoplayTimeout: 2000,

        nav:true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },

            1000:{
                items:1
            }
        }
    });
});