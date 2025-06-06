var piechart = new ej.charts.AccumulationChart({
    series: [
        {
            dataSource: [
                { x: 'Jan', y: 3 },  { x: 'Feb', y: 3.5 }, 
                { x: 'Mar', y: 7 },  { x: 'Apr', y: 13.5 }, 
                { x: 'May', y: 19 }, { x: 'Jun', y: 23.5 }, 
                { x: 'Jul', y: 26 }, { x: 'Aug', y: 25 },
                { x: 'Sep', y: 21 }, { x: 'Oct', y: 15 },
                { x: 'Nov', y: 15 }, { x: 'Dec', y: 15 }
            ],
            xName: 'x',
            yName: 'y'
        }
    ],
    legendSettings: {
        visible: true,
        accessibility: {
            accessibilityDescription: 'The legend identifies the data categories represented in the chart and associates them with their corresponding labels.',
            accessibilityRole: 'group'
        }
    }
}, '#element');