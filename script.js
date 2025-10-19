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

    // Pega o formulário e o elemento de status
    var form = document.getElementById("meu-formulario");
    var status = document.getElementById("form-status");

    // 
    // !!! ATENÇÃO !!!
    // COLE A SUA URL DO formResponse AQUI
    // 
    var formURL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeTqtXZZjLO4DvIX2fuMwDhR54O_0wkiPQ5JX6m4EqtjA1nQg/formResponse";

    form.addEventListener("submit", function(e) {
        e.preventDefault(); // Impede o envio padrão da página

        // Mostra uma mensagem de "enviando"
        status.innerHTML = "Enviando...";
        status.style.color = "white"; // Mude a cor se precisar
        
        // Pega todos os dados do formulário
        var data = new FormData(form);

        // Envia os dados para o Google Forms em segundo plano
        fetch(formURL, {
            method: "POST",
            body: data,
            mode: "no-cors" // Modo "sem-cors" é essencial
        })
        .then(response => {
            // Não conseguimos ler a resposta, mas assumimos sucesso
            status.innerHTML = "Obrigada! Você está na lista! 🚀";
            status.style.color = "#A7F56C"; // Um verde-sucesso
            form.reset(); // Limpa o formulário
        })
        .catch(error => {
            // Isso pegará erros de rede (ex: sem internet)
            status.innerHTML = "Opa! Algo deu errado. Tente novamente.";
            status.style.color = "#FF8C8C"; // Um vermelho-erro
        });
    });
