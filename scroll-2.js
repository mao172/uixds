$(function () {
    // init controller
    let controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave',
            duration: "100%"
        }
    });

    // create a scene
    let frontCover = new ScrollMagic.Scene({
        triggerElement: $('.section.front-cover'),
        duration: "50%"
    })
        .addTo(controller)
        .addIndicators();

    let page1 = new ScrollMagic.Scene({
        triggerElement: $('.section.page-one').get(0),
        // duration: "100%",
        // offset: $('.section.page-one').offset().top
    })
        .setPin('.section.page-one', { pushFollowers: true })
        .addTo(controller)
        .on('progress', function (e) {
            $("#uixds-image-one").css('opacity', e.progress * 2);
            $('.section.page-one').children(".overlay-text.invisible").css('opacity', (e.progress - 0.5) * 2 + 0.15);

        })
        .addIndicators();

    let page2 = new ScrollMagic.Scene({
        triggerElement: $('.section.page-two').get(0),
        // duration: "100%",
        // offset: $('.section.page-two').offset().top
    })
        .setPin('.section.page-two', { pushFollowers: true })
        .addTo(controller)
        .on('progress', function (e) {
            $("#uixds-image-two").css('opacity', e.progress * 2);
            $('.section.page-two').children(".overlay-text.invisible").css('opacity', (e.progress - 0.5) * 2 + 0.15);

        })
        .addIndicators();

    let page3 = new ScrollMagic.Scene({
        triggerElement: $('.section.page-three').get(0),
        // duration: "100%",
        // offset: $('.section.page-three').offset().top
    })
        .setPin('.section.page-three', { pushFollowers: true })
        .addTo(controller)
        .on('progress', function (e) {
            $("#uixds-image-three").css('opacity', e.progress * 2);
            $('.section.page-three').children(".overlay-text.invisible").css('opacity', (e.progress - 0.5) * 2 + 0.15);

        })
        .addIndicators();

    let lastPage = new ScrollMagic.Scene({
        triggerElement: $('.section.page-last').get(0),
        // duration: "100%",
        // offset: $('.section.page-last').offset().top
    })
        .setPin('.section.page-last', { pushFollowers: true })
        .addTo(controller)
        .on('progress', function (e) {
            $("#uixds-image-last").css('opacity', e.progress * 2);
            // $('.section.page-three').children(".overlay-text.invisible").css('opacity', (e.progress - 0.5) * 2 + 0.15);

            if (e.progress > 0.1) {
                $('#achievement-button').removeClass('float');
            } else {
                $('#achievement-button').addClass('float');
            }

        })
        .addIndicators();

    // new ScrollMagic.Scene({
    //     triggerElement: $('.section.page-last').get(0),
    // })
    //     .setClassToggle('#achievement-button', 'float')
    //     .addTo(controller)
    //     .addIndicators();

});