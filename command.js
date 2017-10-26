//<![CDATA[
(function($) {
"use strict";
$(document).ready(function() {
$('.your-class-here').owlCarousel({
                  autoPlay: true,
                  stopOnHover:true, //mouse hover Stop
                  slideSpeed: 300,
                  navigation: true,
                  pagination: false,
                  items: 3,
                  loop:true,
                  itemsCustom: [
                      [0, 1],
                      [500, 2],
                      [992, 3],
                      [1200, 3],
                      [1400, 4]
                  ],
                  navigationText: ['<i class="fa fa-arrow-left fa-2x"></i>','<i class="fa fa-arrow-right fa-2x"></i>'],
});
})
})(jQuery);
//]]>
