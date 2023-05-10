var chartData = [
    { x: 'Income', y: 4711 }, { x: 'Sales', y: -1015 },
    { x: 'Development', y: -688 },
    { x: 'Revenue', y: 1030 }, { x: 'Balance' },
    { x: 'Administrative', y: -780 },
    { x: 'Expense', y: -361 }, { x: 'Tax', y: -695 },
    { x: 'Net Profit' }
];
var chart = new ej.charts.Chart({
    primaryXAxis: {
        valueType: 'Category',

    },
    series: [
        {
            dataSource: chartData,
            xName: 'x', yName: 'y', intermediateSumIndexes: [4], sumIndexes: [8],
            //Series type as Waterfall
            type: 'Waterfall',
        }
    ],
}, '#element');

