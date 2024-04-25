let menuVisible = false;

function showHideMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}

function selector() {
  document.getElementById("nav").classList = "";
  menuVisible = false;
}

function skillsEffect() {
  let skills = document.getElementById("skills");
  let skillsDistance = window.innerHeight - skills.getBoundingClientRect().top;
  if (skillsDistance >= 300) {
    let skillsItems = document.getElementsByClassName("progreso");
    skillsItems[0].classList.add("javascript");
    skillsItems[1].classList.add("htmlcss");
    skillsItems[2].classList.add("php");
    skillsItems[3].classList.add("laravel");
    skillsItems[4].classList.add("java");
    skillsItems[5].classList.add("comunicacion");
    skillsItems[6].classList.add("pensamiento");
    skillsItems[7].classList.add("trabajo");
    skillsItems[8].classList.add("gestion");
    skillsItems[9].classList.add("adaptabilidad");
  }
}

window.onscroll = function () {
  skillsEffect();
};

$("button").on("click", function () {
  let number = getRandomInt(1, 40);
  if (number < 10) {
    number = "0" + number;
  }
  $(this).html('<div class="loader-' + number + '"></div> Loading...');
  console.log("Resize window to change size and color of the button");
});

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(window).resize(function () {
  $("button").css(
    "color",
    "hsl(" + Math.floor((window.innerWidth / 360) * 100) + ", 70%, 70%)"
  );
});

function downloadCv() {
  var imageUrl = "./img/certificate.png";
  window.open(imageUrl, "_blank");
}
