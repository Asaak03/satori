( function( $ ) {
    /**
     * @param $scope The Widget wrapper element as a jQuery element
     * @param $ The jQuery alias
     */
    var WidgetPieChartHandler = function( $scope, $ ) {
        setTimeout(function(){
            elementorFrontend.waypoint($scope.find('.cms-piecharts'), function () {
                $scope.find(".cms-piecharts .piechart .percentage").each( function() {
                    var track_color = $(this).data('track-color');
                    var bar_color = $(this).data('bar-color');

                    var options = {
                        animate: 1500,
                        scaleLength: 0,
                        lineWidth: 35,
                        trackWidth: 20,
                        barColor: bar_color,
                        trackColor: track_color,
                        scaleColor: false,
                        lineCap: 'square',
                        rotate: 360,
                        size: 220
                    };
                    $(this).easyPieChart(options);
                });
            });
        }, 150);
    };

    // Make sure you run this code under Elementor.
    $( window ).on( 'elementor/frontend/init', function() {
        elementorFrontend.hooks.addAction( 'frontend/element_ready/cms_piecharts.default', WidgetPieChartHandler );
    } );
} )( jQuery );