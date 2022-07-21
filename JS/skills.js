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

  $(".skills-symfcert").magnificPopup({
    items: [
      {
        src: "/pictures/skills/sfcasts-certificate-composer.png",
        title: "composer certificate",
      },
      {
        src: "/pictures/skills/sfcasts-certificate-harmonious-development-with-symfony-6.png",
        title: "Harm dev with Symf Certificate",
      },
      {
        src: "/pictures/skills/sfcasts-certificate-php-namespaces.png",
        title: "PHP namespaces certificate",
      },
    ],
    gallery: {
      enabled: true,
    },
    type: "image", // this is a default type
  });
});
