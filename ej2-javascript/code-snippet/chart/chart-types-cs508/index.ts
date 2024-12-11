import { Chart, WaterfallSeries, Category } from '@syncfusion/ej2-charts';
import { chartData } from './datasource.ts';
Chart.Inject(WaterfallSeries, Category);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category'
    },
    series: [
        {
            dataSource: chartData,
            xName: 'x', yName: 'y', 
            intermediateSumIndexes: [4], 
            sumIndexes: [8],
            type: 'Waterfall',
            accessibility: {
                accessibilityDescription: 'This is a waterfall chart displaying the financial contributions of various departments within a company.',
                accessibilityRole: 'series',
                accessibilityDescriptionFormat: 'The department ${point.x} shows a financial value of ${point.y}'
            }
        }
    ]
}, '#element');