$(function(){


    $('.banner-section__slider').slick({

      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/arrow-left.svg" alt=""></button>',
      nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/arrow-right.svg" alt=""></button>',
      responsive: [
        {
          breakpoint: 969,
          settings: {
            arrows: false,            
          }
        },        
      ]
    });

    $('.product-slider').slick({

      autoplay: true,
      autoplaySpeed: 3000,      
      slidesToShow: 4,
      slidesToScroll: 1,      
      prevArrow: '<button class="product-slider__slider-btn product-slider__slider-btnprev"><img src="images/arrow-black-left.svg" alt=""></button>',
      nextArrow: '<button class="product-slider__slider-btn product-slider__slider-btnnext"><img src="images/arrow-black-right.svg" alt=""></button>',
      responsive: [
        {
          breakpoint: 1301,
          settings: {
            arrows: false,  
            dots: true,          
          }
        },        
        {
          breakpoint: 1201,
          settings: {
            arrows: false,  
            dots: true,   
            slidesToShow: 3,       
          }
        },        
        {
          breakpoint: 870,
          settings: {            
            slidesToShow: 2,
            dots: true, 
            arrows: false,           
          }
        },        
        {
          breakpoint: 590,
          settings: {            
            slidesToShow: 1,  
            dots: true,  
            arrows: false,   
          }
        },        
      ]
    });



    $('.tab').on('click', function(e){
        e.preventDefault();

        $($(this).siblings()).removeClass('tab--active');
        $($(this).parent().parent().siblings().find('div')).removeClass('tabs-content--active');

        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active');  
        $('.product-slider').slick('setPosition');      
    });


    $('.product-item__favorite').on('click', function(){
      $(this).toggleClass('product-item__favorite--active');
    });

    $('.filter-style').styler();

    $('.filter__item-drop, .filter-extra').on('click', function(){
      $(this).toggleClass('filter__item-drop--active');
      $(this).next().slideToggle('200');
    });

    
    $(".js-range-slider").ionRangeSlider();

    $('.catalog__filter-btngrid').on('click', function(){
      $(this).addClass('catalog__filter-button--active');
      $('.catalog__filter-btnlist').removeClass('catalog__filter-button--active');
      $('.product-item__wrapper').removeClass('product-item__wrapper--list');
    });
    $('.catalog__filter-btnlist').on('click', function(){
      $(this).addClass('catalog__filter-button--active');
      $('.catalog__filter-btngrid').removeClass('catalog__filter-button--active');
      $('.product-item__wrapper').addClass('product-item__wrapper--list');
    });

    $('.rateYo').rateYo({
      ratedFill: "#1C62CD",
      spacing : "7px",
      normalFill: "#c4c4c4",
    });

    $('.menu__btn').on('click', function(){
      $('.menu-mobile__list').toggleClass('menu-mobile__list--active');
    });

    $('.footer__top-title').on('click', function(){
      $(this).next().slideToggle();
      $(this).toggleClass('footer__topdrop--active');      
    });

    
    $('.aside__btn').on('click', function(){
      $(this).next().slideToggle(); 
    });
	
});