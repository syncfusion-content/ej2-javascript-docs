


import { Chart, CandleSeries, Category, DateTime } from '@syncfusion/ej2-charts';
Chart.Inject(CandleSeries, Category, DateTime);
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
            // Series type as candle series
            type: 'Candle'
        }
    ],
}, '#element');



