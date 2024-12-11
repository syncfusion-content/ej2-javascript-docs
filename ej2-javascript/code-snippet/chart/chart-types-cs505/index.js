var chartData = [
    { x: 'Jan', open: 120, high: 160, low: 100, close: 140 },
    { x: 'Feb', open: 150, high: 190, low: 130, close: 170 },
    { x: 'Mar', open: 130, high: 170, low: 110, close: 150 },
    { x: 'Apr', open: 160, high: 180, low: 120, close: 140 },
    { x: 'May', open: 150, high: 170, low: 110, close: 130 }
];
var chart = new ej.charts.Chart({
    primaryXAxis: {
        title: 'Month',
        valueType: 'Category'
    },
    primaryYAxis:
    {
        title: 'Price in Dollar', 
        minimum: 60, 
        maximum: 200, 
        interval: 20,
        labelFormat: '${value}'
    },
    series:[
        {
            dataSource: chartData,
            xName: 'x', open: 'open', 
            close: 'close', high: 'high', low: 'low',
            type: 'HiloOpenClose',
            accessibility: {
                accessibilityDescription: 'This chart displays the high, low, opening, and closing prices of financial data for each month from January to May.',
                accessibilityRole: 'series',
                accessibilityDescriptionFormat: 'In ${point.x}, the opening price was ${point.open}, the closing price was ${point.close}, the highest price was ${point.high}, and the lowest price was ${point.low}.'
            }
        }
    ],
    title: 'Financial Analysis'
}, '#element');

