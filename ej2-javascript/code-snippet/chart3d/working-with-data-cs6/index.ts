


import {Chart3D, Category3D, Legend3D, ColumnSeries3D, Tooltip3D, Highlight3D } from '@syncfusion/ej2-charts';
Chart3D.Inject(ColumnSeries3D, Category3D, Legend3D, Tooltip3D, Highlight3D);

let chartData: any[] = [
    { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
    { month: 'Mar', sales: null }, { month: 'Apr', sales: 32 },
    { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
    { month: 'Jul', sales: 35 }, { month: 'Aug', sales: undefined },
    { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
    { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
];
let chart: Chart3D = new Chart3D({
    //Initializing Primary X and Y Axis
    primaryXAxis: {
        valueType: 'Category',
        labelRotation: -45,
        labelPlacement: 'BetweenTicks'
    },
   series:[{
        dataSource: chartData,
        xName: 'month',
        yName: 'sales',
        type: 'Column',
        emptyPointSettings: {
            mode: 'Average',
            fill: 'green'
        }
    }],
    wallColor: 'transparent',
    enableRotation: true,
    rotation: 7,
    tilt: 10,
    depth: 100,
}, '#element');



