import { Chart, StackingColumnSeries, DateTime, Legend } from '@syncfusion/ej2-charts';
import { stackedData } from './datasource.ts';
Chart.Inject(StackingColumnSeries, DateTime, Legend);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'DateTime',
        title: 'Years',
        interval: 1,
        labelFormat: 'y'
    },
    primaryYAxis:
    {
        title: 'GDP (%) Per Annum',
        rangePadding: 'None',
        labelFormat: '{value}%',
    },
    series: [
        {
            dataSource: stackedData, xName: 'x', yName: 'y',
            //Series type as 100% stacked column series
            type: 'StackingColumn100', name: 'UK',
            border: { width: 2, color: '#ff4251'}
        },
        {
            dataSource: stackedData, xName: 'x', yName: 'y1',
            type: 'StackingColumn100', name: 'Germany',
            border: { width: 2, color: '#4C4C4C'}
        },
        {
            dataSource: stackedData, xName: 'x', yName: 'y2',
            type: 'StackingColumn100', name: 'France',
            border: { width: 2, color: '#794F1B'}
        },
        {
            dataSource: stackedData, xName: 'x', yName: 'y3',
            type: 'StackingColumn100', name: 'Italy',
            border: { width: 2, color: '#1a9a6f'}
        }
    ],
    title: 'Gross Domestic Product Growth'
}, '#element');