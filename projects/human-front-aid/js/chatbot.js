
$(function(){
  $('<div>', { id: 'toTop', class: 'About-Us-Diego-Pardo-button-buton' }).appendTo('body');
  
  $(window).scroll(function () {
    if ($(this).scrollTop() != 0) {
      $( "#toTop" ).fadeIn( "slow", function() {
        $('#toTop').fadeOut(5000);
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