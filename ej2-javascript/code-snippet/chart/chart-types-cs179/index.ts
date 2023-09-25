import { Chart, StackingBarSeries, Category } from '@syncfusion/ej2-charts';
import { stackedData } from './datasource.ts';
Chart.Inject(StackingBarSeries, Category);

let chart: Chart = new Chart({
    series: [
        {
            //Series type as 100% stacked bar with cylindrical shape
            type: 'StackingBar100', columnFacet: 'Cylinder',
            dataSource: stackedData, xName: 'x', yName: 'y'
        },
        {
            type: 'StackingBar100', columnFacet: 'Cylinder',
            dataSource: stackedData, xName: 'x', yName: 'y1'
        },
        {
            type: 'StackingBar100', columnFacet: 'Cylinder',
            dataSource: stackedData, xName: 'x', yName: 'y2'
        }
    ],
}, '#element');



