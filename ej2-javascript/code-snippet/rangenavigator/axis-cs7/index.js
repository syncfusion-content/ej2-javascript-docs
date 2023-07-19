let data = [];
let max = 100;
for (let i = 0; i < 100; i++) {
    data.push({
        x: Math.pow(10, i * 0.1),
        y: Math.floor(Math.random() * (80 - 30 + 1)) + 30
    });
}

var range = new ej.charts.RangeNavigator({
    valueType: 'Logarithmic',
    value: [4, 6],
    // logBase for logarithmic scale
    logBase: 2,
    series: [{
        dataSource: data, xName: 'x', yName: 'y', type: 'StepLine', width: 2,
    }],
});
range.appendTo('#element');

