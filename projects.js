jQuery(document).ready(function () {
  $(".proj-isp").magnificPopup({
    items: [
      {
        src: "./pictures/projects/iSpr_1.PNG",
        title: "different courses",
      },
      {
        src: "./pictures/projects/iSpr_2.PNG",
        title: "course's screen shot",
      },
      {
        src: "./pictures/projects/image001.png",
        title: "q-ty of users",
      },
    ],
    gallery: {
      enabled: true,
    },
    type: "image", // this is a default type
  });

  $(".proj-ft").magnificPopup({
    items: [
      {
        src: "./pictures/projects/image003.png",
        title: "diagram",
      },
      {
        src: "./pictures/projects/IT_Landscape.png",
        title: "IT landscape",
      },
      {
        src: "./pictures/projects/SnipImage.png",
        title: "clients",
      },
    ],
    gallery: {
      enabled: true,
    },
    type: "image", // this is a default type
  });
  $(".telnet").magnificPopup({
    items: [
      {
        src: "./pictures/projects/T1.png",
        title: "Login panel",
      },
      {
        src: "./pictures/projects/T2.png",
        title: "Tasks",
      },
      {
        src: "./pictures/projects/T3.png",
        title: "Example",
      },
    ],
    gallery: {
      enabled: true,
    },
    type: "image", // this is a default type
  });
});
