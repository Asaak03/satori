( function( $ ) {
    /**
     * @param $scope The Widget wrapper element as a jQuery element
     * @param $ The jQuery alias
     */
    var WidgetCMSItemCarouselHandler = function( $scope, $ ) {
        var breakpoints = elementorFrontend.config.breakpoints;
        var carousel = $scope.find(".cms-slick-carousel");
        var data = carousel.data();
        var slider_nav = $scope.find('.cms-slick-nav');
        if (slider_nav.length === 0) {
            slider_nav = false;
        }
        if (typeof data != 'undefined'){
            var slickOptions = {
                slidesToShow: data.slidestoshow,
                slidesToScroll: data.slidestoscroll,
                autoplay: true === data.autoplay,
                autoplaySpeed: data.autoplayspeed,
                infinite: true === data.infinite,
                pauseOnHover: true === data.pauseonhover,
                speed: data.speed,
                arrows: true === data.arrows,
                dots: true === data.dots,
                asNavFor: slider_nav,
                responsive: [{
                    breakpoint: breakpoints.lg,
                    settings: {
                        slidesToShow: data.slidestoshowtablet,
                        slidesToScroll: data.slidestoscrolltablet,
                    }
                }, {
                    breakpoint: breakpoints.md,
                    settings: {
                        slidesToShow: data.slidestoshowmobile,
                        slidesToScroll: data.slidestoscrollmobile,
                    }
                }]
            };
            carousel.slick(slickOptions);
            if(typeof carousel.attr('data-centerMode') !== 'undefined') {
                slickOptions.centerMode = carousel.attr('data-centerMode') == 'true' ? true : false;
            }
            var nav_for = $scope.find(".cms-slick-nav");
            if(nav_for.length > 0){
                slickOptions.asNavFor = nav_for;
            }

            $('.cms-slick-nav-arrow').parents('.elementor-element').addClass('hide-nav');

            $('.cms-slick-nav-left').on('click', function () {
                $(this).parents('.elementor-element').find('.cms-slick-slider .slick-prev').trigger('click');
            });
            $('.cms-slick-nav-right').on('click', function () {
                $(this).parents('.elementor-element').find('.cms-slick-slider .slick-next').trigger('click');
            });
        }

    };
    $('.cms-slick-slider').each(function () {
        var slider_main = $(this).find('.cms-slick-carousel');
        var slider_nav = $(this).find('.cms-slick-nav');

        $(slider_nav).slick({
            slidesToShow: parseInt(slider_nav.attr('data-nav')),
            slidesToScroll: 1,
            asNavFor: slider_main,
            dots: false,
            centerMode: false,
            focusOnSelect: true,
            infinite: false,
            nextArrow: '<span class="slick-next fac fac-arrow-right"></span>',
            prevArrow: '<span class="slick-prev fac fac-arrow-left"></span>',
            arrows:true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        infinite: true,
                    }
                }
            ]
        });
    });

    // Make sure you run this code under Elementor.
    $( window ).on( 'elementor/frontend/init', function() {
        elementorFrontend.hooks.addAction( 'frontend/element_ready/cms_testimonial_carousel.default', WidgetCMSItemCarouselHandler );
    } );
} )( jQuery );