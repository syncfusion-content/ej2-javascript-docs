var chart = new ej.charts.Chart({
    series: [
        {
            type: 'Line',
            dataSource: numData, xName: 'x', yName: 'y',
            marker: {
                visible: true
            }
        },
        {
            type: 'Line',
            dataSource: numData, xName: 'x', yName: 'y1',
            marker: {
                visible: true
            }
        }
    ],
}, '#element');