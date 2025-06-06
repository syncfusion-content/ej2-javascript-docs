import { Chart, RangeAreaSeries, Category } from '@syncfusion/ej2-charts';
import { chartData } from './datasource.ts';
Chart.Inject(RangeAreaSeries, Category);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category',
        title: 'Month',
        edgeLabelPlacement: 'Shift',
        majorGridLines: { width: 0 }
    },
    primaryYAxis:
    {
        title: 'Temperature',
        labelFormat: '{value}˚C',
        lineStyle: { width: 0 },
        minimum: 0,
        maximum: 30,
        majorTickLines: { width: 0 }
    },
    series: [
        {
            type: 'RangeArea',
            dataSource: chartData,
            xName: 'x',
            high: 'high',
            low: 'low',
            opacity: 0.5
        }
    ],
    title: 'Monthly Temperature Range'
}, '#element');