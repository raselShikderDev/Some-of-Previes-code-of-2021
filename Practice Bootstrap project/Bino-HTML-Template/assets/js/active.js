$(document).ready(function(){


      // Scroll Stikey Function 
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 50) {
                $('.header-fix').addClass("active");
            }
            else {
                $('.header-fix').removeClass("active");
            }
        });


        $(".mobile-triger-btn ").on('click', function(){
            $(".mobile-menu, .menu-overlay").addClass("active")
        });

        $(".menu-overlay, .menu-close").on('click', function(){
            $(".mobile-menu, .menu-overlay").removeClass("active")
        });

        var heroSlider = $('.banar-slider');
            heroSlider.owlCarousel({
    			items:1,
    			loop:true,
    			nav:true,
    			navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
    			dots:false,
    			autoplay:false,
    			autoplayTimeout:5000,
    			smartSpeed:1000,
            });

            heroSlider.on("changed.owl.carousel", function(event){
                // selecting the current active item
                var item = event.item.index-2;
                // first removing animation for all captions
                $('.banar-title').removeClass('animated fadeInLeft delay-1s');
                $('.owl-item').not('.cloned').eq(item).find('.banar-title').addClass('animated fadeInLeft delay-1s');

                $('.banar-btn').removeClass('animated fadeInRight delay-1s');
                $('.owl-item').not('.cloned').eq(item).find('.banar-btn').addClass('animated fadeInRight delay-1s');

                $('.banar-text').removeClass('animated fadeInDown delay-1s');
                $('.owl-item').not('.cloned').eq(item).find('.banar-text').addClass('animated fadeInDown delay-1s');
        })


    $(".slide-service-area").owlCarousel({
        items:1,
        loop:true,
        mouseDrag:true,
        navText:false,
        autoplay:false,
        autoplayTimeout:5000,
        smartSpeed:1000,
        // animateOut: 'slideOutDown',
        // animateIn: 'flipInX',
        dots:true,
    });


    $(".case-content-slide").owlCarousel({
        items:1,
        loop:true,
        mouseDrag:true,
        center:true,
        navText:false,
        autoplay:false,
        autoplayTimeout:5000,
        smartSpeed:1000,
        // animateOut: 'slideOutDown',
        // animateIn: 'flipInX',
        dots:true,
    });


    $('.counter').counterUp({
        delay: 10,
        time: 10000
    });


 // Animation WOW
		new WOW().init();
		
        //   wow = new WOW(
        //   {
        //   boxClass:     'wow',      // default
        //   animateClass: 'animated', // default
        //   offset:       0,          // default
        //   mobile:       true,       // default
        //   live:         true        // default

        // }
        // )
        // wow.init();


    var mixer = mixitup('.mixed-it-up');





});