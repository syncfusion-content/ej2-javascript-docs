


import { Chart, DateTime, LineSeries } from '@syncfusion/ej2-charts';
Chart.Inject(LineSeries, DateTime);
let chartData: any[] = [
    { x: new Date(2000, 6, 11), y: 10 }, { x: new Date(2002, 3, 7), y: 30 },
    { x: new Date(2004, 3, 6), y: 15 }, { x: new Date(2006, 3, 30), y: 65 },
    { x: new Date(2008, 3, 8), y: 90 }, { x: new Date(2010, 3, 8), y: 85 }
];
let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'DateTime',
        title: 'Sales Across Years',
        labelFormat: 'yMMM',
        //Edgelabelplacement for primary x axis
        edgeLabelPlacement: 'Shift',
        minimum: new Date(2000, 6, 1),
        maximum: new Date(2010, 6, 1)
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



