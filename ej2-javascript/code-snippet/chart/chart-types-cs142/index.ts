


import { Chart, StackingColumnSeries, Category } from '@syncfusion/ej2-charts';
import { stackedData } from './datasource.ts';
Chart.Inject(StackingColumnSeries, Category);

let chart: Chart = new Chart({
        series: [
            {
                dataSource: stackedData, xName: 'x', yName: 'y',
                //Series type as stacked column
                type: 'StackingColumn', border: { width: 1.5, color: 'blue'}
            }, {
                dataSource: stackedData, xName: 'x', yName: 'y1',
                 type: 'StackingColumn',border: { width: 1.5, color: 'yellow'}
            }, {
                dataSource: stackedData, xName: 'x', yName: 'y2',
                 type: 'StackingColumn',border: { width: 1.5, color: 'red'}

            }
        ],

}, '#element');



