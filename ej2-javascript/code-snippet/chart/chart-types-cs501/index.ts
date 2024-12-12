import { Chart, BubbleSeries } from '@syncfusion/ej2-charts';
import { bubbleData } from './datasource.ts';
Chart.Inject(BubbleSeries);

let chart: Chart = new Chart({
    primaryXAxis: {
        title: 'Literacy Rate',
        minimum: 60,
        maximum: 100,
        interval: 5
    },
    primaryYAxis: {
        title: 'GDP growth rate',
        minimum: -2,
        maximum: 16,
        interval: 2
    },
    series: [
        {
            type: 'Bubble',
            dataSource: bubbleData,
            xName: 'x', yName: 'y', 
            size: 'size',
            accessibility: {
                accessibilityDescription: 'This series illustrates the relationship between literacy rate, GDP growth rate, and population size for various regions.',
                accessibilityRole: 'series',
                accessibilityDescriptionFormat: 'Literacy Rate: ${point.x}, GDP Growth: ${point.y}'
            }
        }
    ],
    title: 'GDP vs Literacy Rate'
}, '#element');