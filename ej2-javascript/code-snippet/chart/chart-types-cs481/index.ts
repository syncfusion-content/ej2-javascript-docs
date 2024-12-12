import { Chart, RangeStepAreaSeries, Category } from '@syncfusion/ej2-charts';
import { chartData } from './datasource.ts';
Chart.Inject(RangeStepAreaSeries, Category);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category',
        title: 'Month',
        edgeLabelPlacement: 'Shift',
        majorGridLines: { width: 0 }
    },
    primaryYAxis: {
        labelFormat: '{value}˚C',
        title: 'Temperature',
        lineStyle: { width: 0 },
        minimum: 10,
        maximum: 40,
        majorTickLines: { width: 0 }
    },
    series: [
        {
            type: 'RangeStepArea',
            dataSource: chartData,
            xName: 'x', high: 'high', low: 'low',
            marker: { visible: true },
            accessibility: {
                accessibilityDescription: 'The chart shows the temperature range from the lowest to highest for each month.',
                accessibilityRole: 'series',
                accessibilityDescriptionFormat: 'For ${point.x}, the highest temperature is ${point.high}°C and the lowest is ${point.low}°C.'
            }
        }
    ],
    title: 'Monthly Temperature Range'
}, '#element');