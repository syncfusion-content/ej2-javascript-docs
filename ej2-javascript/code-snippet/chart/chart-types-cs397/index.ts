import { Chart, WaterfallSeries, Category, DataLabel } from '@syncfusion/ej2-charts';
import { chartData } from './datasource.ts';
Chart.Inject(WaterfallSeries, Category, DataLabel);

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
            emptyPointSettings: {
                mode: 'Average',
                fill: 'red',
                border: { width: 2, color: 'green' }
            }
        }
    ]
}, '#element');