var chartData = [
    { country: 'USA', gold: 50, silver: 40 },
    { country: 'China', gold: 40, silver: 35 },
    { country: 'Japan', gold: 70, silver: 65 },
    { country: 'Australia', gold: 60, silver: 50 },
    { country: 'France', gold: 50, silver: 55 },
    { country: 'Germany', gold: 40, silver: 20 },
    { country: 'Italy', gold: 40, silver: 30 },
    { country: 'Sweden', gold: 30, silver: 40 }
];
var chart = new ej.charts.Chart({
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
        name: 'Gold',
        // Series type as column series
        type: 'Column'
    },
    {
        dataSource: chartData,
        xName: 'country',
        yName: 'silver',
        name: 'Silver',
        columnWidth: 0.75,
        columnSpacing: 1.5,
        // Series type as column series
        type: 'Column',
      }],
    title: 'Olympic Medals'
}, '#element');

