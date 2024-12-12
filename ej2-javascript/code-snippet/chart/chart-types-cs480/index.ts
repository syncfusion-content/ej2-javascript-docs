import { Chart, RangeColumnSeries, Category } from '@syncfusion/ej2-charts';
import { data1, data2 } from './datasource.ts';
Chart.Inject(RangeColumnSeries, Category);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category',
        title: 'Month'
    },
    primaryYAxis: {
        title: 'Temperature(Celsius)',
        labelFormat: '{value}°C'
    },
    series: [
        {
            type: 'RangeColumn',
            dataSource: data1, 
            xName: 'x', 
            high: 'high', 
            low: 'low',
            accessibility: {
                accessibilityDescription: 'Range column representing the temperature range for City A per month.',
                accessibilityRole: 'series',
                accessibilityDescriptionFormat: 'City A: High ${point.high}°C, Low ${point.low}°C'
            }
        }, 
        {
            type: 'RangeColumn',
            dataSource: data2, 
            xName: 'x', 
            high: 'high', 
            low: 'low',
            accessibility: {
                accessibilityDescription: 'Range column representing the temperature range for City B per month.',
                accessibilityRole: 'series',
                accessibilityDescriptionFormat: 'City B: High ${point.high}°C, Low ${point.low}°C'
            }
        }
    ],
    title: 'Maximum and Minimum Temperature'
}, '#element');



