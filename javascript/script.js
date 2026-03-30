// ================= NAVIGATION =================
function openNewTab(page) {
    window.open(page, "_blank");
}

// ================= LOAD SIDEBAR =================
fetch("components/sidebar.html")
    .then(response => response.text())
    .then(data => {
        const sidebar = document.getElementById("sidebar");
        if (sidebar) {
            sidebar.innerHTML = data;
        }
    })
    .catch(err => console.error("Sidebar load error:", err));


// ================= MODAL =================
function openModal() {
    const modal = document.getElementById("careerModal"); // make sure this ID exists in HTML
    if (modal) {
        modal.style.display = "flex";
    } else {
        console.error("careerModal not found");
    }
}

function closeModal() {
    const modal = document.getElementById("careerModal");
    if (modal) {
        modal.style.display = "none";
    }
}


// ================= ADD CERTIFICATION =================
function addCertification() {
    const nameEl = document.getElementById("certName");
    const providerEl = document.getElementById("certProvider");
    const statusEl = document.getElementById("certStatus");
    const progressEl = document.getElementById("certProgress");

    if (!nameEl || !providerEl || !statusEl || !progressEl) {
        console.error("One or more input elements missing");
        return;
    }

    const name = nameEl.value.trim();
    const provider = providerEl.value.trim();
    const status = statusEl.value;
    const progress = progressEl.value;

    if (!name || !provider) {
        alert("Please fill all fields");
        return;
    }

    const dashboard = document.querySelector(".dashboard");

    if (!dashboard) {
        console.error("Dashboard container not found");
        return;
    }

    let statusText = "";
    let progressBar = "";

    if (status === "Completed") {
        statusText = "✅ Completed";
    } else if (status === "In Progress") {
        statusText = "⏳ In Progress";

        progressBar = `
        <div class="progress-bar">
            <div class="progress" style="width:${progress}%"></div>
        </div>`;
    } else {
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