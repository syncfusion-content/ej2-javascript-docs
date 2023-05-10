var chartData = [
    { x: 'Jan', open: 120, high: 160, low: 100, close: 140 },
    { x: 'Feb', open: 150, high: 190, low: 130, close: 170 },
    { x: 'Mar', open: 130, high: 170, low: 110, close: 150 },
    { x: 'Apr', open: 160, high: 180, low: 120, close: 140 },
    { x: 'May', open: 150, high: 170, low: 110, close: 130 }
];
var Chart = new ej.charts.Chart({
    primaryXAxis: {
        title: 'Date',
        valueType: 'Category',
        majorGridLines: { width: 0 },
    },
    primaryYAxis:
    {
        title: 'Price',
        minimum: 100,
        maximum: 200,
        interval: 20,
    },
    series:[
        {
            dataSource: chartData, width:2,
            xName: 'x', open: 'open', close: 'close', high: 'high', low: 'low',
            name: 'SHIRPUR-G',
            // Series type as candle series
            type: 'Candle'
        }
    ],
    title: 'Shirpur Gold Refinery Share Price'
}, '#element');

