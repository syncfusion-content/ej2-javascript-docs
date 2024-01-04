
import { DataLabel3D, Chart3D, Category3D, Legend3D, ColumnSeries3D, Tooltip3D, Highlight3D, Selection3D, Export3D} from '@syncfusion/ej2-charts';
Chart3D.Inject(ColumnSeries3D, Category3D, DataLabel3D, Legend3D, Tooltip3D, Highlight3D, Selection3D, Export3D);
let chartData: any[] = [
    { country: "USA", gold: 50, silver: 70, bronze: 45 },
    { country: "China", gold: 40, silver: 60, bronze: 55 },
    { country: "Japan", gold: 70, silver: 60, bronze: 50 },
    { country: "Australia", gold: 60, silver: 56, bronze: 40 },
    { country: "France", gold: 50, silver: 45, bronze: 35 },
    { country: "Germany", gold: 40, silver: 30, bronze: 22 },
    { country: "Italy", gold: 40, silver: 35, bronze: 37 },
    { country: "Sweden", gold: 30, silver: 25, bronze: 27 }
];
let chart: Chart3D = new Chart3D({
    primaryXAxis: {
        valueType: 'Category',
    },
    series:[{
        dataSource: chartData,
        xName: 'country', yName: 'gold',
        name: 'Gold', type: 'Column'
    }],
    title: 'Olympic Medals',        
    wallColor: 'transparent',
    enableRotation: true,
    rotation: 7,
    tilt: 10,
    depth: 100
}, '#element');

document.getElementById('export').onclick = () => {
    chart.export('PNG', 'result');
};