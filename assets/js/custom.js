/*
 *
 *		CUSTOM.JS
 *
 */

(function($){
	
	// COUNTDOWN //

		if (typeof $.fn.countdown !== 'undefined') {
			
			$(".countdowntimer").countdown('2023/05/12 06:00', function(event) {
				$(this).html(event.strftime(
					'<div class="count"><h2><strong>Legend of Zelda<br>Tears of the Kingdom</strong></h2>Friday 12th May 2023<br><br><h1><b>%-D Days</h1></b><h4>%-Hh : %-Mm : %Ss</h4>' +
					''
				));
			});
		
		}
	
})(window.jQuery);
