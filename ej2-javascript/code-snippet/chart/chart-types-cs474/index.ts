import { Chart, ColumnSeries, Category, Legend } from '@syncfusion/ej2-charts';
import { columnData } from './datasource.ts';
Chart.Inject(ColumnSeries, Category, Legend);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category',
        title: 'Countries'
    },
    primaryYAxis: {
        minimum: 0, 
        maximum: 80,
        interval: 20, 
        title: 'Medals'
    },
    series:[{
        dataSource: columnData,
        xName: 'country', yName: 'gold',
        type: 'Column', name: 'Gold Medals',
        accessibility: {
            accessibilityDescription: 'This series represents the number of gold medals won by the country.',
            accessibilityRole: 'series',
            accessibilityDescriptionFormat: '${series.name}: ${point.x} has ${point.y} gold medals.'
        }
    }],
    title: 'Olympic Medals',
    legendSettings: { visible: false }
}, '#element');