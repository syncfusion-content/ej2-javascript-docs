var cylindricalData = [
    { country: "USA", gold: 50 },
    { country: "Japan", gold: 70 },
    { country: "Australia", gold: 60 },
    { country: "France", gold: 50 },
    { country: "Italy", gold: 40 },
    { country: "Sweden", gold: 55 }
];
var chart = new ej.charts.Chart({
    primaryXAxis: {
        valueType: 'Category',
        interval: 1
    },
    primaryYAxis: {
        minimum: 0, maximum: 80,
        interval: 10, title: 'Medal Count'
    },
    series: [{
        dataSource: cylindricalData,
        xName: 'country', yName: 'gold',
        // Series type as column series with cylinder shape
        type: 'Column', columnFacet: 'Cylinder'
    }],
    title: 'Olympic Gold Medal Counts - RIO',
    tooltip: { enable: true, header: "<b>${point.tooltip}</b>", format: "Gold Medal: <b>${point.y}</b>" }
}, '#element');