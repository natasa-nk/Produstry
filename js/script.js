$(function(){
    //Banner-slider
    $('.slider-main-wrapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover:false,
        arrows: true,
        prevArrow:".left",
        nextArrow:".right",
      });

      //counter-up
      $('.counter').counterUp({
        delay: 10,
        time: 3000,
    });

    //blog-slider
    $('.blog-main-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      centerMode: true,
      centerPadding: '0px',
      autoplaySpeed: 2000,
      pauseOnHover:false,
      arrows: true,
      prevArrow:".blog-angle-l",
      nextArrow:".blog-angle-r",
      responsive: [
        {
          breakpoint: 1400,
          settings: {
              slidesToShow:3,
              slidesToScroll: 3,
              dots: false,
              arrows: false,
          }
      },
        {
          breakpoint: 1200,
          settings: {
              slidesToShow:3,
              slidesToScroll: 3,
              dots: false,
              arrows: false,
          }
      },
        {
          breakpoint: 992,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              arrows: false,
          }
      },
        {
          breakpoint: 768,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              arrows: false,
          }
      },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
          }
        },
        
      ]
    });


    // testimonial-slider
    $('.text-slider').slick({
      // asNavFor: '.testimonial-img-slider',
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover:false,
      arrows: true,
      prevArrow:".testimonial-angle-l",
      nextArrow:".testimonial-angle-r",
    });

    $('.testimonial-img-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      centerMode: true,
      centerPadding: '0px',
      autoplaySpeed: 2000,
      pauseOnHover:false,
      arrows: true,
      prevArrow:".testimonial-angle-l",
      nextArrow:".testimonial-angle-r",
    });

    // Brand-slider
    $('.brand-slider').slick({
      slidesToShow: 5,
      slidesToScroll: 5,
      autoplay: true,
      centerMode: true,
      centerPadding: '0px',
      pauseOnHover:false,
      arrows: true,
      prevArrow:".brand-angle-l",
      nextArrow:".brand-angle-r",
      responsive: [
        {
          breakpoint: 1200,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false,
              arrows: false,
          }
      },
        {
          breakpoint: 992,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              dots: false,
              arrows: false,
          }
      },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
          }
        }
      ]
    });

    // scrol-function
    $(window).scroll(function(){
      var top = $(this).scrollTop()
      if(top > 900){
        $(".navbar").addClass("sticky-menu")
      }
      else{
        $(".navbar").removeClass("sticky-menu")
      }
      if(top > 300){
        $(".top-up-button").fadeIn(300)
      }
      else{
        $(".top-up-button").fadeOut(300)
      }
    });

    $(".top-up-button").click(function(){
      $("html,body").animate({scrollTop:0},1000)
    });



     //scroll-spy & Smooth-scrolling
  var scrollLink = $('.scroll-link');
  $(scrollLink).on('click', function (event) {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top - 10
    }, 1000);
  });
  $(window).on('scroll', function () {
    var scrollTop = $(this).scrollTop();
    scrollLink.each(function () {
      var sectionhead = $(this.hash).offset().top - 10;
      if (scrollTop >= sectionhead) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    });
  });
  
  $(".navbar-toggler").click(function(event) {
    event.stopPropagation();
    $("#hamburger-menu").toggleClass("open");
    $("#menu-container .menu-list").toggleClass("active");
    slideMenu();

    $("body").toggleClass("overflow-hidden");
  });
  
    
})