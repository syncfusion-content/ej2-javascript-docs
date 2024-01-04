import { DataLabel3D, Chart3D, Category3D, Legend3D, ColumnSeries3D, Tooltip3D, Highlight3D } from '@syncfusion/ej2-charts';
Chart3D.Inject(ColumnSeries3D, Category3D, DataLabel3D, Legend3D, Tooltip3D, Highlight3D);

let chartData: any[] = [
    { country: "USA", gold: 50, silver: 70, bronze: 45 },
    { country: "China", gold: 40, silver: 60, bronze: 55 },
    { country: "Japan", gold: 70, silver: 60, bronze: 50 },
    { country: "Australia", gold: 60, silver: 56, bronze: 40 }
];
let chart: Chart3D = new Chart3D({
    primaryXAxis: {
        valueType: 'Category',
    },
    series:[{
        dataSource: chartData,
        xName: 'country', yName: 'gold',
        type: 'Column',
        dataLabel: {
            visible: true,
            border:{
                width: 1,
                color : 'red'
            },
            margin:{
                left:5,
                right:5,
                top:5,
                bottom:5
            }
        }
    }],
    title: 'Olympic Medals',
    wallColor: 'transparent',
    enableRotation: true,
    rotation: 7,
    tilt: 10,
    depth: 100

}, '#element');



