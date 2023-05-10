


import { Chart, StepAreaSeries } from '@syncfusion/ej2-charts';
import { numData } from './datasource.ts';
Chart.Inject(StepAreaSeries);

let chart: Chart = new Chart({
   series:[{
        dataSource: numData,
        xName: 'x', yName: 'y',
        type: 'StepArea'
    }],

}, '#element');



