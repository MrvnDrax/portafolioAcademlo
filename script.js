let menuVisible = false;
//Funcion que oculta o muestra el menu
function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}

function seleccionador() {
  //oculta el menu una vez que selecciono una opcion
  document.getElementById("nav").classList = "";
  menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades() {
  var skills = document.getElementById("skills");
  var distancia_skills =
    window.innerHeight - skills.getBoundingClientRect().top;
  if (distancia_skills >= 300) {
    let habilidades = document.getElementsByClassName("progreso");
    habilidades[0].classList.add("javascript");
    habilidades[1].classList.add("htmlcss");
    habilidades[2].classList.add("php");
    habilidades[3].classList.add("laravel");
    habilidades[4].classList.add("java");
    habilidades[5].classList.add("comunicacion");
    habilidades[6].classList.add("pensamiento");
    habilidades[7].classList.add("trabajo");
    habilidades[8].classList.add("gestion");
    habilidades[9].classList.add("adaptabilidad");
  }
}
//Detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function () {
  efectoHabilidades();
};

$("button").on("click", function () {
  var number = getRandomInt(1, 40);
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
