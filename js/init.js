


(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

 $('.carousel.carousel-slider').carousel({fullWidth: true});
 anime.timeline({loop: true})
   .add({
     targets: '.ml15 .word',
     scale: [14,1],
     opacity: [0,1],
     easing: "easeOutCirc",
     duration: 800,
     delay: function(el, i) {
       return 800 * i;
     }
   }).add({
     targets: '.ml15',
     opacity: 0,
     duration: 1000,
     easing: "easeOutExpo",
     delay: 1000
   });

//For the slideshow

$(document).ready(function(){
     $('.carousel').carousel();
   });
   // Next slide
   $('.carousel').carousel('next');
   $('.carousel').carousel('next', 3); // Move next n times.

   // Previous slide
   $('.carousel').carousel('prev');
   $('.carousel').carousel('prev', 4); // Move prev n times.

   // Set to nth slide
   $('.carousel').carousel('set', 4);

   // Destroy carousel
   $('.carousel').carousel('destroy');
