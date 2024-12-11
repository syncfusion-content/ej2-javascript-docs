import { Chart, StepLineSeries } from '@syncfusion/ej2-charts';
import { stepData } from './datasource.ts';
Chart.Inject(StepLineSeries);

let chart: Chart = new Chart({
    primaryXAxis: {
        minimum: 2004, 
        maximum: 2013, 
        interval: 1,
        title: 'Year'
    },
    primaryYAxis: {
        minimum: 330, 
        maximum: 450, 
        interval: 30,
        title: 'Intensity (g/kWh)'
    },
    series:[{
        dataSource: stepData,
        xName: 'x', yName: 'y',
        type: 'StepLine', marker: { visible: true },
        accessibility: {
            accessibilityDescription: 'This series displays the CO2 intensity in grams per kilowatt-hour (g/kWh) over the years from 2005 to 2012.',
            accessibilityRole: 'series',
            accessibilityDescriptionFormat: 'Year: ${point.x}, Intensity: ${point.y} g/kWh'
        }
    }],
    title: 'CO2 - Intensity Analysis'
}, '#element');