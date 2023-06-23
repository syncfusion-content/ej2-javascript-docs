


import { Chart, ColumnSeries, Category, DataLabel, Tooltip } from '@syncfusion/ej2-charts';
Chart.Inject(ColumnSeries, DataLabel, Category, Tooltip);
import { EmitType } from '@syncfusion/ej2-base';

    let chart: Chart = new Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category',
        },
        //Initializing Primary Y Axis
        primaryYAxis:
        {
            minimum: 0, maximum: 250, interval: 50
        },

        //Initializing Chart Series
        series: [
            {
                type: 'Column', xName: 'x', width: 2, yName: 'y', pointColorMapping: 'color',
                dataSource: [
                    { x: 'BGD', y: 106, text: 'Bangaladesh', color:  'url(#chess)' },
                    { x: 'BTN', y: 103, text: 'Bhutn',  color:  'url(#cross)' },
                    { x: 'NPL', y: 198, text: 'Nepal',  color: 'url(#circle)' },
                    { x: 'THA', y: 189, text: 'Thiland',  color:  'url(#rectangle)' },
                    { x: 'MYS', y: 230, text: 'Malaysia',  color: 'url(#line)' }
                ], name: 'Tiger',
                cornerRadius: {
                    bottomLeft: 10, bottomRight: 10, topLeft: 10, topRight: 10
                }
            }
        ],
        legendSettings: { visible: false },
        //Initializing Chart title
        title: 'Tiger Population - 2016',
    width:'650px',
    height: '300px'
    },'#element');


