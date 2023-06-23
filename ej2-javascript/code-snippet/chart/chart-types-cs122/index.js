var series= [];
var value = 70;
var point;

for (var i = 1; i < 70; i++) {
    if (Math.random() > .5) {
        value += Math.random();
    } else {
        value -= Math.random();
    }
    point = { x: new Date(1930 + i, 5, i), high: value, low: value - 14 };
    series.push(point);
}

var chart = new ej.charts.Chart({

    primaryXAxis: {
        title: 'Month',
        valueType: 'DateTime',
        edgeLabelPlacement: 'Shift',
    },

    primaryYAxis:
    {
        title: 'Temperature(Celsius)',
        minimum: 50, maximum: 80, interval: 5,
    },

    series: [
        {
            type: 'RangeArea',
            name: 'India',
            dataSource: series,
            xName: 'x', high: 'high', low: 'low', opacity: 0.5,
            opacity: 0.7, 
            dashArray:'4',fill:'grey', border: { color: 'blueviolet', width: 1 }
        }],
    title: 'Maximum and Minimum Temperature',
}, '#element');

