import { Chart, StackingStepAreaSeries, Legend } from '@syncfusion/ej2-charts';
import { stackedData } from './datasource.ts';
Chart.Inject(StackingStepAreaSeries, Legend);

let chart: Chart = new Chart({
    primaryXAxis: {
        title: 'Years',
        edgeLabelPlacement: 'Shift',
        majorTickLines: { width: 0 }
    },
    primaryYAxis:
    {
        title: 'Spend in Billions',
        minimum: 0,
        maximum: 4,
        interval: 1,
        labelFormat: '{value}B',
        majorTickLines: { width: 0 }
    },
    series: [
        {
            dataSource: stackedData, xName: 'x', yName: 'y',
            type: 'StackingStepArea', name: 'Organic', marker: { visible: true },
            accessibility: {
                accessibilityDescription: 'This series shows the sales trend for organic products from 2000 to 2009.',
                accessibilityRole: 'series',
                accessibilityDescriptionFormat: 'In ${point.x}, the sales for Organic were ${point.y} billion.'
            }
        },
        {
            dataSource: stackedData, xName: 'x', yName: 'y1',
            type: 'StackingStepArea', name: 'Fair-trade', marker: { visible: true },
            accessibility: {
                accessibilityDescription: 'This series shows the sales trend for fair-trade products from 2000 to 2009.',
                accessibilityRole: 'series',
                accessibilityDescriptionFormat: 'In ${point.x}, the sales for Fair-trade were ${point.y} billion.'
            }
        },
        {
            dataSource: stackedData, xName: 'x', yName: 'y2',
            type: 'StackingStepArea', name: 'Others', marker: { visible: true },
            accessibility: {
                accessibilityDescription: 'This series shows the sales trend for other ethical produce categories from 2000 to 2009.',
                accessibilityRole: 'series',
                accessibilityDescriptionFormat: 'In ${point.x}, the sales for Others were ${point.y} billion.'
            }
        }
    ],
    title: 'Trend in Sales of Ethical Produce'
}, '#element');