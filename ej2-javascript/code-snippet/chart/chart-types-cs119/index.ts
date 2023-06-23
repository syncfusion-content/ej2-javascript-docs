


import { Chart, Category, RadarSeries } from '@syncfusion/ej2-charts';
import { columnData } from './datasource.ts';
Chart.Inject(Category, RadarSeries);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category',
        startAngle: 120
    },
    series:[{
        dataSource: columnData,
        xName: 'country', yName: 'gold',
        // Series type as polar series
        type: 'Radar',
        // Series draw type as column series
        drawType: 'Line'
    }],
}, '#element');



