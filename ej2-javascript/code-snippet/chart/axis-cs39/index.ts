


import { Chart, DateTime, LineSeries, Logarithmic } from '@syncfusion/ej2-charts';
Chart.Inject(LineSeries, DateTime, Logarithmic);
let chartData: any[] = [
    { x: new Date(1995, 0, 1), y: 80 }, { x: new Date(1996, 0, 1), y: 200 },
    { x: new Date(1997, 0, 1), y: 400 }, { x: new Date(1998, 0, 1), y: 600 },
    { x: new Date(1999, 0, 1), y: 700 }, { x: new Date(2000, 0, 1), y: 1400 },
    { x: new Date(2001, 0, 1), y: 2000 }, { x: new Date(2002, 0, 1), y: 4000 },
    { x: new Date(2003, 0, 1), y: 6000 }, { x: new Date(2004, 0, 1), y: 8000 },
    { x: new Date(2005, 0, 1), y: 11000 }
];
let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'DateTime',
        title: 'Years',
        labelFormat: 'y'
    },
    primaryYAxis: {
        // Logarithmic scale in primary X Axis
        valueType: 'Logarithmic',
        title: 'Profit'
    },
    series:[{
        dataSource: chartData,
        xName: 'x', yName: 'y',
        name: 'Product X', type: 'Line'
    }],
    title: 'Product X Growth [1995-2005]'
}, '#element');



