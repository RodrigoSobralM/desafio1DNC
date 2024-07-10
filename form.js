document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formulario");
    const formMessage = document.getElementById("form-message");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const formObject = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("https://api.sheetmonkey.io/form/7KtQWF3Xyk8Eq9NEX4x9kf", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formObject),
            });

            if (response.ok) {
                formMessage.textContent = "Obrigado por entrar em contato!";
                formMessage.style.color = "green";
                form.reset();
            } else {
                throw new Error("Erro ao enviar o formulário. Tente novamente mais tarde.");
            }
        } catch (error) {
            formMessage.textContent = error.message;
            formMessage.style.color = "red";
        }
    });
});
