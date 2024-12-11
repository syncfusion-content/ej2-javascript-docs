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
    series: [
        {
            dataSource: lineData,
            xName: 'month', yName: 'sales',
            type: 'Line',
            marker: { visible: true },
            accessibility: {
                accessibilityDescription: 'This line chart represents the sales trend over months, showing the changes in sales count each month.',
                accessibilityRole: 'series',
                accessibilityDescriptionFormat: 'For ${point.x}, the sales count is ${point.y}'
            }
        }
    ],
    title: 'Monthly Sales Comparison'
}, '#element');
