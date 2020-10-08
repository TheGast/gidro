$(function(){


    $('.banner-section__slider').slick({

      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/arrow-left.svg" alt=""></button>',
      nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/arrow-right.svg" alt=""></button>',
    });

    $('.product-slider').slick({

      autoplay: false,
      autoplaySpeed: 3000,      
      slidesToShow: 4,
      slidesToScroll: 1,      
      prevArrow: '<button class="product-slider__slider-btn product-slider__slider-btnprev"><img src="images/arrow-black-left.svg" alt=""></button>',
      nextArrow: '<button class="product-slider__slider-btn product-slider__slider-btnnext"><img src="images/arrow-black-right.svg" alt=""></button>',
    });



    $('.tab').on('click', function(e){
        e.preventDefault();

        $($(this).siblings()).removeClass('tab--active');
        $($(this).parent().siblings().find('div')).removeClass('tabs-content--active');

        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active');        
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
	
});