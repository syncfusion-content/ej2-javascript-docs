


import { Chart, StackingColumnSeries, Category } from '@syncfusion/ej2-charts';
import { stackedData } from './datasource.ts';
Chart.Inject(StackingColumnSeries, Category);

let chart: Chart = new Chart({
        series: [
            {
                dataSource: stackedData, xName: 'x', yName: 'y',
                type: 'StackingColumn'
                //Stacking group for stacked column series
                stackingGroup: 'UKAndGermany'
            }, {
                dataSource: stackedData, xName: 'x', yName: 'y1',
                type: 'StackingColumn', stackingGroup: 'UKAndGermany'
            }, {
                dataSource: stackedData, xName: 'x', yName: 'y2',
                type: 'StackingColumn', stackingGroup: 'FranceAndItaly'

            }
        ],

}, '#element');



