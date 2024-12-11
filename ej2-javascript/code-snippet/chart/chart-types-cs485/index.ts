import { Chart, StackingAreaSeries, DateTime, Legend } from '@syncfusion/ej2-charts';
import { stackedData } from './datasource.ts';
Chart.Inject(StackingAreaSeries, DateTime, Legend);

let chart: Chart = new Chart({
    primaryXAxis: {
        title: 'Years',
        valueType: 'DateTime',
        intervalType: 'Years',
        labelFormat: 'y',
        edgeLabelPlacement: 'Shift',
        majorTickLines: { width: 0 }
    },
    primaryYAxis:
    {
        title: 'Spend in Billions',
        minimum: 0,
        maximum: 7,
        interval: 1,
        labelFormat: '{value}B',
        majorTickLines: { width: 0 }
    },
    series: [
        {
            dataSource: stackedData, xName: 'x', yName: 'y',
            type: 'StackingArea', name: 'Organic', marker: { visible: true },
            accessibility: {
                accessibilityDescription: 'This series shows the sales trend for organic products from 2000 to 2014.',
                accessibilityRole: 'series',
                accessibilityDescriptionFormat: 'In ${point.x}, the sales for Organic were ${point.y} billion.'
            }
        }, 
        {
            dataSource: stackedData, xName: 'x', yName: 'y1',
            type: 'StackingArea', name: 'Fair-trade', marker: { visible: true },
            accessibility: {
                accessibilityDescription: 'This series shows the sales trend for fair-trade products from 2000 to 2014.',
                accessibilityRole: 'series',
                accessibilityDescriptionFormat: 'In ${point.x}, the sales for Fair-trade were ${point.y} billion.'
            }
        }, 
        {
            dataSource: stackedData, xName: 'x', yName: 'y2',
            type: 'StackingArea', name: 'Veg Alternatives', marker: { visible: true },
            accessibility: {
                accessibilityDescription: 'This series shows the sales trend for vegetarian alternatives from 2000 to 2014.',
                accessibilityRole: 'series',
                accessibilityDescriptionFormat: 'In ${point.x}, the sales for Veg Alternatives were ${point.y} billion.'
            }
        }, 
        {
            dataSource: stackedData, xName: 'x', yName: 'y3',
            type: 'StackingArea', name: 'Others', marker: { visible: true },
            accessibility: {
                accessibilityDescription: 'This series shows the sales trend for other ethical produce categories from 2000 to 2014.',
                accessibilityRole: 'series',
                accessibilityDescriptionFormat: 'In ${point.x}, the sales for Others were ${point.y} billion.'
            }
        }
    ],
    title: 'Trend in Sales of Ethical Produce'
}, '#element');