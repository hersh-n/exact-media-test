(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {

      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;

    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };

})(jQuery);

$(window).scroll(function(event) {

  $(".img-rounded").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in");
    }
  });

  $(".features").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in");
    }
  });

  $(".step-text").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in-text");
    }
  });

  $(".thumbnail").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in");
    }
  });

});





var targetOffset = $(".bottom_header").offset().top;

var $w = $(window).scroll(function(){
    if ( $w.scrollTop() === targetOffset  ) {
        $('.nav > li > a').css({"color":"white"});
        $(".nav").css('background-color', 'rgba(255,255,255,0');
        $(".nav").css('box-shadow', '0 1px 4px rgba(0,0,0,0)');
    }
});



$(document).ready(function(){
   var scroll_start = 0;
   var startchange = $('.content');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".nav > li > a").css('color', 'black');
          $(".nav").css('background-color', 'white');
          $(".nav").css('box-shadow', '0 1px 4px rgba(0,0,0,0.2)');
          $(".icon-bar").css('background-color', 'rgba(0,0,0,1)');
          $(".nav > li > a").mouseover().css('border-color', 'black');
       } else {
          $('.nav > li > a').css('color', 'rgba(255,255,255,0.5');
          $(".nav").css('background-color', 'rgba(255,255,255,0');
          $(".nav").css('box-shadow', '0 1px 4px rgba(0,0,0,0)');
          $(".icon-bar").css('background-color', 'rgba(255,255,255,1)');
          $(".nav > li > a").mouseover().css('border-color', 'rgba(255,255,255,0.5');
       }
   });
    }
});


window.onbeforeunload = function(){
  window.scrollTo(0,0);
}

if ( $(window).width() > 767 && $(window).width() < 992) {

  $(".step-center").addClass('.text-center')

};

$(window).on('scroll', function () {
  scrollTop = $(this).scrollTop();

  headerCalc = 1 - (scrollTop / 500)
  subHeaderCalc = 0.7 - (scrollTop / 1000)
  $('.jumbotron > h1').css('opacity', headerCalc)
  $('.jumbotron > p').css('opacity', headerCalc)
  $('.jumbotron > h2').css('opacity', subHeaderCalc)

  if (headerCalc < 0){
    $('.jumbotron > h1').css('opacity', 0)
    $('.jumbotron > p').css('opacity', 0)
  }

  if (subHeaderCalc < 0){
    $('.jumbotron > h2').css('opacity', 0)
  }


});


$(document).ready(function(){
$(".btn").click(function(){
        $(".list-item").modal('show');
    });
});




// $('#myModal').on('shown.bs.modal', function () {
//   $('#myInput').focus()
// })