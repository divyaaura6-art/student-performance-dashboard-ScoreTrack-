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
    window.open("skillgap.html", "_blank");
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