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
  "A view of our main lodge situated along the northwest corner of the lake.";
descriptions[2] =
  "The breathtaking Dinosaur Provincial Park in Alberta, known for its abundance of fossils!";
descriptions[3] =
  "A creek in Waterton Lakes National Park, Alberta. Known for its diverse wildlife.";
descriptions[4] =
  "A shallow creek part of Fish Creek National Park, one of the largest urban parks in North America!";
descriptions[5] =
  "Pigeon Coop cabin 4 in winter, situated along the northern coast of the lake.";
descriptions[6] =
  "Forillon National Park in Quebec, known for its unmatched vistas.";
descriptions[7] =
  "A neighboring cabin to our own Piegon Coob cabins, along the southern shore";
descriptions[8] =
  "Visitors to the Pacific Rim National Park in British Columbia";
descriptions[9] =
  "Another neighboring cabin situated along the eastern shore, picture taken in the spring.";
descriptions[10] =
  "A beach in Pukaskwa National Park, Ontario. This park has both camper-friendly shores and deep woods!";
descriptions[11] =
  "The unmatched view of mountains along the waterfront of Banff National Park";
descriptions[12] =
  "A bridge winding through the tall grasses of Point Pelee National Park, Ontario. Great for bird-watchers!";
descriptions[13] =
  "A bikepath along Stanley National Park, British Columbia. Abundant in views, trails, beaches and more!";
descriptions[14] =
  "Stunning view of a creek in Kootenay National Park, part of the Rocky Mountains.";

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
