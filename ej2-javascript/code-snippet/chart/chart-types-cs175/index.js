var cylindricalData = [
    { x: 2006, y: 9 }, { x: 2007, y: 7.8 },
    { x: 2008, y: 10.5 }, { x: 2009, y: 8.4 },
    { x: 2010, y: 6 }, { x: 2011, y: 11 }
];
var chart = new ej.charts.Chart({
    primaryXAxis: {
        minimum: 2006, maximum: 2011, interval: 1
    },
    primaryYAxis: {
        minimum: 3, maximum: 12,
        interval: 1, title: 'Percentage'
    },
    series: [{
        dataSource: cylindricalData,
        xName: 'x', yName: 'y',
        name: 'India',
        // Series type as bar series with cylinder shape
        type: 'Bar', columnFacet: 'Cylinder'
    }],
    title: 'Unemployment rate in percentage'
}, '#element');