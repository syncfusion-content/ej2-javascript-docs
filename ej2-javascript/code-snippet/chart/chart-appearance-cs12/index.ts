


import { Chart, ColumnSeries, Category, ISeriesRenderEventArgs } from '@syncfusion/ej2-charts';
Chart.Inject(ColumnSeries, Category);
let chartData: any[] = [
      { country: "USA", gold: 50 },
      { country: "China", gold: 40 },
      { country: "Japan", gold: 70 },
      { country: "Australia", gold: 60 },
      { country: "France", gold: 50 },
      { country: "Germany", gold: 40 },
      { country: "Italy", gold: 40 },
      { country: "Sweden", gold: 30 }
];
let chart: Chart = new Chart({
    primaryXAxis: {
        valueType: 'Category',
        title: 'Countries'
    },
    primaryYAxis: {
        minimum: 0, maximum: 80,
        interval: 20, title: 'Medals'
    },
    series:[{
        dataSource: chartData,
        xName: 'country', yName: 'gold',
        name: 'Gold', type: 'Column',
        border:{ width: 2, color: 'grey'}
    }],
    title: 'Olympic Medals',
    chartArea: {
        //background for Chart area
        background: "skyblue",
        // width of the chart area
        width: '80%'
    }
}, '#element');



