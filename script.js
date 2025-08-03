const input = document.getElementById("celular");
let isDeleting = false;

// Detecta se o usuário está apagando
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
