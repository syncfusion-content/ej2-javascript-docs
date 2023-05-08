


import { Chart, LineSeries, ErrorBar } from '@syncfusion/ej2-charts';
import { numData } from './datasource.ts';
Chart.Inject(LineSeries, ErrorBar);

let chart: Chart = new Chart({
    series: [{
        dataSource: numData,
        xName: 'x', yName: 'y',
        errorBar: {
            visible: true,
            errorBarCap:{
                length:10,
                width:10,
                color:'#0000ff'
            }
        },
        type: 'Line'
    }],

}, '#element');



