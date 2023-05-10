


import { Chart, Category, ColumnSeries, LineSeries } from '@syncfusion/ej2-charts';
Chart.Inject(ColumnSeries, Category, LineSeries);
let chartData: any[] = [
    { x: 'Jan', y: 15, y1: 33 }, { x: 'Feb', y: 20, y1: 31 }, { x: 'Mar', y: 35, y1: 30 },
    { x: 'Apr', y: 40, y1: 28 }, { x: 'May', y: 80, y1: 29 }, { x: 'Jun', y: 70, y1: 30 },
    { x: 'Jul', y: 65, y1: 33 }, { x: 'Aug', y: 55, y1: 32 }, { x: 'Sep', y: 50, y1: 34 },
    { x: 'Oct', y: 30, y1: 32 }, { x: 'Nov', y: 35, y1: 32 }, { x: 'Dec', y: 35, y1: 31 }
];
let chart: Chart = new Chart({
    primaryXAxis: {
        title: 'Months',
        valueType: 'Category',
        interval: 1
    },
    primaryYAxis: {
        minimum: 0, maximum: 90, interval: 20,
        lineStyle: { width: 0 },
        title: 'Temperature (Fahrenheit)',
        labelFormat: '{value}°F'
    },
    // Rows for chart axis
    rows:[
        {
            height: '50%'
        },{
            height: '50%'
        }
    ],
    axes:[
        {
            majorGridLines: { width: 0 },
            rowIndex: 1, opposedPosition: true,
            lineStyle: { width: 0 },
            minimum: 24, maximum: 36, interval: 4,
            name: 'yAxis', title: 'Temperature (Celsius)',
            labelFormat: '{value}°C'
        }
    ],
    series:[{
        dataSource: chartData,
        xName: 'x', yName: 'y',
        name: 'Germany', type: 'Column'
    },{
        dataSource: chartData, width:2,
        xName: 'x', yName: 'y1', yAxisName: 'yAxis',
        name: 'Japan', type: 'Line',
        marker: { visible: true, width: 10, height: 10, border: { width: 2, color: '#F8AB1D' } }
    }],
    title: 'Weather Condition'
}, '#element');



