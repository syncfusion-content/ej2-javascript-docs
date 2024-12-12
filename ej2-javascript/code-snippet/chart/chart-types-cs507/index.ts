import { Chart, Category, BoxAndWhiskerSeries } from '@syncfusion/ej2-charts';
import { chartData } from './datasource.ts';
Chart.Inject(Category, BoxAndWhiskerSeries);

let chart: Chart = new Chart({
    //Initializing Primary X Axis
    primaryXAxis: {
        valueType: 'Category'
    },
    //Initializing Chart Series
    series: [
        {
            type: 'BoxAndWhisker',
            dataSource: chartData,
            xName: 'x',
            yName: 'y',
            marker: {
                visible: true,
                width: 10,
                height: 10
            },
            accessibility: {
                accessibilityDescription: 'Displays the age distribution of employees in various departments, showing minimum, maximum, median, lowerQuartile, and upperQuartile.',
                accessibilityRole: 'series',
                accessibilityDescriptionFormat: 'Department: ${point.x}, Min: ${point.minimum}, Max: ${point.maximum}, Median: ${point.median}, LowerQuartile: ${point.lowerQuartile}, UpperQuartile: ${point.upperQuartile}'
            }
        }
    ]
}, '#element');



