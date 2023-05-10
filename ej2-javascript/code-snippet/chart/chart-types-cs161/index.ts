


import { Chart, WaterfallSeries, Category, DataLabel } from '@syncfusion/ej2-charts';
Chart.Inject(WaterfallSeries, Category, DataLabel);
let chartData: any[] = [
    { x: 'Income', y: 4711 }, { x: 'Sales', y: -1015 },
    { x: 'Development', y: -688 },
    { x: 'Revenue', y: 1030 }, { x: 'Balance' },
    { x: 'Administrative', y: -780 },
    { x: 'Expense', y: -361 }, { x: 'Tax', y: -695 },
    { x: 'Net Profit' }
];
let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category',
    },
    series: [
        {
            dataSource: chartData,
            xName: 'x', yName: 'y', intermediateSumIndexes: [4], sumIndexes: [8],
            //Series type as Waterfall
            type: 'Waterfall', summaryFillColor: "black", negativeFillColor:'green'
        }
    ],
}, '#element');



