import { Chart, Category, LineSeries } from '@syncfusion/ej2-charts';
import { lineData } from './datasource.ts';
Chart.Inject(Category, LineSeries);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category',
        title: 'Month'
    },
    primaryYAxis: {
        title: 'Sales count'
    },
    series: [{
        dataSource: lineData,
        xName: 'month', yName: 'sales',
        type: 'Line',
        opacity: 0.5
    }],
    title: 'Monthly Sales Comparison'
}, '#element');
