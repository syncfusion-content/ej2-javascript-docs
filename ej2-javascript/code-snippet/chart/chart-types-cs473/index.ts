


import { AccumulationChart, AccumulationLegend } from '@syncfusion/ej2-charts';
AccumulationChart.Inject(AccumulationLegend);
import { data } from './datasource.ts';
let piechart: AccumulationChart = new AccumulationChart({
    series: [
        {
            dataSource: data,
            xName: 'x',
            yName: 'y',
        }
    ],
    legendSettings:{ 
        visible: true,
        layout: "Auto",
        maximumColumns: 3,
        fixedWidth: true
    }
}, '#element');



