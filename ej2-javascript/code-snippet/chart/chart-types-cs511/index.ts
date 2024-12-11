import { Chart, SplineSeries, Category } from '@syncfusion/ej2-charts';
import { chartData } from './datasource.ts';
Chart.Inject(SplineSeries, Category);

let chart: Chart = new Chart({
    primaryXAxis: {
        title: 'Month',
        valueType: 'Category'
    },
    primaryYAxis: {
        minimum: -5, maximum: 25, interval: 10,
        labelFormat: '{value}˚C',
        majorGridLines: { width : 0 }
    },
    series:[{
        dataSource: chartData, 
        xName: 'x', yName: 'y',
        type: 'Spline', width:2,
        marker: { visible: true },
        accessibility: {
            accessibilityDescription: 'This series represents the temperature data for the year 2012, shown in a spline curve.',
            accessibilityRole: 'series',
            accessibilityDescriptionFormat: 'For the month of ${point.x}, the temperature is ${point.y}˚C.'
        }
    }],
    isTransposed: true,
    title: 'Climate Graph-2012'
}, '#element');