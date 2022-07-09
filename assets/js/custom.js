/*
 *
 *		CUSTOM.JS
 *
 */

(function($){
	
	// COUNTDOWN //

		if (typeof $.fn.countdown !== 'undefined') {
			
			$(".countdowntimer").countdown('2023/02/18 07:21', function(event) {
				$(this).html(event.strftime(
					'<div class="count"><h2><strong>Emma&apos;s Birthday</strong></h2>Saturday 18th February 2023<br><br><h1><b>%-D Days</h1></b><h4>%-Hh : %-Mm : %Ss</h4>' +
					''
				));
			});
		
		}
	
})(window.jQuery);