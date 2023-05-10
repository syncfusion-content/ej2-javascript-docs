

import { Chart, StackingBarSeries } from '@syncfusion/ej2-charts';
import { stackedData } from './datasource.ts';
Chart.Inject(StackingBarSeries);

let chart: Chart = new Chart({
       series: [
            {
                type: 'StackingBar',
                //Stacking group for stacked bar
                stackingGroup: 'JohnAndAndrew',
                dataSource: stackedData, xName: 'x', yName: 'y', border: { width: 2, color: 'red' }
            }, {
                type: 'StackingBar', name: 'Andrew', stackingGroup: 'JohnAndAndrew',
                dataSource: stackedData, xName: 'x', yName: 'y1', border: { width: 2, color: 'grey' }
            }, {
               type: 'StackingBar', name: 'Thomas', stackingGroup: 'ThomasAndMichael',
               dataSource: stackedData, xName: 'x', yName: 'y2', border: { width: 2, color: 'lime' }
            }
        ],

}, '#element');



