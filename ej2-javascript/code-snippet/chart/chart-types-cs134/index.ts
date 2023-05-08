


import { Chart, SplineSeries } from '@syncfusion/ej2-charts';
import { numData } from './datasource.ts';
Chart.Inject(SplineSeries);

let chart: Chart = new Chart({
    series:[{
        dataSource: numData,
        //fill for chart series
        fill: 'blue',
        //line width as 4 for chart series
        width:4,
        //dash array value as 5,5
        dashArray: '2',
        xName: 'x', yName: 'y',
        type: 'Spline'
    }],
}, '#element');



