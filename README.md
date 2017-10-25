# OwlCarousel
Solution // How to slider autoplay start and stop on mousehover and mouseleave?


1-Load jQuery and include Owl Carousel plugin files
To use Owl Carousel, you’ll need to make sure both the Owl and jQuery v1.7 or higher scripts are included.
I have succeeded with version v1.3.3

2. Set up your HTML

2-Call the plugin
call the Owl initializer function and your carousel
Add to command only condition : //mouse hover Stop

$(".owl-carousel").owlCarousel({

  stopOnHover:true, //mouse hover Stop
  
})
