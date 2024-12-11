import { Chart, StackingBarSeries, Category, Legend } from '@syncfusion/ej2-charts';
import { stackedData } from './datasource.ts';
Chart.Inject(StackingBarSeries, Category, Legend);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category',
        title: 'Months'
    },
    primaryYAxis:
    {
        title: 'Percentage (%)',
        minimum: -20,
        maximum: 100,
        labelFormat: '{value}%',
        edgeLabelPlacement: 'Shift'
    },
    series: [
        {
            type: 'StackingBar', name: 'Apple',
            dataSource: stackedData, xName: 'x', yName: 'y',
            accessibility: {
                accessibilityDescription: 'This series represents the sales data for Apple.',
                accessibilityRole: 'series',
                accessibilityDescriptionFormat: 'For month: ${point.x}, the sales percentage of Apple is ${point.y}%.'
            }
        }, 
        {
            type: 'StackingBar', name: 'Orange',
            dataSource: stackedData, xName: 'x', yName: 'y1',
            accessibility: {
                accessibilityDescription: 'This series represents the sales data for Orange.',
                accessibilityRole: 'series',
                accessibilityDescriptionFormat: 'For month: ${point.x}, the sales percentage of Orange is ${point.y}%.'
            }
        }, 
        {
            type: 'StackingBar', name: 'Wastage',
            dataSource: stackedData, xName: 'x', yName: 'y2',
            accessibility: {
                accessibilityDescription: 'This series represents the wastage data for the sales.',
                accessibilityRole: 'series',
                accessibilityDescriptionFormat: 'For month: ${point.x}, the wastage percentage is ${point.y}%.'
            }
        }
    ],
    title: 'Sales Comparison'
}, '#element');