$(document).ready(function () {
    $('.banner-slider').owlCarousel({
        loop: true,
        nav: true,
        navText: ["<img style='position:absolute;left:0px;top:50%;' src='./assets/images/banner/leftarrow.png'>", "<img style='position:absolute;right:0%;top:50%;' src='./assets/images/banner/rightarrow.png'>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $("#datepicker").datepicker({
        autoclose: true,
        todayHighlight: true
    }).datepicker('update', new Date());

    $('.form-control').val('select date');

    $('.special-offers-slider').owlCarousel({
        loop: true,
        nav: true,
        autoHeight: true,
        stagePadding: 150,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });

    $('.happy-clients-slider').owlCarousel({
        loop: true,
        nav: true,
        autoHeight: true,
        stagePadding: 150,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });

});