


import { Chart, AreaSeries } from '@syncfusion/ej2-charts';
import { numData } from './datasource.ts';
Chart.Inject(AreaSeries);

let chart: Chart = new Chart({
    series:[{
        dataSource: numData,
        xName: 'x', yName: 'y',opacity:0.4,
        // Series type as area series
        type: 'Area', border:{ width: 1.5 }
    }],
}, '#element');



