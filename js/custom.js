

(function($) {
    "use strict";
	
		/* ==============================================
			SMOOTH SCROLL 
		=============================================== */
		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
				|| location.hostname == this.hostname) {
		
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				   if (target.length) {
					 $('html,body').animate({
						 scrollTop: target.offset().top
					}, 1000);
					return false;
				}
			}
		});
		  // Activate scrollspy to add active class to navbar items on scroll
		  $('body').scrollspy({
			target: '#mainNav',
			offset: 54
		  });
		/* =========================
            SCROLL MENU
        =========================*/
		$(window).on('scroll', function () {
			if ($(window).scrollTop() > 50) {
				$('.header-block-top').addClass('fixed-menu');
			} else {
				$('.header-block-top').removeClass('fixed-menu');
			}
		});
		
	/* =========================
            NAV MENU
        =========================*/
		$('.navbar-nav li a').on("click", function(e) {
			$('.navbar-nav li').removeClass('active');
			var $parent = $(this).parent();
			if (!$parent.hasClass('active')) {
				$parent.addClass('active');
			}
		});
		
		/* =========================
            CAROUSEL 
        =========================*/
		
		$(document).ready(function() {
		  $("#owl-demo").owlCarousel({
			  autoPlay: 3000, //Set AutoPlay to 3 seconds
			  items : 3,
			  itemsDesktop : [1199,3],
			  itemsDesktopSmall : [979,2]
		 
		  });
		});
		
		/* ========================
			SLIDER - TAB 
		=============================*/
		
		
		 $('.slider-single').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: false,
			adaptiveHeight: true,
			infinite: false,
			useTransform: true,
			speed: 400,
			cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
		 });
		
		 $('.slider-nav')
			.on('init', function(event, slick) {
				$('.slider-nav .slick-slide.slick-current').addClass('is-active');
			})
			.slick({
				slidesToShow: 4,
				slidesToScroll: 7,
				dots: false,
				focusOnSelect: false,
				infinite: false,
				responsive: [{
					breakpoint: 1024,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 4,
					}
				}, {
					breakpoint: 769,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 4,
					}
				}, {
					breakpoint: 420,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
				}
				}]
			});
		
		 $('.slider-single').on('afterChange', function(event, slick, currentSlide) {
			$('.slider-nav').slick('slickGoTo', currentSlide);
			var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
			$('.slider-nav .slick-slide.is-active').removeClass('is-active');
			$(currrentNavSlideElem).addClass('is-active');
		 });
		
		 $('.slider-nav').on('click', '.slick-slide', function(event) {
			event.preventDefault();
			var goToSingleSlide = $(this).data('slick-index');
		
			$('.slider-single').slick('slickGoTo', goToSingleSlide);
		 });
		 
		/* ========================
			WOW ANIMATION
		=============================*/
		
    		new WOW().init();
			
		/* ========================
			DATE/TIME PICKER
		=============================*/
		
		var date = new Date();
		var today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
		$('#date-picker').datetimepicker({
			format: 'DD.MM.YYYY',
			minDate: today
		});
		$('#time-picker').datetimepicker({
			format: 'LT'
		});
		
		/* ==============================================
			SELECTPICKER
		=============================================== */
		
		$('.selectpicker').selectpicker();

		/* ==============================================
			PRELOADER
		=============================================== */
		
		  
		$(window).load(function() { 
			$("#status").fadeOut("slow"); 
			$("#loader").delay(200).fadeOut(); 
		})
		
		  
		  
		/* ==============================================
			SCROLL UP
		=============================================== */
			
			$(window).scroll(function(){
				if ($(this).scrollTop() > 100) {
					$('.scrollup').fadeIn();
				} else {
					$('.scrollup').fadeOut();
				}
			}); 
			
			$('.scrollup').click(function(){
				$("html, body").animate({ scrollTop: 0 }, 600);
				return false;
			});
			
			 
		 	