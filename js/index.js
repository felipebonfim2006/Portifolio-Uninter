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