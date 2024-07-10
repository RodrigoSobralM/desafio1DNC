const handleSubmit = (event) => {
  event.preventDefault();

  const nome = document.querySelector("input[name=Nome]").value;
  const email = document.querySelector("input[name=Email]").value;

  fetch("https://api.sheetmonkey.io/form/wX4ZozsizATSn7mkuuVzfx", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nome: nome, email: email }),
  }).then((response) => {
    if (response.ok) {
      document.querySelector("#formulario").reset();
      document.querySelector("#form-message").textContent = "Muito obrigado, entraremos em contato em breve!";
      document.querySelector("#form-message").style.color = "green";
    }
  });
};

document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector("#formulario")
    .addEventListener("submit", handleSubmit);
});
