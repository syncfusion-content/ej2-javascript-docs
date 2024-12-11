import { Chart, SplineRangeAreaSeries, Category, Legend } from '@syncfusion/ej2-charts';
import { splinedata } from './datasource.ts';
Chart.Inject(SplineRangeAreaSeries, Category, Legend);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category',
        title: 'Month',
        edgeLabelPlacement: 'Shift',
        majorGridLines: { width: 0 }
    },
    primaryYAxis: {
        title: 'Temperature',
        labelFormat: '{value}˚C',
        lineStyle: { width: 0 },
        minimum: 0,
        maximum: 40,
        majorTickLines: { width: 0 }
    },
    series: [
        {
            type: 'SplineRangeArea',
            dataSource: splinedata,
            xName: 'x', high: 'high', 
            low: 'low', name: 'England',
            marker: { visible: true },
            accessibility: {
                accessibilityDescription: 'Temperature range in England for each month',
                accessibilityRole: 'series',
                accessibilityDescriptionFormat: 'In ${point.x}, the temperature range in England was from ${point.low}°C to ${point.high}°C.'
            }
        },
        {
            type: 'SplineRangeArea',
            dataSource: splinedata,
            xName: 'x', high: 'high1', 
            low: 'low1', name: 'India',
            marker: { visible: true },
            accessibility: {
                accessibilityDescription: 'Temperature range in India for each month',
                accessibilityRole: 'series',
                accessibilityDescriptionFormat: 'In ${point.x}, the temperature range in India was from ${point.low}°C to ${point.high}°C.'
            }
        }
    ],
    title: 'Monthly Temperature Range'
}, '#element');



