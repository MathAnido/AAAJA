$(document).foundation();

$(function() {
    $(window).scroll(function() {
      var winTop = $(window).scrollTop();
      if (winTop >= 30) {
        $("body").addClass("sticky-shrinknav-wrapper");
      } else{
        $("body").removeClass("sticky-shrinknav-wrapper");
      }
    });
});

$(document).mouseup(function (e) {
  var container = $('#contact-panel');
  if (!container.is(e.target) && container.has(e.target).length === 0){
      container.removeClass('is-active');
}
});
  
  
