jQuery(document).ready(function () {
  "use strict";
  $(".div1,.div2,.div3,.div4").ripples({
    dropRadius: 15,
    perturbance: 0.01,
  });
  $(".text").typed({
    strings: ["Fist sentence.", "Second sentence."],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
    showCursor: false,
  });
});

// $(function () {
//   $(".text").Typed({
//     strings: ["First sentence.", "Second sentence."],
//     typeSpeed: 10,
//   });
// });

let typed = new Typed(".welText", {
  strings: [
    "<strong> welcome to my </strong> <strong class=primary> portfolio!!!</strong>",
    "<strong>Nice to </strong><strong class=primary> meet YOU!!!</strong>",
  ],
  typeSpeed: 50,
  backSpeed: 10,
  loop: true,
  // showCursor: false,
});
// Typed.new(".welText", { strings: ["test string1", "test string2"], contentType: "html" });
// let typed = new Typed(".text", { strings: ["test string1", "test string2"], typeSpeed: 50, backSpeed: 50, loop: true });
