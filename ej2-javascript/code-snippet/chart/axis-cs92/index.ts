


import { Chart, Category, ColumnSeries, LineSeries, DataLabel, StripLine } from '@syncfusion/ej2-charts';
Chart.Inject(ColumnSeries, Category, LineSeries, DataLabel, StripLine);
let chartData: any[] = [{x: 1, y: 20},{x: 2, y: 22},{x: 3, y: 0},{x: 4, y: 12},{x: 5, y: 5},
   {x: 6, y: 15},{x: 7, y: 6},{x: 8, y: 12},{x: 9, y: 20},{x: 10, y: 7}];
let chart: Chart = new Chart({
   primaryYAxis: {
       stripLines:[
            { start: 15, end: 22 },
            { start: 8, end: 15 },
            { start: 0, end: 8 }]
    },
    series:[{
        dataSource: chartData,
        xName: 'x', yName: 'y', type: 'Column'
        }],
}, '#element');



