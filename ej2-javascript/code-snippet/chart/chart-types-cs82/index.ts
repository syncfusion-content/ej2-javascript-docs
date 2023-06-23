

import {
    Chart, Category, IPointRenderEventArgs, BoxAndWhiskerSeries, Tooltip, getElement, BoxPlotMode
} from '@syncfusion/ej2-charts';
import { boxPlot } from './datasource.ts';
Chart.Inject(Category, BoxAndWhiskerSeries, Tooltip);

let chart: Chart = new Chart({
    //Initializing Primary X Axis
    primaryXAxis: {
        valueType: 'Category',
    },
    //Initializing Chart Series
    series: [
        {
            type: 'BoxAndWhisker',
            boxPlotMode: 'Normal',
            dataSource: boxPlot,
            xName: 'x',
            yName: 'y',
            marker: {
                visible: true,
                width: 10,
                height: 10
            },
        }],
}, '#element');



