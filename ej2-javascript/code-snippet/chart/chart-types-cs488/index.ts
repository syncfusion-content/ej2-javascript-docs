import { Chart, StackingAreaSeries, DateTime, Legend } from '@syncfusion/ej2-charts';
import { stackedData } from './datasource.ts';
Chart.Inject(StackingAreaSeries, DateTime, Legend);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'DateTime',
        title: 'Years',
        intervalType: 'Years',
        labelFormat: 'y',
        edgeLabelPlacement: 'Shift'
    },
    primaryYAxis: {
        title: 'Temperature (%)',
        labelFormat: '{value}%',
        rangePadding: 'None'
    },
    series: [
        {
            dataSource: stackedData, xName: 'x', yName: 'y',
            type: 'StackingArea100', name: 'USA', marker: { visible: true },
            accessibility: {
                accessibilityDescription: 'This series represents the annual temperature percentage recorded in the USA from 2006 to 2014.',
                accessibilityRole: 'series',
                accessibilityDescriptionFormat: 'Year: ${point.x}, USA Temperature: ${point.y}%'
            }
        }, 
        {
            dataSource: stackedData, xName: 'x', yName: 'y1',
            type: 'StackingArea100', name: 'UK', marker: { visible: true },
            accessibility: {
                accessibilityDescription: 'This series represents the annual temperature percentage recorded in the UK from 2006 to 2014.',
                accessibilityRole: 'series',
                accessibilityDescriptionFormat: 'Year: ${point.x}, UK Temperature: ${point.y}%'
            }
        }, 
        {
            dataSource: stackedData, xName: 'x', yName: 'y2',
            type: 'StackingArea100', name: 'Canada', marker: { visible: true },
            accessibility: {
                accessibilityDescription: 'This series represents the annual temperature percentage recorded in the Canada from 2006 to 2014.',
                accessibilityRole: 'series',
                accessibilityDescriptionFormat: 'Year: ${point.x}, Canada Temperature: ${point.y}%'
            }
        },
        {
            dataSource: stackedData, xName: 'x', yName: 'y3',
            type: 'StackingArea100', name: 'China', marker: { visible: true },
            accessibility: {
                accessibilityDescription: 'This series represents the annual temperature percentage recorded in the China from 2006 to 2014.',
                accessibilityRole: 'series',
                accessibilityDescriptionFormat: 'Year: ${point.x}, China Temperature: ${point.y}%'
            }
        }
    ],
    title: 'Annual Temperature Comparison'
}, '#element');