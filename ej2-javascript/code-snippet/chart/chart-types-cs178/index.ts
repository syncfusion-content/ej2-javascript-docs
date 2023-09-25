


import { Chart, StackingColumnSeries, Category, Tooltip } from '@syncfusion/ej2-charts';
import { cylindricalData } from './datasource.ts';
Chart.Inject(StackingColumnSeries, Category, Tooltip);

let chart: Chart = new Chart({
    primaryXAxis: {
        title: 'Years',
        interval: 1,
        valueType: 'DateTime',
        labelFormat: 'y'
    },
    primaryYAxis:
    {
        title: 'GDP (%) Per Annum',
        rangePadding: 'None',
        labelFormat: '{value}%',
    },
    //Series type as 100% stacked column series with cylinderical shape
    series: [
        {
            dataSource: cylindricalData, xName: 'x', yName: 'y',
            type: 'StackingColumn100', columnFacet: 'Cylinder', name: 'UK'
        },
        {
            dataSource: cylindricalData, xName: 'x', yName: 'y1',
            type: 'StackingColumn100', columnFacet: 'Cylinder', name: 'Germany'
        },
        {
            dataSource: cylindricalData, xName: 'x', yName: 'y2',
            type: 'StackingColumn100', columnFacet: 'Cylinder', name: 'France'
        },
        {
            dataSource: cylindricalData, xName: 'x', yName: 'y3',
            type: 'StackingColumn100', columnFacet: 'Cylinder', name: 'Italy'
        }
    ],
    title: 'Gross Domestic Product Growth'
}, '#element');



