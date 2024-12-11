import { Chart, Category, Legend, Tooltip, StackingLineSeries } from '@syncfusion/ej2-charts';
import { chartData } from './datasource.ts';
Chart.Inject(StackingLineSeries, Category, Legend, Tooltip);

/**
 * Sample for StackedLine Series
 */

let chart: Chart = new Chart({
    //Initializing Primary X Axis
    primaryXAxis: {
        interval: 1, 
        valueType: 'Category'
    },
    //Initializing Primary Y Axis
    primaryYAxis:
    {
        title: 'Expense',
        interval: 100,
        labelFormat: '${value}'
    },
    chartArea: { border: { width: 0 } },
    //Initializing Chart Series
    series: [
        {
            type: 'StackingLine', dataSource: chartData, marker: { visible: true },
            xName: 'x', yName: 'y', name: 'John',
            accessibility: {
                accessibilityDescription: 'This series shows the monthly spending habits of John across various categories.',
                accessibilityRole: 'series',
                accessibilityDescriptionFormat: 'Category: ${point.x}, John Expense: ${point.y}'
            }
        },
        {
            type: 'StackingLine', dataSource: chartData, marker: { visible: true },
            xName: 'x', yName: 'y1', name: 'Peter',
            accessibility: {
                accessibilityDescription: 'This series shows the monthly spending habits of Peter across various categories.',
                accessibilityRole: 'series',
                accessibilityDescriptionFormat: 'Category: ${point.x}, Peter Expense: ${point.y}'
            }
        },
        {
            type: 'StackingLine', dataSource: chartData, marker: { visible: true },
            xName: 'x', yName: 'y2', name: 'Steve',
            accessibility: {
                accessibilityDescription: 'This series shows the monthly spending habits of Steve across various categories.',
                accessibilityRole: 'series',
                accessibilityDescriptionFormat: 'Category: ${point.x}, Steve Expense: ${point.y}'
            }
        },
        {
            type: 'StackingLine', dataSource: chartData, marker: { visible: true },
            xName: 'x', yName: 'y3', name: 'Charle',
            accessibility: {
                accessibilityDescription: 'This series shows the monthly spending habits of Charle across various categories.',
                accessibilityRole: 'series',
                accessibilityDescriptionFormat: 'Category: ${point.x}, Charle Expense: ${point.y}'
            }
        }
    ],
    //Initializing User Interaction Tooltip
    tooltip: {
        enable: true
    }
}, '#element');



