/*=====================
  01.Slick slider
 ==========================*/
  $('.slide-3').slick({
      dots: false,
      infinite: true,
      speed: 300,
      fade:true,
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
              breakpoint:600,
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