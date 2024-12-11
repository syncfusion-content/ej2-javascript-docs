import { Chart, AreaSeries } from '@syncfusion/ej2-charts';
import { chartData } from './datasource.ts';
Chart.Inject(AreaSeries);

let chart: Chart = new Chart({
    primaryXAxis: {
        title: 'Year',
        minimum: 1900, 
        maximum: 2000, 
        interval: 10,
        edgeLabelPlacement: 'Shift'
    },
    primaryYAxis: {
        minimum: 2, 
        maximum: 5, 
        interval: 0.5,
        title: 'Sales Amount in Millions'
    },
    series:[{
        dataSource: chartData,
        xName: 'x', yName: 'y',
        type: 'Area',
        marker: { visible: true },
        accessibility: {
            accessibilityDescription: 'This area chart shows the average sales comparison over the years.',
            accessibilityRole: 'series',
            accessibilityDescriptionFormat: 'For the year ${point.x}, the sales amount is ${point.y} million.'
        }
    }],
    title: 'Average Sales Comparison'
}, '#element');