import { Chart, LineSeries, RadarSeries } from '@syncfusion/ej2-charts';
import { chartData } from './datasource.ts';
Chart.Inject(LineSeries, RadarSeries);

let chart: Chart = new Chart({
    primaryXAxis: {
        title: 'Year'
    },
    primaryYAxis: {
        title: 'Efficiency',
        labelFormat: '{value}%'
    },
    series:[{
        dataSource: chartData, xName: 'x', yName: 'y',
        type: 'Radar', width: 2,
        drawType: 'Line',
        marker: { visible: true },
        accessibility: {
            accessibilityDescription: 'This chart displays the efficiency of oil-fired power production over the years 2005 to 2011.',
            accessibilityRole: 'series',
            accessibilityDescriptionFormat: 'In ${point.x}, efficiency was ${point.y}%.'
        }
    }],
    title: 'Efficiency of oil-fired power production'
}, '#element');



