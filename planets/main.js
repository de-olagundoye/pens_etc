jQuery(document).ready(function(){
  $(window).scroll(function(e){
    parallax();
  });
   
  function parallax(){
    var scrolled = $(window).scrollTop();
    $('#layer-4').css('top',(0-(scrolled*.25))+'px');
    $('#layer-3').css('top',(0-(scrolled*.4))+'px');
    $('#layer-2').css('top',(0-(scrolled*.75))+'px');
    $('#layer-1').css('top',(0-(scrolled*.3))+'px');
  }
 }); 