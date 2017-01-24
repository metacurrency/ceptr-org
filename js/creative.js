/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Initialize and Configure Scroll Reveal Animation
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);

    // Fit Text Plugin for Main Header
    $("h1.home-heading,#header h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    });

    // Move toc
    var toc = document.getElementById('toc');
    if (toc) {
        var hook = document.getElementById('toc-hook');
        if (hook) {
            hook.appendChild(toc);
            $(toc).show();
        }
    }

    moveScroller();


})(jQuery); // End of use strict

function moveScroller() {
    var move = function() {
        var st = $(window).scrollTop();
        var sa = $(".scroller-anchor");
        if (sa.length > 0) {
            var purpose = $(".purpose");
            var pl = $(".project-links");
            if (purpose.length > 0 && pl.length > 0) {
                var pl_rect = pl.offset();
                var p_rect = purpose.offset();
                console.log(pl.length);

                var ot = sa.offset().top;

                var s = $(".scroller");
                if(st > ot && (pl_rect.left> purpose.width()+p_rect.left)) {
                    s.css({
                        position: "fixed",
                        top: "70px",
                        left: pl_rect.left+"px"
                    });
                } else {
                    if(st <= ot) {
                        s.css({
                            position: "relative",
                            top: "",
                                left: ""
                        });
                    }
                }
            }
        }
    };
    $(window).scroll(move);
    move();
}
