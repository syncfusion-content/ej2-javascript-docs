var chartData = [
    { x: 'Jan', y: -1 }, { x: 'Feb', y: -1 },
    { x: 'Mar', y: 2 }, { x: 'Apr', y: 8 },
    { x: 'May', y: 13 }, { x: 'Jun', y: 18 },
    { x: 'Jul', y: 21 }, { x: 'Aug', y: 20 },
    { x: 'Sep', y: 16 }, { x: 'Oct', y: 10 },
    { x: 'Nov', y: 4 }, { x: 'Dec', y: 0 }
];
var chart = new ej.charts.Chart({
    primaryXAxis: {
        title: 'Month',
        valueType: 'Category'
    },
    primaryYAxis: {
        minimum: -5, maximum: 25, interval: 10,
        labelFormat: '{value}˚C',
        majorGridLines: { width : 0 }
    },
    series:[{
        dataSource: chartData,
        xName: 'x', yName: 'y',
        type: 'Spline', width:2,
        marker: { visible: true },
        accessibility: {
            accessibilityDescription: 'This series represents the temperature data for the year 2012, shown in a spline curve.',
            accessibilityRole: 'series',
            accessibilityDescriptionFormat: 'For the month of ${point.x}, the temperature is ${point.y}˚C.'
        }
    }],
    isTransposed: true,
    title: 'Climate Graph-2012'
}, '#element');

