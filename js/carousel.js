$(".slider").slick({

  // normal options...
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  loop: true,  
  // the magic
  responsive: [{

      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        infinite: true
      }

    }, {

      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        dots: true
      }

    }, {

      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        dots: true
      }

      }, {

      breakpoint: 280,
      settings: "unslick" // destroys slick

    }]
  });