var chartData = [
    { country: "USA", gold: 50 },
    { country: "China", gold: 40 },
    { country: "Japan", gold: 70 },
    { country: "Australia", gold: 60 },
    { country: "France", gold: 50 },
    { country: "Germany", gold: 40 },
    { country: "Italy", gold: 40 },
    { country: "Sweden", gold: 30 }
];
var chart = new ej.charts.Chart({
    primaryXAxis: {
        valueType: 'Category',
        title: 'Countries',
        coefficient: 80
    },
    primaryYAxis: {
        title: 'Medals'
    },
    series: [{
        dataSource: chartData,
        xName: 'country', yName: 'gold',
        // Series type as radar series
        type: 'Radar',
        // Series draw type as column series
        drawType: 'Column'
    }],
    title: 'Olympic Medals'
}, '#element');

