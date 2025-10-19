const input = document.getElementById("celular");
let isDeleting = false;

input.addEventListener("keydown", (e) => {
  isDeleting = e.key === "Backspace" || e.key === "Delete";
});

input.addEventListener("input", (e) => {
  let value = e.target.value.replace(/\D/g, "");
  if (value.length > 11) value = value.slice(0, 11);

  if (!isDeleting) {
    if (value.length > 6) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    } else if (value.length > 2) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    }
  }

  e.target.value = value;
});

document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("meu-formulario");
  var status = document.getElementById("form-status");

  var formURL =
    "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeTqtXZZjLO4DvIX2fuMwDhR54O_0wkiPQ5JX6m4EqtjA1nQg/formResponse";

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    status.innerHTML = "Enviando respostas...";
    status.style.color = "#FCF4FF";

    var data = new FormData(form);

    fetch(formURL, {
      method: "POST",
      body: data,
      mode: "no-cors",
    })
      .then((response) => {
        status.innerHTML =
          "PRÉ-CADASTRO COMPLETO! <br> Obrigada por fazer parte do BoraMiga! Nós avisaremos quando o app for lançado. 🚀";
        status.style.color = "#FCF4FF";
        form.reset();
      })
      .catch((error) => {
        status.innerHTML = "Ops! Algo deu errado. Tente novamente.";
        status.style.color = "#6E407E";
      });
  });
});
