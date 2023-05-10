


import { Chart, LineSeries, Crosshair, DateTime, Legend } from '@syncfusion/ej2-charts';
Chart.Inject(LineSeries, DateTime, Crosshair, Legend);

let series1: Object[] = [];
let series2: Object[] = [];
let point1: Object;
let point2: Object;
let value: number = 60;
let value1: number = 50;
let i: number;
for (i = 1; i < 250; i++) {
    if (Math.random() > .5) {
        value += Math.random();
        value1 += Math.random();
    } else {
        value -= Math.random();
        value1 -= Math.random();
    }
    point1 = { x: new Date(2000, i, 1), y: value };
    point2 = { x: new Date(2000, i, 1), y: value1 };
    series1.push(point1);
    series2.push(point2);
}
let chart: Chart = new Chart({
        primaryXAxis: {
            majorGridLines: { width: 0 },
            valueType: 'DateTime',
            crosshairTooltip: { enable: true },
            labelFormat: 'yMMM'
        },
        primaryYAxis:
        {
            minimum: 10, maximum: 90, interval: 10,
            title: 'Temperature (°F)',
            rowIndex: 0,
            crosshairTooltip: { enable: true }
        },
        axes: [
            {
                majorGridLines: { width: 0 },
                rowIndex: 0, opposedPosition: true,
                minimum: 0, maximum: 160, interval: 20,
                name: 'yAxis', title: 'Rainfall (MM)',
                crosshairTooltip: { enable: true }
            }
        ],
        series: [
            {
                type: 'Line', width: 2, name: 'Temperature',
                dataSource: series1, xName: 'x', yName: 'y'
            },
            {
                type: 'Line', name: 'Rainfall', width: 2,
                dataSource: series2, xName: 'x', yName: 'y',
                yAxisName: 'yAxis'
            }
        ],
        //crosshair for chart
        crosshair: { enable: true },
        legendSettings: { visible: true },
        title: 'Weather Condition'
}, '#element');



