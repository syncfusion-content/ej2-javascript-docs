import { Chart, StackingColumnSeries, Category, Legend } from '@syncfusion/ej2-charts';
import { stackedData } from './datasource.ts';
Chart.Inject(StackingColumnSeries, Category, Legend);

let chart: Chart = new Chart({
    primaryXAxis: {
        title: 'Years',
        interval: 1,
        valueType: 'Category'
    },
    primaryYAxis:
    {
        title: 'Sales in Billions',
        minimum: 0,
        maximum: 700,
        interval: 100,
        labelFormat: '{value}B'
    },
    series: [
        {
            dataSource: stackedData, xName: 'x', yName: 'y',
            type: 'StackingColumn', name: 'UK',
            accessibility: {
                accessibilityDescription: 'Stacked column series showing mobile game sales in billions for the United Kingdom from 2014 to 2020.',
                accessibilityRole: 'series',
                accessibilityDescriptionFormat: 'Year: ${point.x}, UK Sales: ${point.y} billion'
            }
        }, 
        {
            dataSource: stackedData, xName: 'x', yName: 'y1',
            type: 'StackingColumn', name: 'Germany',
            accessibility: {
                accessibilityDescription: 'Stacked column series showing mobile game sales in billions for Germany from 2014 to 2020.',
                accessibilityRole: 'series',
                accessibilityDescriptionFormat: 'Year: ${point.x}, Germany Sales: ${point.y} billion'
            }
        }, 
        {
            dataSource: stackedData, xName: 'x', yName: 'y2',
            type: 'StackingColumn', name: 'France',
            accessibility: {
                accessibilityDescription: 'Stacked column series showing mobile game sales in billions for France from 2014 to 2020.',
                accessibilityRole: 'series',
                accessibilityDescriptionFormat: 'Year: ${point.x}, France Sales: ${point.y} billion'
            }
        }, 
        {
            dataSource: stackedData, xName: 'x', yName: 'y3',
            type: 'StackingColumn', name: 'Italy',
            accessibility: {
                accessibilityDescription: 'Stacked column series showing mobile game sales in billions for Italy from 2014 to 2020.',
                accessibilityRole: 'series',
                accessibilityDescriptionFormat: 'Year: ${point.x}, Italy Sales: ${point.y} billion'
            }
        }
    ],
    title: 'Mobile Game Market by Country'
}, '#element');