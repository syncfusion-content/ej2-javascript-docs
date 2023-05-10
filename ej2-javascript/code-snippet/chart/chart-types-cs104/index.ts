


import { Chart, LineSeries } from '@syncfusion/ej2-charts';
Chart.Inject(LineSeries);
let chartData: any[] = [
    { x: 2005, y: 28 }, { x: 2006, y: 25 },{ x: 2007, y: 26 }, { x: 2008, y: 27 },
    { x: 2009, y: 32 }, { x: 2010, y: 35 }, { x: 2011, y: 30 }
];
let chart: Chart = new Chart({
    series:[{
        dataSource: chartData,
        xName: 'x', yName: 'y',
        //Series type as line
        type: 'Line'
    }],
}, '#element');



