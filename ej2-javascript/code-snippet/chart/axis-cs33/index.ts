


import { Chart, DateTime, LineSeries } from '@syncfusion/ej2-charts';
Chart.Inject(LineSeries, DateTime);
let chartData: any[] = [
    { x: new Date(2000, 6, 11), y: 10 }, { x: new Date(2002, 3, 7), y: 30 },
    { x: new Date(2004, 3, 6), y: 15 }, { x: new Date(2006, 3, 30), y: 65 },
    { x: new Date(2008, 3, 8), y: 90 }, { x: new Date(2010, 3, 8), y: 85 }
];
let chart: Chart = new Chart({
    primaryXAxis: {
        // Date time scale in primary X Axis
        valueType: 'DateTime',
        title: 'Sales Across Years',
        labelFormat: 'yMMM'
    },
    primaryYAxis: {
        title: 'Sales Amount in millions(USD)'
    },
    series:[{
        dataSource: chartData,
        xName: 'x', yName: 'y',
        name: 'Sales', type: 'Line'
    }],
    title: 'Average Sales Comparison'
}, '#element');



