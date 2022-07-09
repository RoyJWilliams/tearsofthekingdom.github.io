/*
 *
 *		CUSTOM.JS
 *
 */

(function($){
	
	// COUNTDOWN //

		if (typeof $.fn.countdown !== 'undefined') {
			
			$(".countdowntimer").countdown('2022/07/25 06:00', function(event) {
				$(this).html(event.strftime(
					'<div class="count"><h2><strong>Tobago Trip</strong></h2>Monday 25th July 2022<br><br><h1><b>%-D Days</h1></b><h4>%-Hh : %-Mm : %Ss</h4>' +
					''
				));
			});
		
		}
	
})(window.jQuery);
