var chartData = [
     { x: 'Income', y: 4711 }, { x: 'Sales', y: -1015 },
     { x: 'Development', y: -688 },
     { x: 'Revenue', y: 1030 }, {x: 'Balance'},
     { x: 'Administrative', y: -780 },
     { x: 'Expense', y: -361 }, { x: 'Tax', y: -695 },
     { x: 'Net Profit'}
];
var chart = new ej.charts.Chart({
    primaryXAxis: {
        valueType: 'Category',
        majorGridLines: {width: 0},
    },
    primaryYAxis:
    {
        labelFormat: '${value}M',
        minimum: 0, maximum: 5500, interval: 500,
        majorGridLines: {width: 0},
        lineStyle: { width: 0},
        majorTickLines: { width: 0}
    },
    series:[
        {
            dataSource: chartData, width:2,
            xName: 'x', yName:'y', intermediateSumIndexes: [4], sumIndexes: [8],
            name: 'USA',columnWidth: 0.6,
            //Series type as Waterfall
            type: 'Waterfall', animation: { enable: true },
             marker: {
                dataLabel: { visible: true, position: 'Outer' }
            }, summaryFillColor: 'red',
            negativeFillColor: 'green',
            connector: { color: 'blue', width: 1.5 },
        }
    ],
    title: 'Company Revenue and Profit'
}, '#element');


