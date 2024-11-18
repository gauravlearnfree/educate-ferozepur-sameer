
  (function ($) {
  
  "use strict";

    // COUNTER NUMBERS
    jQuery('.counter-thumb').appear(function() {
      jQuery('.counter-number').countTo();
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
    var el = $(this).attr('href');
    var elWrapped = $(el);
    var header_height = $('.navbar').height();

    scrollToDiv(elWrapped,header_height);
    return false;

    function scrollToDiv(element,navheight){
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop-navheight;

      $('body,html').animate({
      scrollTop: totalScroll
      }, 300);
    }
});
    
  })(window.jQuery);
  
$(document).ready(function() {
	//$("div#eapps-linkedin-feed-d9ca04de-e6a9-4c22-840b-f01d9999088c a[href*='elfsight.com']").hide();
	//$("div#eapps-instagram-feed-1 a[href*='elfsight.com']").hide();
	setTimeout(function(){
		$("div#eapps-linkedin-feed-d9ca04de-e6a9-4c22-840b-f01d9999088c a[href*='elfsight.com']").hide();
		$("div#eapps-instagram-feed-1 a[href*='elfsight.com']").hide();
    }, 3000);
});



