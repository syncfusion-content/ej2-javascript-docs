var chartData = [
    { x: 1900, y: 4 }, { x: 1920, y: 3.0 },{ x: 1940, y: 3.8 },
    { x: 1960, y: 3.4 }, { x: 1980, y: 3.2 }, { x: 2000, y: 3.9 }
];
var chart = new ej.charts.Chart({
    primaryXAxis: {
        title: 'Year',
        minimum: 1900, 
        maximum: 2000, 
        interval: 10
    },
    primaryYAxis: {
        minimum: 2, maximum: 5, interval: 0.5,
        title: 'Sales Amount in Millions'
    },
    series:[{
        dataSource: chartData,
        xName: 'x', yName: 'y',
        fill:'#69D2E7',
        // Series type as polar series
        type: 'Polar',
        // Series draw type as area
        drawType: 'Area'
    }],
    title: 'Average Sales Comparison'
}, '#element');

