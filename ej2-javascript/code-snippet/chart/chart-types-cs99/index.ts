


import { Chart, HiloOpenCloseSeries, Category } from '@syncfusion/ej2-charts';
Chart.Inject(HiloOpenCloseSeries, Category);
let chartData: any[] = [
    { x: 'Jan', open: 120, high: 160, low: 100, close: 140 },
    { x: 'Feb', open: 150, high: 190, low: 130, close: 170 },
    { x: 'Mar', open: 130, high: 170, low: 110, close: 150 },
    { x: 'Apr', open: 160, high: 180, low: 120, close: 140 },
    { x: 'May', open: 150, high: 170, low: 110, close: 130 }
];
let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category',
    },
    series:[
        {
            dataSource: chartData,
            xName: 'x', open: 'open', close: 'close', high: 'high', low: 'low',
            // Series type as HiloOpenClose
            type: 'HiloOpenClose'
        }
    ],
    title: 'Financial Analysis'
}, '#element');



