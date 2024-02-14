$(document).ready(function () {
    $(".title").click(function () {
      $(".container").addClass("open");
    });
  
    $(".close").click(function () {
      $(".container").removeClass("open");
    });
  });
  
  $(document).ready(function () {
    $('.container').mouseenter(function () {
        $('.card').stop().animate({
            top: '-90px'
        }, 'slow');
    }).mouseleave(function () {
        $('.card').stop().animate({
            top: 0
        }, 'slow');
    });
});