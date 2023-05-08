var chartData = [
    { x: 2005, y: 28 }, { x: 2006, y: 25 },{ x: 2007, y: 26 }, { x: 2008, y: 27 },
    { x: 2009, y: 32 }, { x: 2010, y: 35 }, { x: 2011, y: 30 }
];
var chart = new ej.charts.Chart({
    primaryXAxis: {
        title: 'Year',
        minimum: 2004, maximum: 2012, interval: 1
    },
    primaryYAxis: {
        minimum: 20, maximum: 40, interval: 5,
        title: 'Efficiency',
        labelFormat: '{value}%'
    },
    series:[{
        dataSource: chartData,
        //fill for chart series
        fill: 'red',
        //line width as 4 for chart series
        width:4,
        //dash array value as 5,5
        dashArray: '5,5',
        xName: 'x', yName: 'y',
        marker:{ visible: true, isFilled: true, height: 10, width:10},
        name: 'India', type: 'StackingLine'
    }],
    title: 'Efficiency of oil-fired power production'
}, '#element');

