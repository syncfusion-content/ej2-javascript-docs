


import { Chart, SplineSeries, Category } from '@syncfusion/ej2-charts';
import { polarCategory } from './datasource.ts';
Chart.Inject(SplineSeries, Category);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category'
    },
    series:[{
        dataSource: polarCategory,
        xName: 'x', yName: 'y',
        // Series type as spline series
        type: 'Spline'
    }],
}, '#element');



