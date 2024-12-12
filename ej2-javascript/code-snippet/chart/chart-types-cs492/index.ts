import { Chart, StepAreaSeries, Tooltip } from '@syncfusion/ej2-charts';
import { chartData } from './datasource.ts';
Chart.Inject(StepAreaSeries, Tooltip);

let chart: Chart = new Chart({
    primaryXAxis: {
        title: 'Overs'
    },
    primaryYAxis: {
        title: 'Runs'
    },
    series:[{
        dataSource: chartData,
        xName: 'x', yName: 'y',
        type: 'StepArea', marker: { visible: true },
        accessibility: {
            accessibilityDescription: 'This series represents the run rate of the England team across 20 overs in a cricket match.',
            accessibilityRole: 'series',
            accessibilityDescriptionFormat: 'Overs: ${point.x}, Runs: ${point.y}'
        }
    }],
    title: 'England - Run Rate',
    tooltip: { enable: true }
}, '#element');