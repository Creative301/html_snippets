$(function () {
  // Detect browser width
  var $window = $(window);
  var nav = $("nav");

  function checkWidth() {
    var windowSize = $window.width();
    if (windowSize < 768) {
      nav.addClass("sticky");
    } else {
      nav.removeClass("sticky");
    }
  }
  // Execute on load
  checkWidth();
  // Bind event listener
  $(window).resize(checkWidth);


  // Dropdown menu

    $('a.mobile_menu').on('click', function () {
      var currentNavHeight = $('nav.sticky').height();

      if (currentNavHeight < 10) {
        var newNavHeight = $('nav.sticky ul').height();
        $('nav.sticky').animate({
          'height': newNavHeight + 'px'
        }, 300);
      } else {
        $('nav.sticky').animate({
          'height': '0px'
        }, 300, function () {
          $(this).removeAttr('style');
        });
      }
    });





});