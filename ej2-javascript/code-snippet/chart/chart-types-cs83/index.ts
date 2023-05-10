

import {
    Chart, Category, ILoadedEventArgs,
    IPointRenderEventArgs, BoxAndWhiskerSeries, Tooltip, getElement, BoxPlotMode
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
            dataSource: boxPlot,
            showMean: false,
            xName: 'x',
            yName: 'y',
        }
    ],
}, '#element');



