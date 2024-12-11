var chartData = [
    { x: 2005, y: 28 }, { x: 2006, y: 25 },{ x: 2007, y: 26 }, { x: 2008, y: 27 },
    { x: 2009, y: 32 }, { x: 2010, y: 35 }, { x: 2011, y: 30 }
];
var chart = new ej.charts.Chart({
    primaryXAxis: {
        title: 'Year'
    },
    primaryYAxis: {
        title: 'Efficiency',
        labelFormat: '{value}%'
    },
    series:[{
        dataSource: chartData, xName: 'x', yName: 'y',
        type: 'Radar', width: 2,
        drawType: 'Line',
        marker: { visible: true },
        accessibility: {
            accessibilityDescription: 'This chart displays the efficiency of oil-fired power production over the years 2005 to 2011.',
            accessibilityRole: 'series',
            accessibilityDescriptionFormat: 'In ${point.x}, efficiency was ${point.y}%.'
        }
    }],
    title: 'Efficiency of oil-fired power production'
}, '#element');

