
$(function () {

    var css = document.createElement("link");
    css.setAttribute("rel", "stylesheet");
    css.setAttribute("type", "text/css");
    css.setAttribute("href", "https://cdn.jsdelivr.net/gh/mao172/uixds@1045190420f076f544ac32e2c11567b29fdc22a9/style2.css");
    document.getElementsByTagName("head")[0].appendChild(css);

    var css2 = document.createElement("link");
    css2.setAttribute("rel", "stylesheet");
    css2.setAttribute("type", "text/css");
    css2.setAttribute("href", "https://cdn.jsdelivr.net/gh/mao172/uixds@749bae1b797f73e64d879121c68fdffa76d0fe67/wp-append.css");
    document.getElementsByTagName("head")[0].appendChild(css2);
});

jQuery(function () {

    (function ($) {

        $(window).on("load", function () {
            $('.splash').css('display', 'none');
        });


        $("a[href='#top']").click(function () {
            $("html, body").animate({ scrollTop: 0 }, "slow");
            return false;
        });


        // init controller
        let controller = new ScrollMagic.Controller({
            globalSceneOptions: {
                triggerHook: 'onLeave',
                duration: "100%"
            }
        });

        let h = $('.section.front-cover').height();

        // create a scene
        let frontCover = new ScrollMagic.Scene({
            triggerElement: '.section.front-cover',
            duration: "50%"
        })
            .addTo(controller)
            // .addIndicators()
            .on('progress', function (e) {

                let height = h * (1 - e.progress);

                if (height <= $('.uixds-header').height()) {
                    $('.uixds-header').removeClass('invisible');
                } else {
                    $('.uixds-header').addClass('invisible');
                }
            });

        let page1 = new ScrollMagic.Scene({
            triggerElement: '.section.page-one',
            // duration: "100%",
            // offset: $('.section.page-one').offset().top
        })
            .setPin('.section.page-one', { pushFollowers: true })
            .addTo(controller)
            // .addIndicators()
            .on('progress', function (e) {
                $("#uixds-image-one").css('opacity', e.progress * 2);
                $('.section.page-one').children(".overlay-text.transparent").css('opacity', (e.progress - 0.5) * 2 + 0.15);

                if (e.progress > 0.6) {
                    $('#achievement-button').removeClass('invisible');
                } else {
                    $('#achievement-button').addClass('invisible');
                }
            });

        let page2 = new ScrollMagic.Scene({
            triggerElement: '.section.page-two',
            // duration: "100%",
            // offset: $('.section.page-two').offset().top
        })
            .setPin('.section.page-two', { pushFollowers: true })
            .addTo(controller)
            // .addIndicators()
            .on('progress', function (e) {
                $("#uixds-image-two").css('opacity', e.progress * 2);
                $('.section.page-two').children(".overlay-text.transparent").css('opacity', (e.progress - 0.5) * 2 + 0.15);

            });

        let page3 = new ScrollMagic.Scene({
            triggerElement: '.section.page-three',
            // duration: "100%",
            // offset: $('.section.page-three').offset().top
        })
            .setPin('.section.page-three', { pushFollowers: true })
            .addTo(controller)
            // .addIndicators()
            .on('progress', function (e) {
                $("#uixds-image-three").css('opacity', e.progress * 2);
                $('.section.page-three').children(".overlay-text.transparent").css('opacity', (e.progress - 0.5) * 2 + 0.15);

            });

        let lastPage = new ScrollMagic.Scene({
            triggerElement: '.section.page-last',
            // duration: "100%",
            // offset: $('.section.page-last').offset().top
        })
            .setPin('.section.page-last', { pushFollowers: true })
            .addTo(controller)
            // .addIndicators()
            .on('progress', function (e) {
                $("#uixds-image-last").css('opacity', e.progress * 2);
                // $('.section.page-three').children(".overlay-text.invisible").css('opacity', (e.progress - 0.5) * 2 + 0.15);

                if (e.progress > 0.1) {
                    $('#achievement-button').removeClass('float');
                } else {
                    $('#achievement-button').addClass('float');
                }

            });

        // new ScrollMagic.Scene({
        //     triggerElement: $('.section.page-last').get(0),
        // })
        //     .setClassToggle('#achievement-button', 'float')
        //     .addTo(controller)
        //     .addIndicators();

    })(jQuery);

});
