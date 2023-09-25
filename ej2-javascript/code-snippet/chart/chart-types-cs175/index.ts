import { Chart, BarSeries, Category } from '@syncfusion/ej2-charts';
import { cylindricalData } from './datasource.ts';
Chart.Inject(BarSeries, Category);

let chart: Chart = new Chart({
    primaryXAxis: {
        minimum: 2006, maximum: 2011, interval: 1,
        title: 'Year'
    },
    primaryYAxis: {
        minimum: 3, maximum: 12,
        interval: 1, title: 'Percentage',
        labelFormat: '{value}%'
    },
    series: [{
        dataSource: cylindricalData,
        xName: 'x', yName: 'y',
        name: 'India',
        // Series type as bar series with cylinder shape
        type: 'Bar', columnFacet: 'Cylinder'
    }],
    title: 'Unemployment rate in percentage'
}, '#element');