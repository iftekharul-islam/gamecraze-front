// navbar scroll color change
$(window).scroll(function(){
	$('.gamehub-menu').toggleClass('gamehub-menu-active', $(this).scrollTop() > 50);
});

$(function () {
	//toggle class open on button
	$("#navbarSupportedContent").on("hide.bs.collapse", function () {
	  $(".custom-toggler").removeClass("open");
	});
	$("#navbarSupportedContent").on("show.bs.collapse", function () {
	  $(".custom-toggler").addClass("open");
	});
  });
  

$(document).ready(function() {
	
	// $('#owl-trending').owlCarousel({
	// 	stagePadding: 150,
	// 	loop: true,
	// 	margin: 10,
	// 	nav: true,
	// 	dots:false,
	// 	navText: [
	// 		'<i class="fas fa-arrow-left"></i>',
	// 		'<i class="fas fa-arrow-right"></i>'
	// 	],
	// 	responsive:{
	// 		0:{
	// 			items: 1.3,
	// 			stagePadding: 0,
	// 			dots:true,
	// 			nav: false,
	// 		},
	// 		590:{
	// 			stagePadding: 0,
	// 			items: 2,
	// 			dots:false,
	// 			nav: true,
	// 		},
	// 		900:{
	// 			items: 2,
	// 			stagePadding: 150,
	// 		},
	// 		1200:{
	// 			items: 3,
	// 		},
	// 		1500:{
	// 			items: 4
	// 		}
	// 	}
	// });
	// 
	// $('#owl-favorite').owlCarousel({
    //     stagePadding: 150,
	// 	loop: true,
	// 	margin: 10,
	// 	nav: true,
	// 	dots:false,
	// 	navText: [
	// 		'<i class="fas fa-arrow-left"></i>',
	// 		'<i class="fas fa-arrow-right"></i>'
	// 	],
	// 	responsive:{
	// 		0:{
	// 			items: 3,
	// 			stagePadding: 0,
	// 			dots:true,
	// 			nav: false,
	// 			center: true,
	// 		},
	// 		600:{
	// 			items: 3,
	// 			stagePadding: 0,
	// 			center: false,
	// 			dots:false,
	// 			nav: true,
	// 		},
	// 		800:{
	// 			items: 3,
	// 			stagePadding: 100,
	// 		},
	// 		1200:{
	// 			items: 3,
	// 			stagePadding: 150,
	// 		},
	// 		1500:{
	// 			items: 4,
	// 		},
	// 		1800:{
	// 			items: 5
	// 		}
	// 	}
	// });
	//
	// $('#owl-upcoming').owlCarousel({
	// 	stagePadding: 150,
	// 	loop: true,
	// 	margin: 10,
	// 	nav: true,
	// 	dots:false,
	// 	navText: [
	// 		'<i class="fas fa-arrow-left"></i>',
	// 		'<i class="fas fa-arrow-right"></i>'
	// 	],
	// 	responsive:{
	// 		0:{
	// 			items: 1.3,
	// 			stagePadding: 0,
	// 			dots:true,
	// 			nav: false,
	// 		},
	// 		590:{
	// 			stagePadding: 0,
	// 			items: 2,
	// 			dots:false,
	// 			nav: true,
	// 		},
	// 		900:{
	// 			items: 2,
	// 			stagePadding: 150,
	// 		},
	// 		1200:{
	// 			items: 3,
	// 		},
	// 		1500:{
	// 			items: 4
	// 		}
	// 	}
	// });
	//
	$('#owl-video').owlCarousel({
		// stagePadding: 150,
		center: true,
		loop: true,
		margin: 10,
		nav: false,
		// autoplay:true,
		dots:false,
		responsive:{
			0:{
				items: 1,
				dots:true,
				nav: false,
			},
			600:{
				items: 2,

			},
			1000:{
				items: 2
			}
		}
	});
	// 
	$('#owl-screenshot-video').owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		dots:true,
		navText: [
			'<i class="fas fa-arrow-left"></i>',
			'<i class="fas fa-arrow-right"></i>'
		],
		responsive:{
			0:{
				items: 1.3,
				dots:false,
				nav: false,
			},
			600:{
				items: 2,
				dots:true,
				nav: true,

			},
			1000:{
				items: 4
			}
		}
	});
	//
	$('#owl-related').owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		dots:false,
		navText: [
			'<i class="fas fa-arrow-left"></i>',
			'<i class="fas fa-arrow-right"></i>'
		],
		responsive:{
			0:{
				items: 1.3,
				nav: false,
			},
			600:{
				items: 2,
				nav: true,

			},
			1000:{
				items: 4
			}
		}
	});

});