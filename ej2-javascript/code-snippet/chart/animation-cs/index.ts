


import { Chart, AreaSeries, Legend, Zoom, DateTime } from '@syncfusion/ej2-charts';
import { series1 } from './datasource.ts';
Chart.Inject(AreaSeries, DateTime, Legend, Zoom);
let chart: Chart = new Chart({
        primaryXAxis: {
            valueType: 'DateTime',
            zoomFactor: 0.2, zoomPosition: 0.6
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
            },
        ],
        zoomSettings:
        {
            enableSelectionZooming: true,
            enablePan: true,
            enableAnimation: true
        },
        title: 'Sales History of Product X',
        legendSettings: { visible: false },
}, '#element');



