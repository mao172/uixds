$(function () {
  // init controller
  let controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: 'onLeave',
      duration: "100%"
    }
  });

  let h = $('#uixds-section-first').innerHeight();
  let w = $('#uixds-section-first').innerWidth();

  // create a scene
  let section1 = new ScrollMagic.Scene({
    triggerElement: $('#uixds-section-first'),
    duration: "50%"
  })
    // .setPin('#uixds-section-first', {pushFollowers: true}) // pins the element for the the scene's duration
    .addIndicators()
    .addTo(controller)// assign the scene to the controller
    .on("progress", function (e) {

      let height = h * (1 - e.progress);
      let top = h * e.progress;

      if (height < 60) {
        height = 60;
        $('#uixds-logo').addClass('uixds-logo-header');
        $("#uixds-logo")
          .css('height', height)
          .css('top', 0);

        $(".logo-image").css('display', 'none');
        $(".logo-text").css('display', 'none');
        $(".logo-title").css('display', 'block');
      } else {
        $('#uixds-logo').removeClass('uixds-logo-header');
        $("#uixds-logo")
          .css('height', height)
          .css('top', top);

        $(".logo-image").css('display', 'block');
        $(".logo-text").css('display', 'block');
        $(".logo-title").css('display', 'none');
      }

      let width = w * (1 - e.progress);

      if (width < 82) {
        width = 82;
      }
      let left = (w - width) / 2

      $(".uixds-logo")
        .css('width', width)
        .css('left', left);

    });

  let section2 = new ScrollMagic.Scene({
    triggerElement: $('#uixds-section-second'),
    duration: $('#uixds-section-second').height(),
    offset: $('#uixds-section-second').offset().top
  })
    .setPin('#uixds-section-second', { pushFollowers: true })
    .addTo(controller)
    .addIndicators()
    .on("progress", function (e) {
      $("#uixds-image-one").css('opacity', e.progress * 2);
      $("#uixds-text-one").css('opacity', (e.progress - 0.5) * 2 + 0.1);
    });

  let section3 = new ScrollMagic.Scene({
    triggerElement: $('#uixds-section-third'),
    duration: $('#uixds-section-third').height(),
    offset: $('#uixds-section-third').offset().top
  })
    .setPin('#uixds-section-third', { pushFollowers: true })
    .addTo(controller)
    .addIndicators()
    .on("progress", function (e) {
      $("#uixds-image-two").css('opacity', e.progress * 2);
      $("#uixds-text-two").css('opacity', (e.progress - 0.5) * 2 + 0.1);
    });

  let section4 = new ScrollMagic.Scene({
    triggerElement: $('#uixds-section-fourth'),
    duration: "100%",
    offset: $('#uixds-section-fourth').offset().top
  })
    .setPin('#uixds-section-fourth', { pushFollowers: true })
    .addTo(controller)
    .addIndicators()
    .on("progress", function (e) {
      $("#uixds-image-three").css('opacity', e.progress * 2);
      $("#uixds-text-three").css('opacity', (e.progress - 0.5) * 2 + 0.1);
      $('#uixds-section-fourth').children('.overlay-text').css('opacity', (e.progress - 0.5) * 2 + 0.1);
    });

  let section5 = new ScrollMagic.Scene({
    triggerElement: $('#uixds-section-fifth'),
    duration: "100%",
    offset: $('#uixds-section-fifth').offset().top
  })
    .setPin('#uixds-section-fifth')
    .addTo(controller)
    .addIndicators()
    .on("progress", function (e) {
      $("#uixds-image-last").css('opacity', e.progress * 2);

    });

});

