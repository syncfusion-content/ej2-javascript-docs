import { Chart, ColumnSeries, Category, ChartAnnotation } from '@syncfusion/ej2-charts';
import { columnData } from './datasource.ts';
Chart.Inject(ColumnSeries, Category, ChartAnnotation);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category',
        title: 'Countries'
    },
    primaryYAxis: {
        title: 'Medals'
    },
    annotations: [{
        content: '<div style="border: 1px solid #000; background-color: #f8f8f8; padding: 5px; border-radius: 4px; font-size: 12px; font-weight: bold;">70 Gold Medals</div>',
        coordinateUnits: 'Point',
        x: 'France',
        y: 55,
        accessibility: {
            accessibilityDescription: 'Annotation indicating that France has won 70 Gold Medals.',
            accessibilityRole: 'note'
        }
    }],
    series: [
        {
            dataSource: columnData,
            xName: 'country', 
            yName: 'gold',
            type: 'Column'
        }
    ],
    title: 'Olympic Medals'
}, '#element');