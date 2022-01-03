;(function($){
    "use strict"


    var nav_offset_top = $('header').height() + 50; 
/*-------------------------------------------------------------------------------
Navbar 
-------------------------------------------------------------------------------*/

//* Navbar Fixed  
function navbarFixed(){
    if ( $('.header_area').length ){ 
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();   
            if (scroll >= nav_offset_top ) {
                $(".header_area").addClass("navbar_fixed");
            } else {
                $(".header_area").removeClass("navbar_fixed");
            }
        });
    };
};
navbarFixed();

/*-==================================================== */


//-------------------//
	// Go To Trial
	var clickMenu = function() {

		$('#txt_trial a:not([class="external"])').click(function(event){
			var section = $(this).data('nav-section'),
				navbar = $('#txt_trial');

				if ( $('[data-section="' + section + '"]').length ) {
			    	$('html, body').animate({
			        	scrollTop: $('[data-section="' + section + '"]').offset().top - 70
			    	}, 500);
			   }

		    if ( navbar.is(':visible')) {
		    	navbar.removeClass('in');
		    	navbar.attr('aria-expanded', 'false');
		    	$('.js-fh5co-nav-toggle').removeClass('active');
		    }

		    event.preventDefault();
		    return false;
		});

	};
    clickMenu();

 //---------------------//
 
    
 //---------------------//
     // Go To Trial - FAQ
     
	var clickMenu = function() {

		$('#gototrial a:not([class="external"])').click(function(event){
			var section = $(this).data('nav-section'),
				navbar = $('#gototrial');

				if ( $('[data-section="' + section + '"]').length ) {
			    	$('html, body').animate({
			        	scrollTop: $('[data-section="' + section + '"]').offset().top - 70
			    	}, 500);
			   }

		    if ( navbar.is(':visible')) {
		    	navbar.removeClass('in');
		    	navbar.attr('aria-expanded', 'false');
		    	$('.js-fh5co-nav-toggle').removeClass('active');
		    }

		    event.preventDefault();
		    return false;
		});

	};
    clickMenu();
    
    //---------------------//


	// Reflect scrolling in navigation
	var navActive = function(section) {

		var $el = $('#gototrial > ul');
		$el.find('li').removeClass('active');
		$el.each(function(){
			$(this).find('a[data-nav-section="'+section+'"]').closest('li').addClass('active');
		});

	};
    navActive();
    



	// Page Nav
	var clickMenu = function() {

		$('#navbarSupportedContent a:not([class="external"])').click(function(event){
			var section = $(this).data('nav-section'),
				navbar = $('#navbarSupportedContent');

				if ( $('[data-section="' + section + '"]').length ) {
			    	$('html, body').animate({
			        	scrollTop: $('[data-section="' + section + '"]').offset().top - 70
			    	}, 500);
			   }

		    if ( navbar.is(':visible')) {
		    	navbar.removeClass('in');
		    	navbar.attr('aria-expanded', 'false');
		    	$('.js-fh5co-nav-toggle').removeClass('active');
		    }


		});

	};
	clickMenu();

	// Reflect scrolling in navigation
	var navActive = function(section) {

		var $el = $('#navbarSupportedContent > ul');
		$el.find('li').removeClass('active');
		$el.each(function(){
			$(this).find('a[data-nav-section="'+section+'"]').closest('li').addClass('active');
		});

	};
	navActive();

	var navigationSection = function() {

		var $section = $('section[data-section]');
		
		$section.waypoint(function(direction) {
		  	
		  	if (direction === 'down') {
		    	navActive($(this.element).data('section'));
		  	}
		}, {
	  		offset: '150px'
		});

		$section.waypoint(function(direction) {
		  	if (direction === 'up') {
		    	navActive($(this.element).data('section'));
		  	}
		}, {
		  	offset: function() { return -$(this.element).height() + 155; }
		});

	};
	navigationSection();
	








if(document.getElementById("number-section")){
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
}


//------- Owl Carusel  js --------//




$(document).ready(function() {

    $('.active-testimonial-carusel').owlCarousel({
        items: 2,
        loop: true,
        margin: 30,
        autoplayHoverPause: true,
        smartSpeed:500,
        dots: true,
// autoplay: true,
responsive: {
    0: {
        items: 1
    },
    480: {
        items: 1,
    },
    992: {
        items: 2,
    }
}
});



      /*-------------------------------------------------------------------------------
    Brand Slider 
    -------------------------------------------------------------------------------*/
    $(".brand-carousel").owlCarousel({
        items: 1,
        autoplay:false,
        loop:true,
        nav:false,
        margin: 30,
        dots:false,
        responsive: {
            0: {
                items: 1,
            },
            420: {
                items: 1,
            },
            480: {
                items: 3,
            },
            768: {
                items: 3,
            },
            992: {
                items: 5,
            }
        }
      });


});




//------- mailchimp --------//  
function mailChimp() {
    $('#mc_embed_signup').find('form').ajaxChimp();
}
mailChimp();

//-------- Counter js --------//
$(window).on("load", function() {


    $('.portfolio-filter ul li').on('click', function () {
        $('.portfolio-filter ul li').removeClass('active');
        $(this).addClass('active');

        var data = $(this).attr('data-filter');
        $workGrid.isotope({
            filter: data
        });
    });

    if (document.getElementById('portfolio')) {
        var $workGrid = $('.portfolio-grid').isotope({
            itemSelector: '.all',
            percentPosition: true,
            masonry: {
                columnWidth: '.grid-sizer'
            }
        });
    }
});


})(jQuery)






	
