document.addEventListener("DOMContentLoaded", function () {

    const attendanceValue = 84; // Change value here

    const ctx = document.getElementById("attendanceGauge");

    const centerTextPlugin = {
        id: 'centerText',
        afterDraw(chart) {
            const { ctx } = chart;
            const meta = chart.getDatasetMeta(0);
            const x = meta.data[0].x;
            const y = meta.data[0].y + 20;

            ctx.save();
            ctx.font = "bold 30px Poppins";
            ctx.fillStyle = "#ffffff";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(attendanceValue + "%", x, y);
        }
    };

    new Chart(ctx, {
        type: "doughnut",
        data: {
            datasets: [{
                data: [attendanceValue, 100 - attendanceValue],
                backgroundColor: [
                    attendanceValue >= 75 ? "#4CAF50" : "#FF5252",
                    "#3a3a6a"
                ],
                borderWidth: 0
            }]
        },
        options: {
            rotation: -90,
            circumference: 180,
            cutout: "75%",
            responsive: true,
            animation: {
                duration: 1200
            },
            plugins: {
                legend: { display: false },
                tooltip: { enabled: false }
            }
        },
        plugins: [centerTextPlugin]
    });

});