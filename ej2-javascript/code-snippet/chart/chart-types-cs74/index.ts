


import { Chart, MultiColoredAreaSeries } from '@syncfusion/ej2-charts';
Chart.Inject(MultiColoredAreaSeries);

let chart: Chart = new Chart({
   series:[{
        dataSource:  [{ x: 2005, y: 28 }, { x: 2006, y: 25}, { x: 2007, y: 26 }, { x: 2008, y: 27 },
        { x: 2009, y: 32}, { x: 2010, y: 35 }, { x: 2011, y: 25 }],
        xName: 'x', yName: 'y',
        type: 'MultiColoredArea',
        segmentAxis: 'X',
        segments: [{
                    value: 2007,
                    color: 'blue'
                }, {
                    value: 2009,
                    color: 'lightgreen'
                }, {
                    color: 'orange'
        }],
    }],

}, '#element');



