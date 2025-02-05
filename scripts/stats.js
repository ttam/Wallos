function loadGraph(container, dataPoints, symbol, run) {
    if (run) {
        var ctx = document.getElementById(container).getContext('2d');

        var chart = new Chart(ctx, {
            type: 'pie',
            data: {
                datasets: [{
                    data: dataPoints.map(point => point.y),
                }],
                labels: dataPoints.map(point => `${point.label} (${point.y}${symbol})`),
            },
            options: {
                animation: {
                    animateRotate: true,
                    animateScale: true,
                },
            },
        });
    }
}
