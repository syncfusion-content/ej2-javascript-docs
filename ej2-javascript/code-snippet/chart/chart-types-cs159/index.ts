


import { Chart, SplineSeries, Category } from '@syncfusion/ej2-charts';
import { columnData } from './datasource.ts';
Chart.Inject(SplineSeries, Category);

let chart: Chart = new Chart({
    primaryXAxis: {
       valueType: 'Category'
    },
    series:[{
        dataSource: columnData,
        xName: 'country', yName: 'gold',
        type: 'Spline',
    }],
    isTransposed: true,

}, '#element');



