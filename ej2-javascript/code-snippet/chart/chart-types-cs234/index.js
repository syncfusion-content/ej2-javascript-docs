var chartData = [
    { x: 'Jan', high: 14, low: 4 },
    { x: 'Feb', high: 17, low: 7 },
    { x: 'Mar', high: 20, low: 10 },
    { x: 'Apr', high: null, low: 12 },
    { x: 'May', high: 20, low: 10 },
    { x: 'Jun', high: 17, low: 7 },
    { x: 'Jul', high: 15, low: 5 },
    { x: 'Aug', high: 17, low: 7 },
    { x: 'Sep', high: 20, low: undefined },
    { x: 'Oct', high: 22, low: 12 },
    { x: 'Nov', high: 20, low: 10 },
    { x: 'Dec', high: 17, low: 7 }
];

var chart = new ej.charts.Chart({
    primaryXAxis: {
        valueType: 'Category',
        title: 'Month',
        edgeLabelPlacement: 'Shift',
        majorGridLines: { width: 0 }
    },
    primaryYAxis:
    {
        title: 'Temperature',
        labelFormat: '{value}˚C',
        lineStyle: { width: 0 },
        minimum: 0,
        maximum: 30,
        majorTickLines: { width: 0 }
    },
    series: [
        {
            type: 'RangeArea',
            dataSource: chartData,
            xName: 'x',
            high: 'high',
            low: 'low',
            emptyPointSettings: {
                mode: 'Zero'
            }
        }
    ],
    title: 'Monthly Temperature Range'
}, '#element');

