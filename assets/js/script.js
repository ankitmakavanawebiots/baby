/*=====================
  01.Slick slider
 ==========================*/
  $('.slide-3').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
          {
              breakpoint: 1100,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
              }
          },
          {
              breakpoint:768,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
              }
          },
      ]
  });
  


/*=====================
  02. Image to background js
==========================*/
  $(".bg-top" ).parent().addClass('b-top');
  $(".bg-bottom" ).parent().addClass('b-bottom');
  $(".bg-center" ).parent().addClass('b-center');
  $(".bg_size_content").parent().addClass('b_size_content');
  $(".bg-img" ).parent().addClass('bg-size');
  jQuery('.bg-img').each(function() {

      var el = $(this),
          src = el.attr('src'),
          parent = el.parent();

      parent.css({
          'background-image': 'url(' + src + ')',            
          'display' : 'block',
          'background-repeat': 'no-repeat'
      });

      el.hide();
  });



/*=====================
    03. advisory-box
==========================*/
$('.advisory-box .advisory-detail .hover-contain').slideUp("");
$('.advisory-box').on('click', function(e) {
    $(this).children().children('.advisory-detail').children('.hover-contain').slideToggle("");

});


/*==============
   04. our team
================*/
$( ".front" ).hover(function() {
    $(this).addClass("hover")
    $(this).siblings('.back').addClass("hover");
});

$(".back" ).mouseout(function() {
    $(this).removeClass("hover")
    $(this).siblings('.front').removeClass("hover");
});

$(".back" ).click(function() {
    $(this).removeClass("hover");
    $(this).siblings('.front').removeClass("hover");
});








