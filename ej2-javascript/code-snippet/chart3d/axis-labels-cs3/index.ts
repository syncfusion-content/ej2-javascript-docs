import {Chart3D, Category3D, Legend3D, ColumnSeries3D, Tooltip3D, Highlight3D } from '@syncfusion/ej2-charts';
Chart3D.Inject(ColumnSeries3D, Category3D, Legend3D, Tooltip3D, Highlight3D);

let chartData: any[] = [
    { x: "South Korea", y: 39.4 },
    { x: "India", y: 61.3 },
    { x: "Pakistan", y: 20.4 },
    { x: "Germany", y: 65.1 },
    { x: "Australia", y: 15.8 },
    { x: "Italy", y: 29.2 },
    { x: "United Kingdom", y: 44.6 },
    { x: "Saudi Arabia", y: 9.7 },
    { x: "Russia", y: 40.8 },
    { x: "Mexico", y: 31 },
    { x: "Brazil", y: 75.9 },
    { x: "China", y: 51.4 }
];

let chart: Chart3D = new Chart3D({
    primaryXAxis: {
        valueType: 'Category',
        labelIntersectAction: 'Rotate90'
    },
    series: [
        {
            type: 'Column', xName: 'x', yName: 'y',
            dataSource: chartData
        }
    ],
    wallColor: 'transparent',
    enableRotation: true,
    rotation: 7,
    tilt: 10,
    depth: 100
}, '#element');



