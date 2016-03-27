jQuery(document).ready(function(){
  $(window).scroll(function(e){
    parallax();
  });
   
  function parallax(){
    var scrolled = $(window).scrollTop();
    $('#image-backgrounds').css('top',(0-(scrolled*.6))+'px');
    $('#content-header').css('top',(0-(scrolled*.5))+'px');
    $('#content-text').css('top',(0-(scrolled*.4))+'px');
  }
 }); 