


import { Chart, HiloSeries,Category } from '@syncfusion/ej2-charts';
Chart.Inject(HiloSeries, Category);
let chartData: any[] = [
    { x: 'Jan', low: 87, high: 200 }, { x: 'Feb', low: 45, high: 135 },
    { x: 'Mar', low: 19, high: 85 }, { x: 'Apr', low: 31, high: 108 },
    { x: 'May', low: 27, high: 80 }, { x: 'June', low: 84, high: 130 },
    { x: 'July', low: 77, high: 150 }, { x: 'Aug', low: 54, high: 125 },
    { x: 'Sep', low: 60, high: 155 }, { x: 'Oct', low: 60, high: 180 },
    { x: 'Nov', low: 88, high: 180 }, { x: 'Dec', low: 84, high: 230 }
];
let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category',
    },
    series:[
        {
            dataSource: chartData, fill: 'blue',
            xName: 'x', high: 'high', low: 'low',
            //Series type as Hilo
            type: 'Hilo', bearFillColor: 'red', bullFillColor:'green'
        }
    ],
}, '#element');



