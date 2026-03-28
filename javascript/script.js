function openNewTab() {
    window.open("index.html", "_blank");
}

function openNewTab1() {
    window.open("grades.html", "_blank");
}

function openNewTab2() {
    window.open("attendance.html", "_blank");
}

function openNewTab3() {
    window.open("hackathon.html", "_blank");
}

function openNewTab4() {
    window.open("certifications.html", "_blank");
}

function openNewTab5() {
    window.open("skills.html", "_blank");
}

function openNewTab6() {
    window.open("career.html", "_blank");
}

function openNewTab7() {
    window.open("settings.html", "_blank");
}
// Load sidebar dynamically
fetch("components/sidebar.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("sidebar").innerHTML = data;
    });
function openModal() {
    document.getElementById("certModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("certModal").style.display = "none";
}

function addCertification() {
    const name = document.getElementById("certName").value;
    const provider = document.getElementById("certProvider").value;
    const status = document.getElementById("certStatus").value;
    const progress = document.getElementById("certProgress").value;

    if (!name || !provider) {
        alert("Please fill all fields");
        return;
    }

    const dashboard = document.querySelector(".dashboard");

    let statusText = "";
    let progressBar = "";

    if (status === "Completed") {
        statusText = "✅ Completed";
    } 
    else if (status === "In Progress") {
        statusText = "⏳ In Progress";

        progressBar = `
        <div class="progress-bar">
            <div class="progress" style="width:${progress}%"></div>
        </div>`;
    } 
    else {
        statusText = "📌 Planned";
    }

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <h3>${name}</h3>
        <p>Provider: ${provider}</p>
        <p>Status: ${statusText}</p>
        ${progressBar}
    `;

    dashboard.appendChild(card);

    closeModal();
}
const toggleBtn = document.getElementById("themeToggle");

// Load saved theme
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-theme");
}

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    // Save preference
    if (document.body.classList.contains("light-theme")) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }
});
function updateButton() {
    if (document.body.classList.contains("light-theme")) {
        toggleBtn.innerText = "Calm Mode 🌙";
    } else {
        toggleBtn.innerText = "Energetic Mode ⚡";
    }
}

updateButton();

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    localStorage.setItem(
        "theme",
        document.body.classList.contains("light-theme") ? "light" : "dark"
    );
    updateButton();
});