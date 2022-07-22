jQuery(document).ready(function () {
  // $(document).ready(function () {
  "use strict";

  // ---Ripple part----
  $(".div1,.div2,.div3,.div4").ripples({
    dropRadius: 15,
    perturbance: 0.01,
  });
  // ---Ripple part END----

  $(".welText").typed({
    strings: [
      "<strong> welcome to my </strong> <strong class=primary> portfolio!!!</strong>",
      "<strong>Nice to </strong><strong class=primary> meet YOU!!!</strong>",
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
    showCursor: true,
  });

  // $(".work").magnificPopup({
  //   delegate: "a", // child items selector, by clicking on it popup will open
  //   type: "image",
  //   gallery: {
  //     enabled: true,
  //   },
  // });

  // $("p").click(function () {
  //   $(this).hide();
  // });
  // $(".welText").click(function () {
  //   $(this).hide();
  // });
});

// ---Magnific POPUP----
// $(".work").magnificPopup({
//   delegate: "a", // child items selector, by clicking on it popup will open
//   type: "image",
//   gallery: {
//     enabled: true,
//   },
// });

$(".work").magnificPopup({
  delegate: "a", // child items selector, by clicking on it popup will open
  type: "image",
  gallery: {
    enabled: true,
  },
});

$("#work-photos").owlCarousel();
$("#hobby-photos").owlCarousel();

$(".skills-ft").magnificPopup({
  items: [
    {
      src: "/pictures/skills/S1.png",
      title: "Project Description & Goals",
    },
    {
      src: "/pictures/skills/S2.webp",
      title: "Time plan & Roles",
    },
    {
      src: "/pictures/skills/S3.webp",
      title: "Team!",
    },
  ],
  gallery: {
    enabled: true,
  },
  type: "image", // this is a default type
});

// ---Typed working with last version of typed----
// let typed = new Typed(".text", {
//   strings: [
//     "<strong> welcome to my </strong> <strong class=primary> portfolio!!!</strong>",
//     "<strong>Nice to </strong><strong class=primary> meet YOU!!!</strong>",
//   ],
//   typeSpeed: 50,
//   backSpeed: 10,
//   loop: true,
//   showCursor: false,
// });
// ---Typed working END----
