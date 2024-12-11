import { Chart, AreaSeries, Legend, Zoom, DateTime } from '@syncfusion/ej2-charts';
import { series1 } from './datasource.ts';
Chart.Inject(AreaSeries, Legend, Zoom, DateTime);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'DateTime'
    },
    series: [
        {
            type: 'Area',
            dataSource: series1,
            name: 'Product X',
            xName: 'x',
            yName: 'y',
            border: { width: 0.5, color: '#00bdae' },
            animation: { enable: false }
        }
    ],
    zoomSettings: {
        enableMouseWheelZooming: true,
        enablePinchZooming: true,
        enableSelectionZooming: true,
        accessibility: {
            accessibilityDescription: 'This allows users to zoom in and out of the chart using mouse wheel, pinch gestures, or selection box.',
            accessibilityRole: 'zoom'
        }
    },
    title: 'Sales History of Product X',
    legendSettings: { visible: false }
}, '#element');
