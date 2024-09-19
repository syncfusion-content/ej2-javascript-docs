import { Chart, SplineRangeAreaSeries, Category, Legend } from '@syncfusion/ej2-charts';
import { splinedata } from './datasource.ts';
Chart.Inject(SplineRangeAreaSeries, Category, Legend);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category',
        title: 'Month',
        edgeLabelPlacement: 'Shift',
        majorGridLines: { width: 0 }
    },
    primaryYAxis: {
        title: 'Temperature',
        labelFormat: '{value}˚C',
        lineStyle: { width: 0 },
        minimum: 0,
        maximum: 40,
        majorTickLines: { width: 0 }
    },
    series: [
        {
            type: 'SplineRangeArea',
            dataSource: splinedata,
            xName: 'x', high: 'high', 
            low: 'low', name: 'England',
            dashArray: '5,5',
            border: { width: 2, color: '#ff4251' }
        },
        {
            type: 'SplineRangeArea',
            dataSource: splinedata,
            xName: 'x', high: 'high1', 
            low: 'low1', name: 'India',
            dashArray: '5,5',
            border: { width: 2, color: '#4C4C4C' }
        }
    ],
    title: 'Monthly Temperature Range'
}, '#element');