


import { Chart, DateTime, LineSeries } from '@syncfusion/ej2-charts';
import { data } from './datasource.ts';
Chart.Inject(LineSeries, DateTime);

let chart: Chart = new Chart({
    primaryXAxis: {
        // Date time range in primary X Axis
        valueType: 'DateTime',
        minimum: new Date(2000, 6, 1),
        maximum: new Date(2010, 6, 1), interval: 1
    },
    series:[{
        dataSource: data,
        xName: 'x', yName: 'y',
        type: 'Line'
    }],

}, '#element');



