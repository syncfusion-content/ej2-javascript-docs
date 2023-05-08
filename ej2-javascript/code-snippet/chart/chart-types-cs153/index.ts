


import { Chart, StackingAreaSeries, DateTime } from '@syncfusion/ej2-charts';
import { stackedData } from './datasource.ts';
Chart.Inject(StackingStepAreaSeries, DateTime);

let chart: Chart = new Chart({
        series: [
            {
                dataSource: stackedData, xName: 'x', yName: 'y',
                //Series type as stacked area series
                type: 'StackingStepArea',
            },
            {
                dataSource: stackedData, xName: 'x', yName: 'y2',
                type: 'StackingStepArea',
            }
        ],

}, '#element');



