// JavaScript Document

//Banner Carousel
var bs = $('#banner-carousel');
bs.owlCarousel({
	autoplay:true,
	//autoplayTimeout:1000,
	//autoplaySpeed:700,
    loop:true,
    nav:true,
	dots:true,
	//animateOut: 'fadeOut',
    items: 1,
	navText: [ '<i class="ion-ios-arrow-left"></i>', '<i class="ion-ios-arrow-right"></i>' ],	
});


//Events Carousel
var es = $('#events-carousel');
es.owlCarousel({
	autoplay:true,
	//autoplayTimeout:1000,
	//autoplaySpeed:700,
    loop:true,
    nav:true,
	dots:true,
	//animateOut: 'fadeOut',
    items: 1,
	navText: [ '<i class="ion-ios-arrow-left"></i>', '<i class="ion-ios-arrow-right"></i>' ],	
});