/*=====================
    testimnial
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