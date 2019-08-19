$(document).ready(function() {


	(function ($) {
		$('.tabin ul.tabsin').addClass('active').find('> li:eq(0)').addClass('current');

		$('.tabin ul.tabsin li a').click(function (g) {
			var tab = $(this).closest('.tabin'),
				index = $(this).closest('li').index();

			tab.find('ul.tabsin > li').removeClass('current');
			$(this).closest('li').addClass('current');

			tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
			tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();

			g.preventDefault();
		} );
	})(jQuery);

});

var swiper = new Swiper('.swiper_desktop', {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-paginationn',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    var swiper = new Swiper('.swiper_mobile', {
     effect: 'flip',
     grabCursor: true,
     pagination: {
       el: '.swiper-paginationn',
     },
     navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
     },
   });

   
