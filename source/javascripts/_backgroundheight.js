function resizeBackground(){
  setTimeout(function(){
    var docH = $(document).height();
    var docW = $(document).width();
    $('#background-fix').css({'width':docW,'height':docH});
  }, 500);
}


$(function(){
  resizeBackground();
});

$(window).resize(function(){
  resizeBackground();
});