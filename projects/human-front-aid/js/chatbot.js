
$(document).ready(function(){
      $('body').append('<div id="toTop" class="About-Us-Diego-Pardo-button-buton"></div>');
    	
      $(window).scroll(function () {
			if ($(this).scrollTop() != 0) {
    $( "#toTop" ).fadeIn( "slow", function() {
  
    $('#toTop').fadeOut(7000);
  });
			} else {
				$('#toTop').fadeIn();
			}
			
		});
    $('#toTop').click(function(){
        $("html, body").animate({ scrollTop: 0 },600);
        return false;
    });
});


