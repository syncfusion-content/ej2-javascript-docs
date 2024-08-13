import { Chart, StackingAreaSeries, DateTime, Legend } from '@syncfusion/ej2-charts';
import { stackedData } from './datasource.ts';
Chart.Inject(StackingAreaSeries, DateTime, Legend);

let chart: Chart = new Chart({
    primaryXAxis: {
        title: 'Years',
        valueType: 'DateTime',
        intervalType: 'Years',
        labelFormat: 'y',
        edgeLabelPlacement: 'Shift',
        majorTickLines: { width: 0 }
    },
    primaryYAxis:
    {
        title: 'Spend in Billions',
        minimum: 0,
        maximum: 7,
        interval: 1,
        labelFormat: '{value}B',
        majorTickLines: { width: 0 }
    },
    series: [
        {
            dataSource: stackedData, xName: 'x', yName: 'y',
            //Series type as stacked area series
            type: 'StackingArea', name: 'Organic', dashArray: '5,5',
            border: { width: 2, color: '#ff4251' }
        }, 
        {
            dataSource: stackedData, xName: 'x', yName: 'y1',
            type: 'StackingArea', name: 'Fair-trade', dashArray: '5,5',
            border: { width: 2, color: '#4C4C4C' }
        }, 
        {
            dataSource: stackedData, xName: 'x', yName: 'y2',
            type: 'StackingArea', name: 'Veg Alternatives', dashArray: '5,5',
            border: { width: 2, color: '#794F1B' }
        }, 
        {
            dataSource: stackedData, xName: 'x', yName: 'y3',
            type: 'StackingArea', name: 'Others', dashArray: '5,5',
            border: { width: 2, color: '#1a9a6f' }
        }
    ],
    title: 'Trend in Sales of Ethical Produce'
}, '#element');