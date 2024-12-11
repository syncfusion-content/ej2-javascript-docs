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
        title: 'Medals'
    },
    annotations: [{
        content: '<div style="border: 1px solid #000; background-color: #f8f8f8; padding: 5px; border-radius: 4px; font-size: 12px; font-weight: bold;">70 Gold Medals</div>',
        coordinateUnits: 'Point',
        x: 'France',
        y: 55,
        accessibility: {
            accessibilityDescription: 'Annotation indicating that France has won 70 Gold Medals.',
            accessibilityRole: 'note'
        }
    }],
    series: [
        {
            dataSource: columnData,
            xName: 'country', 
            yName: 'gold',
            type: 'Column'
        }
    ],
    title: 'Olympic Medals'
}, '#element');

