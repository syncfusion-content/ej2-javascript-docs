


import { Chart, StackingStepAreaSeries, DateTime } from '@syncfusion/ej2-charts';
import { stackedData } from './datasource.ts';
Chart.Inject(StackingStepAreaSeries, DateTime);

let chart: Chart = new Chart({
        series: [
            {
                dataSource: stackedData, xName: 'x', yName: 'y',
                //Series type as stacked area series
                type: 'StackingStepArea', fill: 'red',
                border: {width: 2, color: 'yellow'}, dashArray: '5.5'
            }, {
                dataSource: stackedData, xName: 'x', yName: 'y2',
                type: 'StackingStepArea', fill: 'green', border: {width: 2, color: 'yellow'}, dashArray: '5.5'
            }
        ],

}, '#element');



