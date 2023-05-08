


import { Chart, StackingBarSeries, Category } from '@syncfusion/ej2-charts';
import { stackedData } from './datasource.ts';
Chart.Inject(StackingBarSeries, Category);

let chart: Chart = new Chart({
        series: [
            {
                //Series type as stacked bar
                type: 'StackingBar',
                dataSource: stackedData, xName: 'x', yName: 'y'
            }, {
                type: 'StackingBar',
                dataSource: stackedData, xName: 'x', yName: 'y1'
            }, {
               type: 'StackingBar',
                dataSource: stackedData, xName: 'x', yName: 'y2'
            }
        ],

}, '#element');



