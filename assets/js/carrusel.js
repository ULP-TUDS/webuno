/** para debug **/
// entorno DEV
const DEV = true;
let data = "";
let class_error = "";
function debug(data) {
  if (DEV) {
    console.log(data);
  }
}
/** Iniciar variables **/
const contenedor = document.getElementsByClassName("contenedor")[0];
const imagenes = [
  "web1_1.jpg",
  "web1_2.jpg",
  "web1_3.jpg",
  "web1_4.jpg",
  "web1_5.jpg",
  "web1_6.jpg",
  "web1_7.jpg",
  "web1_8.jpg",
  "web1_9.jpg",
  "web1_10.jpg",
  "web1_11.jpg",
  "web1_12.jpg",
  "web1_13.jpg",
  "web1_14.jpg",
  "web1_15.jpg",
  "web1_16.jpg",
  "web1_17.jpg",
  "web1_18.jpg",
  "web1_19.jpg",
  "web1_20.jpg",
  "web1_21.jpg",
  "web1_22.jpg",
  "web1_23.jpg",
  "web1_24.jpg",
  "web1_25.jpg",
  "web1_26.jpg",
  "web1_27.jpg",
  "web1_28.jpg",
];
let indice = Math.floor(Math.random() * imagenes.length);
//indice = 27;
let indice_der = indice;
let indice_izq = indice;
let img_centro = document.getElementById("centro");
let img_izquierda = document.getElementById("izquierda");
let img_derecha = document.getElementById("derecha");
let img_length = imagenes.length - 1;
debug(img_length);
cambioImagen(1);
function cambioImagen(index) {
  indice = index + indice;
  debug(index + " - " + indice + " - " + indice_der + " - " + indice_izq);
  if (indice < 0) {
    indice = img_length;
    indice_der = 0;
    indice_izq = 1;
  } else if (indice > 0 && indice < img_length) {
    indice_der = indice + 1;
    indice_izq = indice - 1;
  } else if (indice >= img_length) {
    debug("linea63");
    indice = 1;
    indice_der = 2;
    indice_izq = 0;
  }
  debug(index + " - " + indice + " - " + indice_der + " - " + indice_izq);
  centro.setAttribute("src", "./assets/img/galeria/" + imagenes[indice]);
  izquierda.setAttribute("src", "./assets/img/galeria/" + imagenes[indice_izq]);
  derecha.setAttribute("src", "./assets/img/galeria/" + imagenes[indice_der]);
}
