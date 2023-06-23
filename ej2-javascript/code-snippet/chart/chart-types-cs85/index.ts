


import { Chart, BubbleSeries} from '@syncfusion/ej2-charts';
import { bubbleData } from './datasource.ts';
import { EmitType } from '@syncfusion/ej2-base';
Chart.Inject(BubbleSeries);
    let chart: Chart = new Chart({
        series: [
            {
                type: 'Bubble',
                dataSource: bubbleData,
                xName: 'x', yName: 'y',
                //size property used to map size values from data source
                size: 'size',
            },
        ],

}, '#element');



