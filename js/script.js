$(function () {
    'use strict'
      // slick slider Banner_part(autoplay)
      $('#banner_part').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        speed: 2000,
        arrows: false,
        dots: true,
    });
    // slick slider Testimonial(autoplay)
    $('.slide_korbe').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        speed: 2000,
        arrows: false,
        dots: true,
    });
    // venubox
    $('.venobox').venobox();

    // CounterUp
    $('.counter').counterUp({
        delay: 10,
        time: 1500
    });
    // slick slider (advertise part)
    $('.ad_parent').slick({
        slidesToShow: 5,
        slidesToScroll: 2,
        speed: 1000,
        centerMode:true,
        centerPadding:0,
        nextArrow: '<i class="fas fa-chevron-right next_arrow"></i>',
        prevArrow: '<i class="fas fa-chevron-left prev_arrow"></i>',
    });
    // scrolling button
    $(window).on('scroll',function(){
        var scrolling= $(this).scrollTop();
        if(scrolling>300){
            $('.back_to_top').fadeIn();
        }
        else{
            $('.back_to_top').fadeOut()
        }
    });
})