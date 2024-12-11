var piechart = new ej.charts.AccumulationChart({
    series: [
        {
            dataSource: [
                { x: 'Jan', y: 13 },
                { x: 'Feb', y: 13 },
                { x: 'Mar', y: 17 },
                { x: 'Apr', y: 13.5 }
            ],
            xName: 'x',
            yName: 'y'
        }
    ],
    legendSettings: {
        visible: true,
        accessibility: {
            accessibilityDescription: 'This legend identifies the series displayed in the chart, showing the monthly data points for January to April.',
            accessibilityRole: 'list'
        }
    }
}, '#element');
