import { Chart, StackingBarSeries } from '@syncfusion/ej2-charts';
import { stackedData } from './datasource.ts';
Chart.Inject(StackingBarSeries);

let chart: Chart = new Chart({
    primaryXAxis: {
        title: 'Months'
    },
    primaryYAxis:
    {
        title: 'Percentage (%)',
        labelFormat: '{value}%'
    },
    series: [
        {
            type: 'StackingBar100',
            dataSource: stackedData, 
            xName: 'x', 
            yName: 'y',
            name: 'Apple',
            accessibility: {
                accessibilityDescription: 'This series represents the sales data for Apple.',
                accessibilityRole: 'series',
                accessibilityDescriptionFormat: 'For year: ${point.x}, the sales percentage of Apple is ${point.y}%.'
            }
        }, 
        {
            type: 'StackingBar100',
            dataSource: stackedData, 
            xName: 'x', 
            yName: 'y1',
            name: 'Orange',
            accessibility: {
                accessibilityDescription: 'This series represents the sales data for Orange.',
                accessibilityRole: 'series',
                accessibilityDescriptionFormat: 'For year: ${point.x}, the sales percentage of Orange is ${point.y}%.'
            }
        }, 
        {
            type: 'StackingBar100',
            dataSource: stackedData, 
            xName: 'x', 
            yName: 'y2',
            name: 'Wastage',
            accessibility: {
                accessibilityDescription: 'This series represents the wastage data for the sales.',
                accessibilityRole: 'series',
                accessibilityDescriptionFormat: 'For year: ${point.x}, the wastage percentage is ${point.y}%.'
            }
        }
    ],
    title: 'Sales Comparison'
}, '#element');