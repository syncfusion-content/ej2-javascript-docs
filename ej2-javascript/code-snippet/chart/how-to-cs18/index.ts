

import { Chart, LineSeries, Category, Legend, Tooltip, ILoadedEventArgs, StripLine, ChartTheme } from '@syncfusion/ej2-charts';
Chart.Inject(LineSeries, Category, Legend, Tooltip, StripLine);
    let chart: Chart = new Chart({
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category',
        },
        //Initializing Primary Y Axis
        primaryYAxis:
        {
            minimum: 10, maximum: 40, interval: 5,
            lineStyle: { color: '#808080' }, labelFormat: '{value} °C', rangePadding: 'None',
            //Initializing Striplines
            stripLines: [
                {
                    start: 30, end: 30.1, color: '#ff512f', visible: true,
                    textStyle: { size: '18px', color: '#ffffff', fontWeight: '600' },
                }
            ]
        },
        //Initializing Chart Series
        series: [
            {
                dataSource: [
                    { x: 'Sun', y: 28 }, { x: 'Mon', y: 27 }, { x: 'Tue', y: 33 }, { x: 'Wed', y: 36 },
                    { x: 'Thu', y: 28 }, { x: 'Fri', y: 30 }, { x: 'Sat', y: 31 }],
                xName: 'x', width: 2, yName: 'y',  type: 'Line', name: 'Weather',
                marker: { visible: true, width: 10, height: 10, border: { width: 2, color: '#ffffff' }, fill: '#666666' },
            },
        ],
        legendSettings: { visible: false },
        //Initializing Chart Title
        title: 'Weather Report',
        width:'650px',
        height: '350px'
    });
    chart.appendTo('#element');


