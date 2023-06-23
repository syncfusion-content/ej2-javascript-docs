


import { Chart, SplineAreaSeries, Category } from '@syncfusion/ej2-charts';
import { polarCategory } from './datasource.ts';
Chart.Inject(SplineAreaSeries, Category);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category'
    },
    series:[{
        dataSource: polarCategory,
        xName: 'x', yName: 'y',
        // Series type as SplineArea
        type: 'SplineArea'
    }],
}, '#element');



