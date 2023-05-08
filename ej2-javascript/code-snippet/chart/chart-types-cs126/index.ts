

import { Chart, RangeStepAreaSeries, Category } from '@syncfusion/ej2-charts';
import { splinedata } from './datasource.ts';
Chart.Inject(RangeStepAreaSeries, Category);
let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category',
        edgeLabelPlacement: 'Shift',
        majorGridLines: { width: 0 },
    },
    primaryYAxis: {
            labelFormat: '{value}˚C',
            lineStyle: { width: 0 },
            minimum: 0,
            maximum: 40,
            majorTickLines: { width: 0 }
    },
    series: [
        {
            type: 'RangeStepArea',
            name: 'India',
            dataSource: splinedata,
            xName: 'x', high: 'high1', low: 'low1',
            opacity: 0.4, fill: 'red', border: { width: 2, color: 'blue' }
        }],
}, '#element');


