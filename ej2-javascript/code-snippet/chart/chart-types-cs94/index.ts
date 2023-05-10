


import { Chart, LineSeries, ErrorBar } from '@syncfusion/ej2-charts';
import { numData } from './datasource.ts';
Chart.Inject(LineSeries, ErrorBar);

let chart: Chart = new Chart({
   series: [{
        dataSource: numData,
        xName: 'x', yName: 'y',
        errorBar: {
            visible: true,
            type: 'Custom',
            mode:'Both'
            verticalPostiveError:3,
            horizontalPositiveError:2,
            verticalNegativeError:3,
            horizontalNegativeError:2
        },
        type: 'Line'
    }],

}, '#element');



