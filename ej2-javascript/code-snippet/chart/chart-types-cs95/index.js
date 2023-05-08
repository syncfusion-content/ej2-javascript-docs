var chartData = [
    { x: 2006, y: 7.8 }, { x: 2007, y: 7.2 },
    { x: 2008, y: 6.8 }, { x: 2009, y: 5.7 },
    { x: 2010, y: 8.8 }, { x: 2011, y: 9.8 }
];
var chart = new ej.charts.Chart({
    primaryXAxis: {
        minimum: 2005, maximum: 2012, interval: 1,
        title: 'Year'
    },
    primaryYAxis: {
        minimum: 3, maximum: 12,
        interval: 1, title: 'Percentage',
        labelFormat: '{value}%'
    },
    series: [{
        dataSource: chartData,
        xName: 'x', yName: 'y',
        errorBar: {
            visible: true,
            mode: 'Horizontal'
        }, marker: {
            visible: true,
        }, animation: { enable: false },
        name: 'India',
        type: 'Line'
    }],
    title: 'Unemployment rate (%)',

}, '#element');

