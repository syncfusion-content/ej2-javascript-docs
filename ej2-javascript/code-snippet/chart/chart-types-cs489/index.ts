import { Chart, StackingColumnSeries, DateTime, Legend } from '@syncfusion/ej2-charts';
import { stackedData } from './datasource.ts';
Chart.Inject(StackingColumnSeries, DateTime, Legend);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'DateTime',
        title: 'Years',
        interval: 1,
        labelFormat: 'y'
    },
    primaryYAxis:
    {
        title: 'GDP (%) Per Annum',
        rangePadding: 'None',
        labelFormat: '{value}%',
    },
    series: [
        {
            dataSource: stackedData, xName: 'x', yName: 'y',
            type: 'StackingColumn100', name: 'UK',
            accessibility: {
                accessibilityDescription: 'This series represents the annual GDP growth percentage for the UK from 2006 to 2012.',
                accessibilityRole: 'series',
                accessibilityDescriptionFormat: 'Year: ${point.x}, UK GDP Growth: ${point.y}%'
            }
        },
        {
            dataSource: stackedData, xName: 'x', yName: 'y1',
            type: 'StackingColumn100', name: 'Germany',
            accessibility: {
                accessibilityDescription: 'This series represents the annual GDP growth percentage for the Germany from 2006 to 2012.',
                accessibilityRole: 'series',
                accessibilityDescriptionFormat: 'Year: ${point.x}, Germany GDP Growth: ${point.y}%'
            }
        },
        {
            dataSource: stackedData, xName: 'x', yName: 'y2',
            type: 'StackingColumn100', name: 'France',
            accessibility: {
                accessibilityDescription: 'This series represents the annual GDP growth percentage for the France from 2006 to 2012.',
                accessibilityRole: 'series',
                accessibilityDescriptionFormat: 'Year: ${point.x}, France GDP Growth: ${point.y}%'
            }
        },
        {
            dataSource: stackedData, xName: 'x', yName: 'y3',
            type: 'StackingColumn100', name: 'Italy',
            accessibility: {
                accessibilityDescription: 'This series represents the annual GDP growth percentage for the Italy from 2006 to 2012.',
                accessibilityRole: 'series',
                accessibilityDescriptionFormat: 'Year: ${point.x}, Italy GDP Growth: ${point.y}%'
            }
        }
    ],
    title: 'Gross Domestic Product Growth'
}, '#element');