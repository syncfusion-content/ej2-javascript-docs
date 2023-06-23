


import { Chart, Category, ColumnSeries, LineSeries } from '@syncfusion/ej2-charts';
Chart.Inject(ColumnSeries, Category, LineSeries);
let chartData: any[] = [{ x: "South Korea", y: 39.4 }, { x: "India", y: 61.3 }, { x: "Pakistan", y: 20.4 },
    { x: "Germany", y: 65.1 }, { x: "Australia", y: 15.8 }, { x: "Italy", y: 29.2 },
    { x: "United Kingdom", y: 44.6 }, { x: "Saudi Arabia", y: 9.7 }, { x: "Russia", y: 40.8 },
    { x: "Mexico", y: 31 }, { x: "Brazil", y: 75.9 }, { x: "China", y: 51.4 }];
let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category',
        //label intersect as hide
        labelIntersectAction: 'Hide'
    },
   series:[{
        dataSource: chartData,
        xName: 'x', yName: 'y',
        type: 'Column'
    }],

}, '#element');



