jQuery(document).ready(function () {
  $(".skills-tm").magnificPopup({
    items: [
      {
        src: '<div class="white-popup">14 month,<br />185 business-trip days,<br />55 flights,<br />15 train-trips,<br />negotiation in 65 cities. <br />Result - new mobile operator started in time.</div>', // HTML string
        type: "inline",
      },
    ],
    gallery: {
      enabled: true,
    },
    type: "image", // this is a default type
  });
});
