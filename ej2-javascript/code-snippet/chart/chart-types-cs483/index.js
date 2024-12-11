var splinedata = [
    { x: 'Jan', high: 14, low: 4,  high1: 29, low1: 19 },
    { x: 'Feb', high: 17, low: 7,  high1: 32, low1: 22 },
    { x: 'Mar', high: 20, low: 10, high1: 35, low1: 25 },
    { x: 'Apr', high: 22, low: 12, high1: 37, low1: 27 },
    { x: 'May', high: 20, low: 10, high1: 35, low1: 25 },
    { x: 'Jun', high: 17, low: 7,  high1: 32, low1: 22 },
    { x: 'Jul', high: 15, low: 5,  high1: 30, low1: 20 },
    { x: 'Aug', high: 17, low: 7,  high1: 32, low1: 22 },
    { x: 'Sep', high: 20, low: 10, high1: 35, low1: 25 },
    { x: 'Oct', high: 22, low: 12, high1: 37, low1: 27 },
    { x: 'Nov', high: 20, low: 10, high1: 35, low1: 25 },
    { x: 'Dec', high: 17, low: 7,  high1: 32, low1: 22 }
];
var chart = new ej.charts.Chart({
    primaryXAxis: {
        valueType: 'Category',
        title: 'Month',
        edgeLabelPlacement: 'Shift',
        majorGridLines: { width: 0 }
    },
    primaryYAxis: {
        title: 'Temperature',
        labelFormat: '{value}˚C',
        lineStyle: { width: 0 },
        minimum: 0,
        maximum: 40,
        majorTickLines: { width: 0 }
    },
    series: [
        {
            type: 'SplineRangeArea',
            dataSource: splinedata,
            xName: 'x', high: 'high', 
            low: 'low', name: 'England',
            marker: { visible: true },
            accessibility: {
                accessibilityDescription: 'Temperature range in England for each month',
                accessibilityRole: 'series',
                accessibilityDescriptionFormat: 'In ${point.x}, the temperature range in England was from ${point.low}°C to ${point.high}°C.'
            }
        },
        {
            type: 'SplineRangeArea',
            dataSource: splinedata,
            xName: 'x', high: 'high1', 
            low: 'low1', name: 'India',
            marker: { visible: true },
            accessibility: {
                accessibilityDescription: 'Temperature range in India for each month',
                accessibilityRole: 'series',
                accessibilityDescriptionFormat: 'In ${point.x}, the temperature range in India was from ${point.low}°C to ${point.high}°C.'
            }
        }
    ],
    title: 'Monthly Temperature Range'
}, '#element');

