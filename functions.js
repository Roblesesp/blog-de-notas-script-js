document.addEventListener("DOMContentLoaded", function() {
  // Establecer la sección 1 como activa al cargar la página
  mostrarSeccion(1);

  // Obtener los elementos de los slides
  var slides = document.getElementsByClassName("slide");
  var currentSlide = 0;

  function showSlide() {
    slides[currentSlide].style.display = "none";
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.display = "block";
  }

  slides[currentSlide].style.display = "block";
  setInterval(showSlide, 4000);
});

function mostrarSeccion(seccion) {
  var seccion1 = document.getElementById("seccion1");
  var seccion2 = document.getElementById("seccion2");
  var seccion3 = document.getElementById("seccion3");
  var seccion4 = document.getElementById("seccion4");

  if (seccion === 1) {
    seccion1.style.display = "block";
    seccion2.style.display = "none";
    seccion3.style.display = "block";
    seccion4.style.display = "none";
    document.getElementById("btnSeccion1").classList.add("active");
    document.getElementById("btnSeccion2").classList.remove("active");
  } else if (seccion === 2) {
    seccion1.style.display = "none";
    seccion2.style.display = "block";
    seccion3.style.display = "none";
    seccion4.style.display = "block";
    document.getElementById("btnSeccion1").classList.remove("active");
    document.getElementById("btnSeccion2").classList.add("active");
  }
}

var nativeShare = function() { 
  if (navigator.share) {
    navigator.share({
      title: "Dev.Plus",
      text: "Lleva tu desarrollo al siguiente nivel con Dev.Plus, la app definitiva para desarrolladores web en Android.",
      url: "https://roblesesp.github.io/Promo-Dev.plus-APP/"
    });
  }
  return false;
};

function mostrarAvisoDescarga() {
  var avisoDiv = document.createElement("div");
  avisoDiv.classList.add("aviso-descarga");

  var avisoTexto = document.createTextNode("¡Que Emoción! Está a punto de descargar nuestra aplicación. ¿Desea continuar?");
  avisoDiv.appendChild(avisoTexto);

  var botonAceptar = document.createElement("button");
  botonAceptar.innerText = "Aceptar";
  botonAceptar.addEventListener("click", function() {
    descargarAplicacion();
    avisoDiv.remove();
  });

  var botonCancelar = document.createElement("button");
  botonCancelar.innerText = "Cancelar";
  botonCancelar.addEventListener("click", function() {
    avisoDiv.remove();
  });

  avisoDiv.appendChild(botonAceptar);
  avisoDiv.appendChild(botonCancelar);

  document.body.appendChild(avisoDiv);
}

function descargarAplicacion() {
  window.location.href = "Android-APP-Dev.Plus.apk";
}
