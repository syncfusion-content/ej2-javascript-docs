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
            type: 'StackingColumn100', name: 'UK'
        },
        {
            dataSource: stackedData, xName: 'x', yName: 'y1',
            type: 'StackingColumn100', name: 'Germany'
        },
        {
            dataSource: stackedData, xName: 'x', yName: 'y2',
            type: 'StackingColumn100', name: 'France'
        },
        {
            dataSource: stackedData, xName: 'x', yName: 'y3',
            type: 'StackingColumn100', name: 'Italy'
        }
    ],
    title: 'Gross Domestic Product Growth'
}, '#element');