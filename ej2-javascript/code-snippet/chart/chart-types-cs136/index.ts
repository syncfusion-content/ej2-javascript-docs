


import { Chart, StackingAreaSeries, DateTime } from '@syncfusion/ej2-charts';
Chart.Inject(StackingAreaSeries, DateTime);

let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'DateTime',
    },
    series: [
        {
            type: 'StackingArea', opacity: 0.7,
            dataSource: [
                    { x: new Date(2000, 0, 1), y: 0.03 },
                    { x: new Date(2001, 0, 1), y: 0.05 }, { x: new Date(2002, 0, 1), y: 0.06 },
                    { x: new Date(2003, 0, 1), y: 0.09 }, { x: new Date(2004, 0, 1), y: 0.14 },
                    { x: new Date(2005, 0, 1), y: 0.20 }, { x: new Date(2006, 0, 1), y: 0.29 },
                    { x: new Date(2007, 0, 1), y: 0.46 }, { x: new Date(2008, 0, 1), y: 0.64 },
                    { x: new Date(2009, 0, 1), y: 0.75 }, { x: new Date(2010, 0, 1), y: 1.06 },
                    { x: new Date(2011, 0, 1), y: 1.25 }, { x: new Date(2012, 0, 1), y: 1.55 },
                    { x: new Date(2013, 0, 1), y: 1.55 }, { x: new Date(2014, 0, 1), y: 1.65 }
            ], fill: 'blue',
            xName: 'x', yName: 'y'
        }],
}, '#element');



