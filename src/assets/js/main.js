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
	$('#owl-video').owlCarousel({
		// stagePadding: 150,
		center: true,
		loop: true,
		margin: 10,
		nav: true,
		// autoplay:true,
		dots:false,
		navText: [
			'<i class="fas fa-arrow-left"></i>',
			'<i class="fas fa-arrow-right"></i>'
		],
		responsive:{
			0:{
				items: 1,
				dots:true,
				nav: false,
			},
			768:{
				items: 2,

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

	//



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
// text input change to number only

