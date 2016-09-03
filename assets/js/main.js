jQuery(document).ready(function($) {
    "use strict";
    watch($('.pace-progress'), 'width', function() {
        if (this.style.width > 99 + '%') {
            Pace.stop();
        };
    });
        /* ---------------------------------------------------------------------- */
    /* ---------------------- SWITCHER -------------------------------------- */
    /* ---------------------------------------------------------------------- */

    jQuery('#switch-panel').click(function() {
        if (jQuery(this).hasClass('show-panel')) {
            jQuery('.switcher').css({
                'left': '-40px'
            });
            jQuery('#switch-panel').removeClass('show-panel');
            jQuery('#switch-panel').addClass('hide-panel');
        } else if (jQuery(this).hasClass('hide-panel')) {
            jQuery('.switcher').css({
                'left': 0
            });
            jQuery('#switch-panel').removeClass('hide-panel');
            jQuery('#switch-panel').addClass('show-panel');
        }
    });
    jQuery('#switch-panel-responsive').click(function() {
        if (jQuery(this).hasClass('show-panel')) {
            jQuery('.switcher-responsive').css({
                'right': '-40px'
            });
            jQuery('#switch-panel-responsive').removeClass('show-panel');
            jQuery('#switch-panel-resposnive').addClass('hide-panel');
        } else if (jQuery(this).hasClass('hide-panel')) {
            jQuery('.switcher-responsive').css({
                'right': 0
            });
            jQuery('#switch-panel-resposnive').removeClass('hide-panel');
            jQuery('#switch-panel-responsive').addClass('show-panel');
        }
    });

    $('.brown').click(function() {
        $('#csscolors').attr('href', 'css/colors/brown.css'); //THE STYLE SHEETS WITH THEIR PATHS
    });


    /* ---------------------------------------------------------------------- */
    /* --------------------------NEWS / RECENT ACTIVITY  -------------------- */
    /* ---------------------------------------------------------------------- */
    $("#marquee").marquee();

    /* ---------------------------------------------------------------------- */
    /* --------------------- SCROLL REINITIALISATION ------------------------ */
    /* ---------------------------------------------------------------------- */

    jQuery('.jspPane').bind('resize', function(e) {
        var pane = $('div.hs-content-wrapper > article')
        pane.jScrollPane({
            verticalGutter: 0,
            hideFocus: false,
            contentWidth: '0px'
        });
        var api = pane.data('jsp');
        api.reinitialise();

    });
    /* ---------------------------------------------------------------------- */
    /* --------------------- ABOUT SECTION TOGGLE CARD ---------------------- */
    /* ---------------------------------------------------------------------- */
    var menu_trigger = $("[data-card-front]");
    var back_trigger = $("[data-card-back]");

    menu_trigger.on('click', function() {
        $(".about-card").toggleClass("show-menu");
    });

    back_trigger.on('click', function() {
        $(".about-card").toggleClass("show-menu");
    });

    /* ---------------------------------------------------------------------- */
    /* --------------------------- RESPONSIVE SIDEBAR ----------------------- */
    /* ---------------------------------------------------------------------- */
    var content = $('.hs-menu nav').contents();
    $('#my-panel').jScrollPane();
    $(window).bind("load resize", function() {
        if ($(window).width() <= 755) {
            $('#my-link').panelslider({
                side: 'left',
                clickClose: false,
                duration: 200
            });
            content.appendTo('#my-panel');
        } else {
            $.panelslider.close();
            content.appendTo('.hs-menu nav');
        }
        jQuery('.jspPane').bind('resize', function(e) {
            var pane = $('div.hs-content-wrapper > article')
            pane.jScrollPane({
                verticalGutter: 0,
                hideFocus: false,
                contentWidth: '0px'
            });
            var api = pane.data('jsp');
            api.reinitialise();
        });
    });
    /* ---------------------------------------------------------------------- */
    /* ---------------------- NAVIGUATION ARROW KEYBOARD -------------------- */
    /* ---------------------------------------------------------------------- */
    $("body").on('keydown', function(e) {
        if (e.keyCode == 37) { // left
            $(".previous-page").click();
        } else if (e.keyCode == 39) { // right
            $(".next-page").click();;
        }
    });


    /* ---------------------------------------------------------------------- */
    /* ---------------------- FIX OLD SAFARI BUGS  -------------------------- */
    /* ---------------------------------------------------------------------- */
    if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
        var oldsldrwidth = $('.research-section .slider-details').width();
        $('.research-section .slider-details').width(oldsldrwidth - 100);
        $(window).bind("load resize", function() {
            if ($(window).width() > 755) {

                var heightdoc = $(document).height();
                $('.hs-content-wrapper').height(heightdoc - 47);
                var heightwrp = $('.hs-content-wrapper').height();
                $('.hs-content').height(heightwrp - 22);
                var pane = $('div.hs-content-wrapper > article')
                pane.jScrollPane({
                    verticalGutter: 0,
                    hideFocus: false,
                    contentWidth: '0px'
                });
                var api = pane.data('jsp');
                api.reinitialise();
            } else {
                $('.hs-content-wrapper').css('height', 'auto');

            }
        });

    }

});
