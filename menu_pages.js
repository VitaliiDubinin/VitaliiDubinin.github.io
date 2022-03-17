const header = document.querySelector("header");
const button = document.querySelector("#backToTop");
const buttonHome = document.querySelector("#home");

const mobButton = document.querySelector("#mobileButton");
const nav = document.querySelector("nav");

let links = document.querySelectorAll("nav ul li a");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    // header.style.fontSize = "30px";
    // header.style.backgroundColor = "#fff";
    header.classList.add("bg");
    button.style.display = "block";
    buttonHome.style.display = "block";
  } else {
    // header.style.fontSize = "90px";
    // header.style.backgroundColor = "#000";
    header.classList.remove("bg");
    button.style.display = "none";
    buttonHome.style.display = "none";
  }
}

const getToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

const getToHome = () => {
  // document.body.scrollTop = 0;
  // document.documentElement.scrollTop = 0;
  window.location.href = "index.html";
};

const mobMenu = () => {
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", mobMenu);
  }
  if (nav.classList.contains("responsive")) {
    nav.classList.remove("responsive");
    document.body.style.overflow = "";
  } else {
    nav.classList.add("responsive");
    document.body.style.overflow = "hidden";
  }
};

button.addEventListener("click", getToTop);
buttonHome.addEventListener("click", getToHome);
// buttonHome.addEventListener("click", ((href = "/index.html"), (target = "_blank")));
mobButton.addEventListener("click", mobMenu);
