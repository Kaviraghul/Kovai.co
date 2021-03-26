var canvas = document.getElementById("barChart");
var ctx = canvas.getContext("2d");

// Global Options:
Chart.defaults.global.defaultFontColor = "#2097e1";
Chart.defaults.global.defaultFontSize = 11;

// Data with datasets options
var data = {
    labels: [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08"
    ],
    datasets: [
        {
            label: "Text1",
            fill: true,
            backgroundColor: [
                "#1DDCA9",
                "#1DDCA9",
                "#1DDCA9",
                "#1DDCA9",
                "#1DDCA9",
                "#1DDCA9",
                "#1DDCA9",
                "#1DDCA9",
            ],
            data: [1700, 1800, 2400, 2800, 1900, 2700, 2950, 2250]
        },
        {
            label: "Text 2",
            fill: true,
            backgroundColor: [
                "#4A3DFF",
                "#4A3DFF",
                 "#4A3DFF",
                "#4A3DFF",
                "#4A3DFF",
                "#4A3DFF",
                 "#4A3DFF",
                "#4A3DFF",
            ],
            data: [2250, 2200, 2600, 2950, 2200, 2200, 2750, 2900]
        }
    ]
};

// Notice how nested the beginAtZero is
var options = {
    scales: {
        xAxes: [
            {
                gridLines: {
                    display: true,
                    drawBorder: true,
                    drawOnChartArea: false
                }
            }
        ],
        yAxes: [
            {
                ticks: {
                    beginAtZero: true
                }
            }
        ]
    }
};

// added custom plugin to wrap label to new line when \n escape sequence appear
var labelWrap = [
    {
        beforeInit: function (chart) {
            chart.data.labels.forEach(function (e, i, a) {
                if (/\n/.test(e)) {
                    a[i] = e.split(/\n/);
                }
            });
        }
    }
];

// Chart declaration:
var myBarChart = new Chart(ctx, {
    type: "bar",
    data: data,
    options: options,
    plugins: labelWrap
});
