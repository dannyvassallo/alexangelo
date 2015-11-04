function resizeBackground(){
  var docH = $(document).height();
  var docW = $(document).width();
  $('#background-fix').css({'width':docW,'height':docH});
}


$(function(){
  resizeBackground();
});

$(window).resize(function(){
  resizeBackground();
});