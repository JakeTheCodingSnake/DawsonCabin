//nav stuff
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  //toggle nav
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    //animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
          0.5}s`;
      }
    });
    //burger animation
    burger.classList.toggle("toggle");
  });
};

navSlide();

var descriptions = [];
descriptions[1] =
  "description 1description 1description 1description 1description 1description 1description 1description 1description 1description 1description 1description 1description 1description 1description 1description 1description 1description 1description 1description 1description 1description 1";
descriptions[2] = "description 2";
descriptions[3] = "description 3";
descriptions[4] = "description 4";
descriptions[5] = "description 5";
descriptions[6] = "description 6";
descriptions[7] = "description 7";
descriptions[8] = "description 8";
descriptions[9] = "description 9";
descriptions[10] = "description 10";
descriptions[11] = "description 11";
descriptions[12] = "description 12";
descriptions[13] = "description 13";
descriptions[14] = "description 14";

var lightboxDiv = document.createElement("div");
var lightbox = document.createElement("div");
lightboxDiv.id = "lightboxDiv";
lightbox.id = "lightbox";

lightboxDiv.appendChild(lightbox);
document.body.appendChild(lightboxDiv);

const images = document.querySelectorAll("img");
images.forEach(image => {
  image.addEventListener("click", e => {
    lightboxDiv.classList.add("active");
    const img = document.createElement("img");
    const description = document.createElement("div");
    description.innerHTML = descriptions[image.id];

    img.src = image.src;
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild);
    }
    lightbox.appendChild(img);
    lightbox.appendChild(description);
  });
});

lightboxDiv.addEventListener("click", e => {
  if (e.target !== e.currentTarget) return;
  lightboxDiv.classList.remove("active");
});
