import { Chart, BarSeries, Category } from '@syncfusion/ej2-charts';
import { chartData } from './datasource.ts';
Chart.Inject(BarSeries, Category);

let chart: Chart = new Chart({
    primaryXAxis: {
        minimum: 2005, 
        maximum: 2012, 
        interval: 1,
        title: 'Year'
    },
    primaryYAxis: {
        minimum: 3, 
        maximum: 12,
        interval: 1, 
        title: 'Percentage',
        labelFormat: '{value}%'
    },
   series:[{
        dataSource: chartData,
        xName: 'x', yName: 'y',
        type: 'Bar',
        accessibility: {
            accessibilityDescription: 'This bar chart shows unemployment rates for the years 2006 to 2011.',
            accessibilityRole: 'series',
            accessibilityDescriptionFormat: 'Year: ${point.x}, Unemployment Rate: ${point.y}%'
        }
    }],
    title: 'Unemployment rate (%)'
}, '#element');



