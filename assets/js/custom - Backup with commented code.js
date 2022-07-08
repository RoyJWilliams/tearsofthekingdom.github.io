/*
 *
 *		CUSTOM.JS
 *
 */

(function($){
	
	"use strict";
	
	// DETECT TOUCH DEVICE //
	function is_touch_device() {
		return !!('ontouchstart' in window) || ( !! ('onmsgesturechange' in window) && !! window.navigator.maxTouchPoints);
	}
	
	
	// SHOW/HIDE MOBILE MENU //
	function show_hide_mobile_menu() {
		
		$("#mobile-menu-button").on("click", function(e) {
            
			e.preventDefault();
			
			$("#mobile-menu").slideToggle(300);
			
        });	
		
	}
	
	
	// MOBILE MENU //
	function mobile_menu() {
		
		if ($(window).width() < 1200) {
			
			if ($("#menu").length > 0) {
			
				if ($("#mobile-menu").length < 1) {
					
					$("#menu").clone().attr({
						id: "mobile-menu",
						class: ""
					}).insertAfter("#header");
					
					$("#mobile-menu .megamenu > a").on("click", function(e) {
                        
						e.preventDefault();
						
						$(this).toggleClass("open").next("div").slideToggle(300);
						
                    });
					
					$("#mobile-menu .dropdown > a").on("click", function(e) {
                        
						e.preventDefault();
						
						$(this).toggleClass("open").next("ul").slideToggle(300);
						
                    });
				
				}
				
			}
				
		} else {
			
			$("#mobile-menu").hide();
			
		}
		
	}
	
	
	// HEADER SEARCH //
	function header_search() {	
		
		$(".search a").on("click", function(e) { 
	
			e.preventDefault();
			
			if(!$(".search a").hasClass("open")) {
			
				$("#search-form-container").addClass("open-search-form").fadeIn(300)
				
			} else {
				
				$("#search-form-container").removeClass("open-search-form").fadeOut(100);
			
			}
			
		});
		
		$("#search-form").after('<a class="search-form-close" href="#">x</a>');
		
		$("#search-form-container a.search-form-close").on("click", function(event){
			
			event.preventDefault();
			$("#search-form-container").removeClass("open-search-form").fadeOut(100);
			
		});
		
	}
	
	
	// STICKY //
	function sticky() {
		
		var sticky_point = 155;
		
		$("#header").clone().attr({
			id: "header-sticky",
			class: ""
		}).insertAfter("header");
		
		$("#header-sticky #logo img").attr("src", "assets/images/logo-sticky.png");
		
		$(window).scroll(function(){
			
			if ($(window).scrollTop() > sticky_point) {  
				$("#header-sticky").slideDown(300).addClass("header-sticky");
				$("#header .menu ul, #header .menu .megamenu-container").css({"visibility": "hidden"});
			} else {
				$("#header-sticky").slideUp(100).removeClass("header-sticky");
				$("#header .menu ul, #header .menu .megamenu-container").css({"visibility": "visible"});
			}
			
		});
		
	}
	
	
	// CHANGE LOGO //
	function change_logo() {
		
		if ($(window).width() < 1200) {
			$("#header #logo img").attr("src", "assets/images/logo-mobile.png");
		} else {
			$("#header #logo img").attr("src", "assets/images/logo.png");
		}
		
	}
	
 
	// PROGRESS BARS // 
	function progress_bars() {
		
		$(".progress .progress-bar:in-viewport").each(function() {
			
			if (!$(this).hasClass("animated")) {
				$(this).addClass("animated");
				$(this).animate({
					width: $(this).attr("data-width") + "%"
				}, 2000);
			}
			
		});
		
	}


	// CHARTS //
	function pie_chart() {
		
		if (typeof $.fn.easyPieChart !== 'undefined') {
		
			$(".pie-chart:in-viewport").each(function() {
				
				$(this).easyPieChart({
					animate: 1500,
					lineCap: "square",
					lineWidth: $(this).attr("data-line-width"),
					size: $(this).attr("data-size"),
					barColor: $(this).attr("data-bar-color"),
					trackColor: $(this).attr("data-track-color"),
					scaleColor: "transparent",
					onStep: function(from, to, percent) {
						$(this.el).find(".pie-chart-percent .value").text(Math.round(percent));
					}
				});
				
			});
			
		}
		
	}
	
	// COUNTER //
	function counter() {
		
		if (typeof $.fn.jQuerySimpleCounter !== 'undefined') {
		
			$(".counter .counter-value:in-viewport").each(function() {
				
				if (!$(this).hasClass("animated")) {
					$(this).addClass("animated");
					$(this).jQuerySimpleCounter({
						start: 0,
						end: $(this).attr("data-value"),
						duration: 2000
					});	
				}
			
			});
			
		}
	}
	
	
	// STATISTICS //
	function statistics() {
		
		$(".statistics-container .animate-chart:in-viewport").each(function() {
			
			if(!$(this).hasClass("animated")) {
				
				$(this).addClass("animated");
				
				// LINE CHART //
				var data = {
					labels : ["2014", "", "", "", "", "", "2016"],
					datasets : [
						{
							label: "Financial revenue",
							fill: "true",
							backgroundColor: "transparent",
							borderColor: "#36394a",
							pointBorderColor: "#36394a",
							pointBackgroundColor: "#36394a",
							pointHoverBackgroundColor: "#fff",
							pointHoverBorderColor: "#00ddf7",
							pointBorderWidth: 3,
							pointHoverBorderWidth: 2,
							tension: 0,
							stacked: false,
							data : [50, 150, 175, 225, 200, 300, 350]
						}
					]
				}
				
				if ($("#line-chart").length > 0) {
					
					var myLineChart = new Chart(document.getElementById("line-chart").getContext("2d"), {
						type: 'line',
						data: data,
						options: {
							responsive: true,
							legend: {
								position: "top",
								labels: {
									boxWidth: 15,
									fontColor: "#36394a",
									fontFamily: "Montserrat",
									fontSize: 16
								}
							},
							tooltips: {
								enabled: false
							},
							scales: {
								xAxes: [{
									display: true,
									gridLines: {
										display: false
									}
								}],
								yAxes: [{
									display: true,
									gridLines: {
										display: false
									},
									ticks: {
										suggestedMin: 0,
										suggestedMax: 400,
									}
								}]
							}
						}
					});

				}
				
			}
			
		});
		
	}
	
	
	// MULTILAYER PARALLAX //
	function multilayer_parallax() {
		
		$(".multilayer-parallax .parallax-layer").each(function(){
			
			var x = parseInt($(this).attr("data-x"), 10),
				y = parseInt($(this).attr("data-y"), 10);
			
			$(this).css({
				"left": x + "%", 
				"top": y + "%"
			});
			
		});

	}
	
	
	// LOAD MORE PROJECTS //
	function load_more_projects() {
	
		var number_clicks = 0;
		
		$(".load-more").on("click", function(e) {
			
			e.preventDefault();
			
			if (number_clicks == 0) {
				$.ajax({
					type: "POST",
					url: $(".load-more").attr("href"),
					dataType: "html",
					cache: false,
					msg : '',
					success: function(msg) {
						$(".isotope").append(msg);	
						$(".isotope").imagesLoaded(function() {
							$(".isotope").isotope("reloadItems").isotope();
							$(".fancybox").fancybox({
								prevEffect: 'none',
								nextEffect: 'none',
								padding: 0
							});
						});
						number_clicks++;
						$(".load-more").html("Nothing to load");
					}
				});
			}
			
		});
		
	}
	
	
	// INSTAGRAM FEED //
	function instagram_feed() {

		if ($("#instafeed").length > 0 ) {
				
			var nr = $("#instafeed").data('number');
			var userid = $("#instafeed").data('user');
			var accesstoken = $("#instafeed").data('accesstoken');
			
			var feed = new Instafeed({
				target: 'instafeed',
				get: 'user',
				userId: userid,
				accessToken: accesstoken,
				limit: nr,
				resolution: 'thumbnail',
				sortBy: 'most-recent'
			});
			
			feed.run();
		
		}
			
	}
	
	
	// SHOW/HIDE SCROLL UP //
	function show_hide_scroll_top() {
		
		if ($(window).scrollTop() > $(window).height()/2) {
			$("#scroll-up").fadeIn(300);
		} else {
			$("#scroll-up").fadeOut(300);
		}
		
	}
	
	
	// SCROLL UP //
	function scroll_up() {				
		
		$("#scroll-up").on("click", function() {
			$("html, body").animate({
				scrollTop: 0
			}, 800);
			return false;
		});
		
	}
	
	
	// SMOOTH SCROLLING //
	function smooth_scrolling() {
		
		$("#page-header .go-to-section").on("click", function() {
			
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top - 120
					}, 1000);
				
					return false;
				
				}
			
			}
			
		});
		
	}
	
	
	// EQUAL HEIGHT //
	function equal_height() {

		if ($(window).width() > 767) {
	
			$(".image-boxes-list").each(function(){
				
				var x = 0;
				
				$(".image-boxes-list li").each(function() {
					
					if($(this).height() > x) {
						x = $(this).height();
					}
					
				});
				
				$(".image-boxes-list li .image-box").css("height", x + "px");

			});
			
		}

	}
	
	
	// FULL SCREEN //
	function full_screen() {

		if ($(window).width() > 767) {
			$(".full-screen").css("height", $(window).height() + "px");
		} else {
			$(".full-screen").css("height", "auto");
		}

	}
	
	
	// ANIMATIONS //
	function animations() {
		
		animations = new WOW({
			boxClass: 'wow',
			animateClass: 'animated',
			offset: 100,
			mobile: false,
			live: true
		});
		
		animations.init();
		
	}
	
	// DOCUMENT READY //
	$(document).ready(function(){
		
		// STICKY //
		sticky();
		
		
		// MENU //
		if (typeof $.fn.superfish !== 'undefined') {
			
			$(".menu").superfish({
				delay: 500,
				animation: {
					opacity: 'show',
					height: 'show'
				},
				speed: 'fast',
				autoArrows: true
			});
			
		}
		
		
		// SHOW/HIDE MOBILE MENU //
		show_hide_mobile_menu();
		
		
		// MOBILE MENU //
		mobile_menu();
		
		
		// HEADER SEARCH //
		header_search();
		
		
		// CHANGE LOGO //
		change_logo();
		
		
		// FANCYBOX //
		if (typeof $.fn.fancybox !== 'undefined') {
		
			$(".fancybox").fancybox({
				prevEffect: 'none',
				nextEffect: 'none',
				padding: 0
			});
			
			$(".newsletter-popup").fancybox({
				maxWidth: 800,
				maxHeight: 600,
				fitToView: false,
				width: '70%',
				height: '70%',
				autoSize: false,
				closeClick: false,
				openEffect: 'none',
				closeEffect: 'none'
			});
		
		}
		
		// REVOLUTION SLIDER //
		if (typeof $.fn.revolution !== 'undefined') {
			
			$(".rev_slider").revolution({
				sliderType: "standard",
				sliderLayout: "auto",
				delay: 9000,
				navigation: {
					arrows:{
						style: "custom",
						enable: true,
						hide_onmobile: true,
						hide_onleave: false,
						hide_delay: 200,
						hide_delay_mobile: 1200,
						hide_under: 0,
						hide_over: 9999,
						tmp: '',
						left: {
							h_align: "left",
							v_align: "center",
							h_offset: 50,
							v_offset: 0
						 },
						 right: {
							h_align: "right",
							v_align: "center",
							h_offset: 50,
							v_offset: 0
						 }
					},
					bullets:{
						style: "custom",
						enable: true,
						hide_onmobile: false,
						hide_onleave: false,
						hide_delay: 200,
						hide_delay_mobile: 1200,
						hide_under: 0,
						hide_over: 9999,
						tmp: '', 
						direction: "horizontal",
						space: 20,       
						h_align: "center",
						v_align: "bottom",
						h_offset: 0,
						v_offset: 50
					},
					touch:{
						touchenabled: "on",
						swipe_treshold: 75,
						swipe_min_touches: 1,
						drag_block_vertical: false,
						swipe_direction: "horizontal"
					}
				},			
				gridwidth: 1170,
				gridheight: 880		
			});
			
		}
	
	
		// OWL Carousel //
		if (typeof $.fn.owlCarousel !== 'undefined') {
			
			// SERVICES SLIDER //
			$(".owl-carousel.services-slider").owlCarousel({
				items: 1,
				autoplay: true,
				autoplayTimeout: 3000,
				autoplayHoverPause: true,
				loop: true,
				nav: false,
				navText: false,
				dots: true,
				mouseDrag: false,
				touchDrag: false,
				animateIn: 'slideInDown',
				animateOut: 'slideOutDown'
			});
			
			
			// BLOG ARTICLES SLIDER //
			var blog_articles_slider = $(".owl-carousel.blog-articles-slider").owlCarousel({
				autoplay: true,
				autoplayTimeout: 3000,
				autoplayHoverPause: true,
				smartSpeed: 1200,
				loop: true,
				nav: false,
				navText: false,
				dots: true,
				mouseDrag: true,
				touchDrag: true,
				margin: 30,
				responsive: {
					0:{
						items: 1
					},
					768:{
						items: 2
					},
					992:{
						items: 3
					}
				}
			});
			
			$('.blog-articles-slider-navigation .prev').click(function() {
				blog_articles_slider.trigger('prev.owl.carousel');
			});
			
			$('.blog-articles-slider-navigation .next').click(function() {
				blog_articles_slider.trigger('next.owl.carousel');
			});
			
			
			// IMAGES SLIDER //
			$(".owl-carousel.images-slider").owlCarousel({
				items: 1,
				autoplay: true,
				autoplayTimeout: 3000,
				autoplayHoverPause: true,
				loop: true,
				nav: false,
				navText: false,
				dots: true,
				mouseDrag: false,
				touchDrag: true,
				animateIn: 'slideInDown',
				animateOut: 'slideOutDown'
			});
			
			$(".owl-carousel.images-slider-2").owlCarousel({
				items: 1,
				autoplay: true,
				autoplayTimeout: 3000,
				autoplayHoverPause: true,
				loop: true,
				nav: false,
				navText: false,
				dots: true,
				mouseDrag: true,
				touchDrag: true
			});
			
			var images_slider = $(".owl-carousel.images-slider-3").owlCarousel({
				items: 1,
				autoplay: true,
				autoplayTimeout: 3000,
				autoplayHoverPause: true,
				loop: true,
				nav: false,
				navText: false,
				dots: true,
				mouseDrag: true,
				touchDrag: true
			});
			
			$('.images-slider-navigation .prev').click(function() {
				images_slider.trigger('prev.owl.carousel');
			});
			
			$('.images-slider-navigation .next').click(function() {
				images_slider.trigger('next.owl.carousel');
			});
			
			
			// LOGOS SLIDER //
			$(".owl-carousel.logos-slider").owlCarousel({
				autoplay: true,
				autoplayTimeout: 3000,
				autoplayHoverPause: true,
				smartSpeed: 1200,
				loop: true,
				nav: true,
				navText: false,
				dots: false,
				mouseDrag: true,
				touchDrag: true,
				responsive: {
					0:{
						items: 1
					},
					480:{
						items: 2
					},
					768:{
						items: 3
					},
					992:{
						items: 4
					},
					1200:{
						items: 5
					}
				}
			});
		
		}
		
		
		// GOOGLE MAPS //
		if (typeof $.fn.gmap3 !== 'undefined') {
		
			$(".map").each(function() {
				
				var data_zoom = 15,
					data_height;
				
				if ($(this).attr("data-zoom") !== undefined) {
					data_zoom = parseInt($(this).attr("data-zoom"),10);
				}	
				
				if ($(this).attr("data-height") !== undefined) {
					data_height = parseInt($(this).attr("data-height"),10);
				}	
				
				$(this).gmap3({
					marker: {
						values: [{
							address: $(this).attr("data-address"),
							data: $(this).attr("data-address-details")
						}],
						options:{
							draggable: false
						},
						events:{
							mouseover: function(marker, event, context){
								var map = $(this).gmap3("get"),
								infowindow = $(this).gmap3({get:{name:"infowindow"}});
								if (infowindow){
									infowindow.open(map, marker);
									infowindow.setContent(context.data);
								} else {
									$(this).gmap3({
										infowindow:{
											anchor:marker, 
											options:{content: context.data}
										}
									});
								}
							},
							mouseout: function(){
								var infowindow = $(this).gmap3({get:{name:"infowindow"}});
								if (infowindow){
									infowindow.close();
								}
							}
						}
					},
					map: {
						options: {
							mapTypeId: google.maps.MapTypeId.ROADMAP,
							zoom: data_zoom,
							scrollwheel: false
						}
					}
				});
				
				$(this).css("height", data_height + "px");
				
			});
			
		}
		
		
		// ISOTOPE //
		if ((typeof $.fn.imagesLoaded !== 'undefined') && (typeof $.fn.isotope !== 'undefined')) {
		
			$(".isotope").imagesLoaded( function() {
				
				var container = $(".isotope");
				
				container.isotope({
					itemSelector: '.isotope-item',
					layoutMode: 'masonry',
					transitionDuration: '0.8s'
				});
				
				$(".filter li a").on("click", function() {
					$(".filter li a").removeClass("active");
					$(this).addClass("active");
		
					var selector = $(this).attr("data-filter");
					container.isotope({
						filter: selector
					});
		
					return false;
				});
		
				$(window).resize(function() {
					container.isotope();
				});
				
			});
			
			$(".isotope.masonry").imagesLoaded( function() {
				
				var container_masonry = $(".isotope.masonry");
				
				container_masonry.isotope({
					itemSelector: '.isotope-item',
					layoutMode: 'fitRows',
					transitionDuration: '0.8s'
				});
				
				$(".filter li a").on("click", function() {
					$(".filter li a").removeClass("active");
					$(this).addClass("active");
		
					var selector = $(this).attr("data-filter");
					container_masonry.isotope({
						filter: selector
					});
		
					return false;
				});
		
				$(window).resize(function() {
					container_masonry.isotope();
				});
				
			});
			
		}
		
		
		// LOAD MORE PORTFOLIO ITEMS //
		load_more_projects();
		
		
		// PLACEHOLDER //
		if (typeof $.fn.placeholder !== 'undefined') {
			
			$("input, textarea").placeholder();
			
		}
		
		
		// CONTACT FORM VALIDATE & SUBMIT //
		// VALIDATE //
		if (typeof $.fn.validate !== 'undefined') {
		
			$("#contact-form").validate({
				rules: {
					name: {
						required: true
					},
					email: {
						required: true,
						email: true
					},
					subject: {
						required: true
					},
					message: {
						required: true,
						minlength: 10
					}
				},
				messages: {
					name: {
						required: "Please enter your name!"
					},
					email: {
						required: "Please enter your email!",
						email: "Please enter a valid email address"
					},
					subject: {
						required: "Please enter the subject!"
					},
					message: {
						required: "Please enter your message!"
					}
				},
					
				// SUBMIT //
				submitHandler: function(form) {
					var result;
					$(form).ajaxSubmit({
						type: "POST",
						data: $(form).serialize(),
						url: "assets/php/send.php",
						success: function(msg) {
							
							if (msg == 'OK') {
								result = '<div class="alert alert-success">Your message was successfully sent!</div>';
								$("#contact-form").clearForm();
							} else {
								result = msg;
							}
							
							$("#alert-area").html(result);
		
						},
						error: function() {
		
							result = '<div class="alert alert-danger">There was an error sending the message!</div>';
							$("#alert-area").html(result);
		
						}
					});
				}
			});
			
		}
		
		
		// MULTILAYER PARALLAX //
		multilayer_parallax();
		
		
		// PARALLAX //
		if (typeof $.fn.stellar !== 'undefined') {
		
			if (!is_touch_device()) {
				
				$(window).stellar({
					horizontalScrolling: false,
					verticalScrolling: true,
					responsive: true
				});
				
			}
		
		}
		
		
		// SHOW/HIDE SCROLL UP
		show_hide_scroll_top();
		
		
		// SCROLL UP //
		scroll_up();
		
		
		// PROGRESS BARS //
		progress_bars();
		
		
		// PIE CHARTS //
		pie_chart();
		
		
		// COUNTER //
		counter();
		
		
		// STATISTICS //
		statistics();
		
		
		// YOUTUBE PLAYER //
		if (typeof $.fn.mb_YTPlayer !== 'undefined') {
			
			$(".youtube-player").mb_YTPlayer();
		
		}
		
		
		// INSTAGRAM FEED //
		instagram_feed();
		
		
		// COUNTDOWN //
		if (typeof $.fn.countdown !== 'undefined') {
			
			$(".nextholiday").countdown('2018/11/06 00:00', function(event) {
				$(this).html(event.strftime(
					// '<div class="count"><strong><h2>Divali</h2></strong><br><h3>%-D Days</h3></div><div class="count"><h3>%-H Hours</h3></div><div class="count"><h3>%-M Minutes</h3></div><div class="count"><h3>%S Seconds</h3></div>' +
					// '<div class="count"><strong><h2>Divali</h2></strong>Tuesday 6th November 2018<br><br><h3>%-D Days<br>%-H Hours<br>%-M Minutes<br>%S Seconds</div>' +
					'<div class="count"><strong><h2>Divali</h2></strong>Tuesday 6th November 2018<br><br><h3>%-D Days</h3><h5>%-Hh : %-Mm : %Ss</h5>' +
					'<br>' +
					''
				));
			});
		
		}
		if (typeof $.fn.countdown !== 'undefined') {
			
			$(".mybirthday").countdown('2019/01/09 00:00', function(event) {
				$(this).html(event.strftime(
					'<div class="count">%-D Days %-H Hours</div><div class="count">%-M Minutes</div><div class="count">%S Seconds</div>' +
					'<br>' +
					''
				));
			});
		
		}
		

		if (typeof $.fn.countdown !== 'undefined') {
			
			$(".mumsbirthday").countdown('2019/03/31 00:00', function(event) {
				$(this).html(event.strftime(
					'<div class="count">%-Dd : %-Hh : %-Mm : %Ss' +
					'<br>' +
					''
				));
			});
		
		}


		// SMOOTH SCROLLING //
		smooth_scrolling();
		
		
		// EQUAL HEIGHT //
		equal_height();
		
		
		// FULL SCREEN //
		full_screen();
		
		
		// ANIMATIONS //
		animations();
		
	});

	
	// WINDOW SCROLL //
	$(window).scroll(function() {
		
		progress_bars();
		pie_chart();
		counter();
		statistics();
		show_hide_scroll_top();
		
	});
	
	
	// WINDOW RESIZE //
	$(window).resize(function() {

		mobile_menu();
		change_logo();
		equal_height();
		full_screen();
		
	});
	
})(window.jQuery);