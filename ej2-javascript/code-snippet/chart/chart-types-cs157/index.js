var chartData = [
    { x: 2006, y: 378 }, { x: 2007, y: 416 },
    { x: 2008, y: 404 }, { x: 2009, y: 390 },
    { x: 2010, y: 376 }, { x: 2011, y: 365 }
];
var chart = new ej.charts.Chart({
    primaryXAxis: {
        title: 'Year',
        minimum: 2005, maximum: 2012, interval: 1
    },
    primaryYAxis: {
        minimum: 330, maximum: 450, interval: 30,
        title: 'Intensity (g/kWh)'
    },
    series:[{
        dataSource: chartData, width:2,
        xName: 'x', yName: 'y',
        name: 'USA',
        // Series type as StepLine
        type: 'StepLine'
    }],
    title: 'CO2 - Intensity Analysis'
}, '#element');

