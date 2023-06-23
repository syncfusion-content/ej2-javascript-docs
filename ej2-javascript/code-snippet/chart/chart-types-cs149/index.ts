


import { Chart, StackingColumnSeries, DateTime } from '@syncfusion/ej2-charts';
import { stackedData } from './datasource.ts';
Chart.Inject(StackingColumnSeries, DateTime);

let chart: Chart = new Chart({
       series: [
            {
                dataSource: stackedData, xName: 'x', yName: 'y',
                //Series type as 100% stacked column series
                type: 'StackingColumn100'
            }, {
                dataSource: stackedData, xName: 'x', yName: 'y1',
                 type: 'StackingColumn100'
            }, {
                dataSource: stackedData, xName: 'x', yName: 'y2',
                 type: 'StackingColumn100'
            }
        ],

}, '#element');



