var chart = new ej.charts.Chart({
        primaryXAxis: {
            valueType: 'Category',
        },
        primaryYAxis: {
            title: '(m2/min)'
        },
        annotations: [{
                content: '<div id="text" style="transform: rotate(-90deg);">Speed Rate</div>',
                x: 6,
                y: 180,
                coordinateUnits: 'Pixel',
                Region: 'Chart'
            }],
        series: [{
                dataSource: datasource.columnData,
                xName: 'country', yName: 'gold',
                type: 'Column'
            }],
    }, '#element');

