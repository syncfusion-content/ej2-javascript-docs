


import { Chart, AreaSeries } from '@syncfusion/ej2-charts';
import { numData } from './datasource.ts';
Chart.Inject(AreaSeries);

let chart: Chart = new Chart({
    series:[{
        dataSource: numData,
        xName: 'x', yName: 'y',
        fill:'#69D2E7',
        border:{width:2, color:'Red'},
        dashArray: '5,5',
        name: 'Product A',
        type: 'Area'
    }],

}, '#element');



