// Script para alternar entre temas claro e escuro

const btn = document.getElementById("mudar-tema");

function atualizarTextoBotao() {
    if (document.body.classList.contains("dark-theme")) {
        btn.innerText = "☀️ Modo Claro";
    } else {
        btn.innerText = "🌙 Modo Escuro";
    }
}

if (btn) {
    const currentTheme = localStorage.getItem("tema");

    if (currentTheme === "dark") {
        document.body.classList.add("dark-theme");
    }

    atualizarTextoBotao();

    btn.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
        
        const temaAtivo = document.body.classList.contains("dark-theme") ? "dark" : "light";
        
        localStorage.setItem("tema", temaAtivo);

        atualizarTextoBotao();
    });
}

//Validação de e-mail no formulário de contato

const form = document.querySelector('form');
const emailInput = document.getElementById('email');

form.addEventListener('submit', (event) => {
    const emailValue = emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailValue)) {
        alert("Ops! O e-mail informado parece inválido.");
        event.preventDefault(); // Impede o envio do formulário
    }
});