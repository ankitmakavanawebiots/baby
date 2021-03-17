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



/*=====================
    03. advisory-box
==========================*/

$('.owl-carousel').owlCarousel({
    // margin:40,
    loop:true,
    // autoWidth:true,
    items:3.3,
    dots: false,
    nav : true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        320:{
            items:1
        },
        768:{
            items:1.3
        },
        805:{
            items:1.5
        },
        900:{
            items:1.7
        },
        970:{
            items:2
        },
        992:{
            items:1.8
        },
        1150:{
            items:2.3
        },
        1300:{
            items:2.5
        },
        1470:{
            items:2.8
        },
        1530:{
            items:3
        },
        1650:{
            items:3.3
        }
    }
})

