document.addEventListener("DOMContentLoaded", () => {

    const toggleBtn = document.getElementById("themeToggle");

    function loadTheme() {
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme === "light") {
            document.body.classList.add("light-theme");
        }
    }

    function updateButton() {
        if (!toggleBtn) return;

        toggleBtn.innerText = document.body.classList.contains("light-theme")
            ? "Calm Mode 🌙"
            : "Energetic Mode ⚡";
    }

    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            document.body.classList.toggle("light-theme");

            const isLight = document.body.classList.contains("light-theme");

            localStorage.setItem("theme", isLight ? "light" : "dark");

            updateButton();
        });
    }

    loadTheme();
    updateButton();
});