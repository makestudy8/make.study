$(document).ready(function(){
 $(".anchor").on("click","a.anchorA", function (event) {
   event.preventDefault();
   var id  = $(this).attr('href'),
   top = $(id).offset().top - 50 + 'px';
   $('body,html').animate({scrollTop: top}, 700);

 });
  $('#menu a').click(function() {
    $('#menuToggle input').click();
 });
});
