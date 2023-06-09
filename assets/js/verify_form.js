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

let div_inicio = document.getElementById("inicio");
let form_nombre = document.getElementById("nombre");
let span_nombre = document.getElementById("msg_nombre");
let form_apellido = document.getElementById("apellido");
let span_apellido = document.getElementById("msg_apellido");
let form_mail = document.getElementById("mail");
let span_mail = document.getElementById("msg_mail");
let form_consulta = document.getElementById("consulta");
let span_consulta = document.getElementById("msg_consulta");
let form_detalle = document.getElementById("detalle");
let span_detalle = document.getElementById("msg_detalle");
let span_count_char = document.getElementById("count_char");
let error_bool;
let cout_char = "";
// cuento caracteres detalle
debug(form_detalle.value.length);

form_detalle.addEventListener("keyup", function () {
  span_count_char.innerHTML =
    "Caracteres " + form_detalle.value.length + " /250";
  debug(form_detalle.value.length);
});

function countChar() {}
function removerError(class_error) {
  let form_error = document.getElementsByClassName(class_error);
  while (form_error.length > 0) {
    form_error[0].classList.remove(class_error);
  }
}

function verifyForm() {
  error_bool = false;
  /** borrado clases error y error_back **/
  removerError("error");
  removerError("error-back");
  debug(form_nombre.value.trim());
  // verify nombre
  if (form_nombre.value.trim() == "") {
    span_nombre.classList.add("error");
    form_nombre.classList.add("error-back");
    span_nombre.innerHTML = "Falta el Nombre";
    error_bool = true;
  }
  if (form_apellido.value.trim() == "") {
    span_apellido.classList.add("error");
    form_apellido.classList.add("error-back");
    span_apellido.innerHTML = "Falta el Apellido";
    error_bool = true;
  }
  if (
    !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(form_mail.value)
  ) {
    span_mail.classList.add("error");
    form_mail.classList.add("error-back");
    span_mail.innerHTML = "Email incompleto";
    error_bool = true;
  }

  if (form_consulta.value.trim() == "") {
    span_consulta.classList.add("error");
    form_consulta.classList.add("error-back");
    span_consulta.innerHTML = "Ingrese Asunto";
    error_bool = true;
  }

  if (form_detalle.value.trim().length > 250) {
    span_detalle.classList.add("error");
    form_detalle.classList.add("error-back");
    span_detalle.innerHTML = "Sea mas breve, maximo 250 caracteres";
    error_bool = true;
  }
  if (!error_bool) {
    let todo = document.getElementById("todo"); // div en html
    let form_formulario = document.getElementById("formulario");
    let div = document.createElement("div");
    let todo_input = document.querySelectorAll("form input");
    form_formulario.remove(); // remuevo formualrio
    let titulo = document.createElement("h3");
    titulo.innerHTML = "Su mensaje fue enviado con los siguientes datos";
    todo.appendChild(div);
    div.appendChild(titulo);
    for (i = 0; i < todo_input.length - 1; i++) {
      if (todo_input[i].vale != "") {
        let dato = todo_input[i];
        let campo = document.createElement("p");
        campo.innerHTML =
          todo_input[i].id.toUpperCase() + ": " + todo_input[i].value;
        div.appendChild(campo);
      }
    }
    debug(form_consulta);
    debug(form_detalle);
    let consulta = document.createElement("p");
    consulta.innerHTML = form_mail.id.toUpperCase() + ": " + form_mail.value;
    div.appendChild(consulta);
    consulta = document.createElement("p");
    consulta.innerHTML =
      form_consulta.id.toUpperCase() + ": " + form_consulta.value;
    div.appendChild(consulta);
    consulta = document.createElement("p");
    consulta.innerHTML =
      form_detalle.id.toUpperCase() + ": " + form_detalle.value;
    div.appendChild(consulta);
  }
  debug(form_consulta.value);
  debug(form_detalle.value);
  return false;
}
