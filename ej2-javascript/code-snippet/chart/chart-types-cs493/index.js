var stepData = [
    { x: 2005, y: 370 }, { x: 2006, y: 378 },
    { x: 2007, y: 416 }, { x: 2008, y: 404 },
    { x: 2009, y: 390 }, { x: 2010, y: 376 },
    { x: 2011, y: 365 }, { x: 2012, y: 350 }
];
var chart = new ej.charts.Chart({
    primaryXAxis: {
        minimum: 2004, 
        maximum: 2013, 
        interval: 1,
        title: 'Year'
    },
    primaryYAxis: {
        minimum: 330, 
        maximum: 450, 
        interval: 30,
        title: 'Intensity (g/kWh)'
    },
    series:[{
        dataSource: stepData,
        xName: 'x', yName: 'y',
        type: 'StepLine', marker: { visible: true },
        accessibility: {
            accessibilityDescription: 'This series displays the CO2 intensity in grams per kilowatt-hour (g/kWh) over the years from 2005 to 2012.',
            accessibilityRole: 'series',
            accessibilityDescriptionFormat: 'Year: ${point.x}, Intensity: ${point.y} g/kWh'
        }
    }],
    title: 'CO2 - Intensity Analysis'
}, '#element');

