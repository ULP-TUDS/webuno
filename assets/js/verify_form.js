function verifyForm() {
  let form_nombre = document.getElementById("nombre");
  let form_apellido = document.getElementById("apellido");
  let form_mail = document.getElementById("mail");
  let form_consulta = document.getElementById("consulta");
  let form_formulario = document.getElementById("formulario");
  let labelMail = document.querySelector('label[for="mail"]');
  //verifico email
  if (!/^([a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+)?$/.test(form_mail.value))
  {
    let label_error = document.createElement("label");
    label_error.setAttribute("for", "mail");
    label_error.innerHTML = "**\n";
    label_error.classList.add("error");
    form_formulario.appendChild(label_error);
    label_error.style.display = "inline";
  }
  //verifico nombre
  if()
  return false;
}
