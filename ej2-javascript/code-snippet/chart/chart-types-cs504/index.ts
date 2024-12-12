import { Chart, HiloSeries, Category } from '@syncfusion/ej2-charts';
import { chartData } from './datasource.ts';
Chart.Inject(HiloSeries, Category);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category',
        title: 'Months'
    },
    primaryYAxis:
    {
        labelFormat: '{value}mm',
        edgeLabelPlacement: 'Shift',
        title: 'Rainfall'
    },
    series:[
        {
            dataSource: chartData,
            xName: 'x', high: 'high', low: 'low',
            type: 'Hilo',
            accessibility: {
                accessibilityDescription: 'This chart shows the maximum and minimum rainfall in millimeters for each month.',
                accessibilityRole: 'series',
                accessibilityDescriptionFormat: 'In ${point.x}, the minimum rainfall was ${point.low}mm and the maximum rainfall was ${point.high}mm.'
            }
        }
    ],
    title: 'Maximum and Minimum Rainfall'
}, '#element');