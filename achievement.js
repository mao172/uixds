

jQuery(function () {

    // var js2 = document.createElement("script");
    // js2.setAttribute("src", "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js");
    // document.getElementsByTagName("head")[0].appendChild(js2);

    var css2 = document.createElement("link");
    css2.setAttribute("rel", "stylesheet");
    css2.setAttribute("type", "text/css");
    css2.setAttribute("href", "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css");
    document.getElementsByTagName("head")[0].appendChild(css2);

    var css = document.createElement("link");
    css.setAttribute("rel", "stylesheet");
    css.setAttribute("type", "text/css");
    css.setAttribute("href", "https://cdn.jsdelivr.net/gh/mao172/uixds@783848b9043f79910fcc40581e60765dbe89e898/wp-append.css");
    document.getElementsByTagName("head")[0].appendChild(css);

    css = document.createElement("link");
    css.setAttribute("rel", "stylesheet");
    css.setAttribute("type", "text/css");
    css.setAttribute("href", "https://cdn.jsdelivr.net/gh/mao172/uixds@1045190420f076f544ac32e2c11567b29fdc22a9/style2.css");
    document.getElementsByTagName("head")[0].appendChild(css);

    css = document.createElement("link");
    css.setAttribute("rel", "stylesheet");
    css.setAttribute("type", "text/css");
    css.setAttribute("href", "https://cdn.jsdelivr.net/gh/mao172/uixds@bbdf2c47846ef98f275b65932f31b8a5ddf7d6d6/slider.css");
    document.getElementsByTagName("head")[0].appendChild(css);

    css = document.createElement("link");
    css.setAttribute("rel", "stylesheet");
    css.setAttribute("type", "text/css");
    css.setAttribute("href", "https://cdn.jsdelivr.net/gh/mao172/uixds@6dc5b22c72b233f1ee88b0e69088027afca8528a/achievement.css");
    document.getElementsByTagName("head")[0].appendChild(css);
});

// jQuery.noConflict();
jQuery(function () {

    (function ($) {

        // init controller
        let controller = new ScrollMagic.Controller({
            globalSceneOptions: {
                triggerHook: 'onLeave',
                duration: "100%"
            }
        });

        $('.section.page').each(function (index, elem) {
            let page1 = new ScrollMagic.Scene({
                triggerElement: elem,
                // duration: "100%",
                // offset: $('.section.page-one').offset().top
            })
                // .setPin(elem, { pushFollowers: true })
                .addTo(controller)
                // .addIndicators()
                ;
        });

        $(window).on("load", function () {

            $('.splash').css('display', 'none');

            $('.slider').slick({
                autoplay: false,//自動的に動き出すか。初期値はfalse。
                infinite: true,//スライドをループさせるかどうか。初期値はtrue。
                slidesToShow: 1,//スライドを画面に3枚見せる
                slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
                arrows: true,//左右の矢印あり
                prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
                nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
                dots: true,//下部ドットナビゲーションの表示
            });
            $('.slider').on('afterChange', function (event, slick, currentSlide) {
                // console.log(currentSlide);
                // $('.section.content').css('left', $('.section.content').width());
                // $($('.section.content').get(currentSlide)).css('left', '0');
                // console.log('translate(-' + ($($('.section.content').get(0)).outerWidth() * (currentSlide) ) + ', 0)');
                $('.section.content-wrap').css('transform', 'translate(-' + ($($('.section.content').get(0)).outerWidth() * (currentSlide)) + 'px, 0)');

                $("html, body").animate({ scrollTop: 0 }, 200);

            });

            let h = $('.slider-container').innerHeight();
            let innerHeight = $('.slider').innerHeight();
            $('.slider').css('height', innerHeight);

            let sliderArea = new ScrollMagic.Scene({
                triggerElement: '#slider-area'
            })
                .addTo(controller)
                // .addIndicators()
                .on('progress', function (e) {
                    // console.log(e, h);
                    // $('.slider-container').css('height', h * (1.0 - e.progress));
                    let height = innerHeight * (1.0 - e.progress);

                    if ((height - $('.uixds-header').innerHeight()) <= 64) {
                        $('.slider').addClass('float');
                        $('.slider').css('top', $('.uixds-header').innerHeight());
                        $('.slider').css('height', 64);
                        // $('.slick-dots').addClass('hide');
                    } else {
                        $('.slider').removeClass('float');
                        // $('.slick-dots').removeClass('hide');

                        $('.slider').css('top', h * (e.progress));
                        $('.slider').css('height', height);
                    }

                });
        });
    })(jQuery);

});
