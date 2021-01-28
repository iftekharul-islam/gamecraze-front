// navbar scroll color change
$(window).scroll(function(){
	$('.gamehub-menu').toggleClass('gamehub-menu-active', $(this).scrollTop() > 50);
});

  

$(document).ready(function() {
	// $('#owl-screenshot-video').owlCarousel({
	// 	loop: true,
	// 	margin: 10,
	// 	nav: true,
	// 	dots:true,
	// 	navText: [
	// 		'<i class="fas fa-arrow-left"></i>',
	// 		'<i class="fas fa-arrow-right"></i>'
	// 	],
	// 	responsive:{
	// 		0:{
	// 			items: 1.3,
	// 			dots:false,
	// 			nav: false,
	// 		},
	// 		600:{
	// 			items: 2,
	// 			dots:true,
	// 			nav: true,

	// 		},
	// 		1000:{
	// 			items: 4
	// 		}
	// 	}
	// });
	//
	// $('#owl-related').owlCarousel({
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
	// 			nav: false,
	// 		},
	// 		600:{
	// 			items: 2,
	// 			nav: true,

	// 		},
	// 		1000:{
	// 			items: 4
	// 		}
	// 	}
	// });

});

function isNumber(evt)
	{
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode == 13 || (charCode >= 48 && charCode <= 57))
    {
        return true;
    }
    return false;
}
// profile number input arrow change and minus value validation

$(document).ready(function(){
  
	// Increment value in quantity input
	
	// $('.rented-plus').each(function(index) {
	//   $(this).click(function(e) {
	// 	e.preventDefault();
	// 	var current = $(this).siblings("input.renten-input").val();
	// 	var currentVal = parseInt($(this).siblings("input.renten-input").val());
	// 	if (!isNaN(currentVal)) {
	// 	  $(this).siblings("input.renten-input").val(currentVal + 1);
	// 	} else {
	// 	  $(this).siblings("input.renten-input").val(0);
	// 	  console.log("Failed!")
	// 	}
	//   });
	// });
	
	// Decrement value in quantity input
	
	// $(".rented-minus").each(function(index) {
	//   $(this).click(function(e) {
	// 	e.preventDefault();
	// 	var currentVal = parseInt($(this).siblings("input.renten-input").val());
	// 	if (!isNaN(currentVal) && currentVal > 0) {
	// 	  $(this).siblings("input.renten-input").val(currentVal - 1);
	// 	} else {
	// 	  $(this).siblings("input.renten-input").val(0);
	// 	}
	//   });
	// });
	  
	  
	});

