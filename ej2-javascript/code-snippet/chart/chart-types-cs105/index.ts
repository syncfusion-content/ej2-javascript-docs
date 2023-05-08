


import { Chart, MultiColoredLineSeries } from '@syncfusion/ej2-charts';
Chart.Inject(MultiColoredLineSeries);
let chart: Chart = new Chart({
    series:[{
        dataSource:  [{ x: 2005, y: 28 , color: 'red'}, { x: 2006, y: 25, color:'green'}, { x: 2007, y: 26, color: '#ff0097' }, { x: 2008, y: 27, color: 'crimson' }, { x: 2009, y: 32, color: 'blue' }, { x: 2010, y: 35 ,color: 'darkorange'}],
        xName: 'x', yName: 'y', pointColorMapping: 'color',
        type: 'MultiColoredLine'
    }],
}, '#element');



