


import { Chart, SplineRangeAreaSeries, Category } from '@syncfusion/ej2-charts';
import { splinedata } from './datasource.ts';
Chart.Inject(SplineRangeAreaSeries, Category);

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
            type: 'SplineRangeArea',
            name: 'England',
            dataSource: splinedata,
            xName: 'x', high: 'high', low: 'low',
            opacity: 0.4,
        },
        {
            type: 'SplineRangeArea',
            name: 'India',
            dataSource: splinedata,
            xName: 'x', high: 'high1', low: 'low1',
            opacity: 0.4,
        }],
}, '#element');



