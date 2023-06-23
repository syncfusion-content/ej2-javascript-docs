


import { Chart, LineSeries, ErrorBar } from '@syncfusion/ej2-charts';
import { numData } from './datasource.ts';
Chart.Inject(LineSeries, ErrorBar);

let chart: Chart = new Chart({
    series: [{
        dataSource: numData,
        xName: 'x', yName: 'y',
        errorBar: {
           visible: true,
           mode:'Vertical',
           direction:'Minus'
        },
        type: 'Line'
    }],

}, '#element');



