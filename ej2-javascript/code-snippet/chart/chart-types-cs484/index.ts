import { Chart, SplineSeries, Category } from '@syncfusion/ej2-charts';
import { splineData } from './datasource.ts';
Chart.Inject(SplineSeries, Category);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category',
        title: 'Month'
    },
    primaryYAxis: {
        minimum: -5, 
        maximum: 30, 
        interval: 5,
        title: 'Temperature in Celsius',
        labelFormat: '{value}°C'
    },
    series:[{
        dataSource: splineData,
        xName: 'x', yName: 'y',
        type: 'Spline',
        marker: { visible: true },
        accessibility: {
            accessibilityDescription: 'Spline series represents the monthly average temperature of the year',
            accessibilityRole: 'series',
            accessibilityDescriptionFormat: 'In ${point.x}, the temperature was ${point.y}°C.'
        }
    }],
    title: 'Climate Graph-2012'
}, '#element');