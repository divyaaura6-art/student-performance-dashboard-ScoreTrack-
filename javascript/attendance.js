// ===== Gauge Center Text Plugin =====
const gaugeTextPlugin = {
    id: 'gaugeText',
    afterDraw(chart) {
        const { ctx } = chart;
        const value = chart.config.data.datasets[0].data[0];
        ctx.save();
        ctx.font = "bold 28px Poppins";
        ctx.fillStyle = "#ffffff";
        ctx.textAlign = "center";
        ctx.fillText(value + "%", chart.width / 2, chart.height - 40);
    }
};

// ===== OVERALL ATTENDANCE GAUGE =====
const overallValue = 84;

new Chart(document.getElementById("overallGauge"), {
    type: "doughnut",
    data: {
        datasets: [{
            data: [overallValue, 100 - overallValue],
            backgroundColor: [
                overallValue >= 75 ? "#4CAF50" : "#FF5252",
                "#ddd"
            ],
            borderWidth: 0
        }]
    },
    options: {
        rotation: -90,
        circumference: 180,
        cutout: "70%",
        plugins: {
            legend: { display: false }
        }
    },
    plugins: [gaugeTextPlugin]
});

// ===== SUBJECT ATTENDANCE GAUGE =====
let subjectValue = 92;

let subjectChart = new Chart(document.getElementById("subjectGauge"), {
    type: "doughnut",
    data: {
        datasets: [{
            data: [subjectValue, 100 - subjectValue],
            backgroundColor: [
                subjectValue >= 75 ? "#4CAF50" : "#FF5252",
                "#ddd"
            ],
            borderWidth: 0
        }]
    },
    options: {
        rotation: -90,
        circumference: 180,
        cutout: "70%",
        plugins: {
            legend: { display: false }
        }
    },
    plugins: [gaugeTextPlugin]
});

// ===== SUBJECT DROPDOWN CHANGE =====
const select = document.getElementById("subjectSelect");
const warningText = document.getElementById("attendanceWarning");

select.addEventListener("change", function () {

    subjectValue = parseInt(this.value);

    subjectChart.data.datasets[0].data = [
        subjectValue,
        100 - subjectValue
    ];

    subjectChart.data.datasets[0].backgroundColor = [
        subjectValue >= 75 ? "#4CAF50" : "#FF5252",
        "#ddd"
    ];

    subjectChart.update();

    if (subjectValue >= 75) {
        warningText.innerHTML = "✔ Attendance is healthy";
        warningText.style.color = "#4CAF50";
    } else {
        warningText.innerHTML = "⚠ Attendance below recommended 75%";
        warningText.style.color = "#FF5252";
    }
});