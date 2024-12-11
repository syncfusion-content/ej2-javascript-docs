var columnData = [
    { country: "USA",       gold: 50 },
    { country: "China",     gold: 40 },
    { country: "Japan",     gold: 70 },
    { country: "Australia", gold: 60 },
    { country: "France",    gold: 50 },
    { country: "Germany",   gold: 40 },
    { country: "Italy",     gold: 40 },
    { country: "Sweden",    gold: 30 }
];
var chart = new ej.charts.Chart({
    primaryXAxis: {
        valueType: 'Category',
        title: 'Countries'
    },
    primaryYAxis: {
        minimum: 0,
        maximum: 80,
        interval: 20,
        title: 'Medals'
    },
    series: [{
        dataSource: columnData,
        xName: 'country', yName: 'gold',
        type: 'Column', name: 'Gold Medals',
        accessibility: {
            accessibilityDescription: 'This series represents the number of gold medals won by the country.',
            accessibilityRole: 'series',
            accessibilityDescriptionFormat: '${series.name}: ${point.x} has ${point.y} gold medals.'
        }
    }],
    title: 'Olympic Medals',
    legendSettings: { visible: false }
}, '#element');

