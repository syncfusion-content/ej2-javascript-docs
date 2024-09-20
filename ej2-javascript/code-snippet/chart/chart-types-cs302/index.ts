import { Chart, RangeColumnSeries, Category } from '@syncfusion/ej2-charts';
import { data1, data2 } from './datasource.ts';
Chart.Inject(RangeColumnSeries, Category);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category',
        title: 'Month'
    },
    primaryYAxis: {
        title: 'Temperature(Celsius)',
        labelFormat: '{value}°C'
    },
    series: [
        {
            // Series type as range column series
            type: 'RangeColumn',
            dataSource: data1, 
            xName: 'x', 
            high: 'high', 
            low: 'low',
            dashArray: '5,5',
            border: { width: 2, color: '#ff4251' }
        }, 
        {
            type: 'RangeColumn',
            dataSource: data2, 
            xName: 'x', 
            high: 'high', 
            low: 'low',
            dashArray: '5,5',
            border: { width: 2, color: '#4C4C4C' }
        }
    ],
    title: 'Maximum and Minimum Temperature'
}, '#element');