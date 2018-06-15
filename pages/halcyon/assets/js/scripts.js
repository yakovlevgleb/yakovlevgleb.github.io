/*!
 * halcyon
 * Fiercely quick and opinionated front-ends
 * https://HosseinKarami.github.io/fastshell
 * @author Hossein Karami
 * @version 1.0.5
 * Copyright 2018. MIT licensed.
 */
(function ($, window, document, undefined) {

  'use strict';

  $(function () {
   $(".header__burger").click(function(){
     $(".nav").slideToggle();
   })
   $(".nav__up").click(function(){
     $(".nav").slideToggle();
   })

  });
  $(document).ready(function(){
    if ($(window).width() <= 768) {
      $(".features__list").addClass('slide3 owl-carousel owl-theme');
      $(".contacts__list").addClass('slide3 owl-carousel owl-theme');
      $('.slide3').owlCarousel({
        items:1,
        margin:0,
        nav:false,
        dots:true,
        navSpeed:1500,
        responsiveClass:true,
  })
  }
  else{
    $(".features__list").removeClass('slide3 owl-carousel owl-theme');
    $(".contacts__list").removeClass('slide3 owl-carousel owl-theme');
  }


    $('.slide').owlCarousel({
      items:1,
      margin:0,
      nav:false,
      dots:true,
      navSpeed:1500,
      responsiveClass:true,
      responsive:{
        768:{
          nav:false,
          dots:true,
          items:1
        },
        1920:{
          nav:false,
          dots:true,
          items:3
        }
  }
  })

  $('.slide1').owlCarousel({
    margin:0,
    nav:false,
    dots:true,
    navSpeed:1500,
    responsiveClass:true,
    responsive:{
      768:{
        nav:false,
        dots:true,
        items:1
      },
      1920:{
        nav:false,
        dots:true,
        items:3
      }
}
})

$('.slide3').owlCarousel({
  margin:0,
  nav:false,
  dots:true,
  navSpeed:1500,
  responsiveClass:true,
  responsive:{
    768:{
      nav:false,
      dots:true,
      items:1
    },
    1920:{
      nav:false,
      dots:true,
      items:3
    }
}
})
});

})(jQuery, window, document);
