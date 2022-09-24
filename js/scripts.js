$(document).ready(function () {

    if (document.documentElement.clientWidth > 576) {
        $('.reviews_carousel').owlCarousel({
            loop: true,
            margin: 30,
            items: 3,
            autoplay: true,
            autoplayTimeout: 2000,
            dots: false,
            nav: true,
            navText: [' ', ' '],

            responsive: {
                0: {
                    items: 1,
                    loop: false,
                    autoplay: false,
                    autoplayTimeout: 0,
                    nav: false,
                    navText: false,
                },
                576: {
                    items: 1,
                },
                767: {
                    items: 2
                },
                992: {
                    items: 3
                },
            }
        });
    }


    $('.service_carousel').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        dotsEach: true,
        margin: 65,
        center: true,
        autoplay: true,
        autoplayTimeout: 2000,

        responsive: {
            0: {
                items: 1,
            },
            567: {
                items: 2,
                margin: 35,
            },
            767: {
                margin: 35,
            },
            1200: {
                items: 3,
            },
        }
    });


    $(function () {

        $('.load-more').on('click', function () {
            const btn = $(this);
            const loader = btn.find('span');
            $.ajax({
                url: '../data.html',
                type: 'GET',
                beforeSend: function () {
                    btn.attr('disabled', true)
                    loader.addClass('d-inline-block');
                },
                success: function (responce) {
                    setTimeout(function () {
                        loader.removeClass('d-inline-block');
                        btn.attr('disabled', false);
                        // console.log(responce);
                        $('.after-posts').before(responce);
                    }, 1000);
                },
                error: function () {
                    alert('Error!');
                    loader.removeClass('d-inline-block');
                    btn.attr('disabled', false);
                }
            });
        })
    });
});


// $('.step-slider').on('changed.owl.carousel', function (event) {
//     var idx = event.item.index; // номер активного элемента
// });

// _________________________________________________
// if ($(window).width() > 700) {
//     $(document).ready(function () {
//         $(".reviews_carousel").owlCarousel({
//             loop: true,
//             margin: 30,
//             items: 3,
//             // autoWidth: true,
//             // center: true,
//             // slideBy: 1,
//
//             autoplay: true,
//             autoplayTimeout: 2000,
//             dots: false,
//             nav: true,
//             navText: [' ', ' '],
//
//             responsive: {
//                 0: {
//                     items: 1
//                 },
//
//                 767: {
//                     items: 2
//                 },
//                 992: {
//                     items: 3
//                 },
//             }
//         });
//     });
// }