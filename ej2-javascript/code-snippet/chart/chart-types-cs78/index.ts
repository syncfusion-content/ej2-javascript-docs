


import { Chart, BarSeries, Category } from '@syncfusion/ej2-charts';
import { numData } from './datasource.ts';
Chart.Inject(BarSeries, Category);

let chart: Chart = new Chart({
   series:[{
        dataSource: numData,
        xName: 'x', yName: 'y',
        // Series type as bar series
        type: 'Bar'
    },
    {
        dataSource: numData,
        xName: 'x',
        yName: 'y1',
        columnSpacing: 0.5,
        columnWidth: 0.75,
        // Series type as bar series
        type: 'Bar',
      }],

}, '#element');



