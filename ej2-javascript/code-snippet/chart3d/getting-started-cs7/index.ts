


import { Chart3D, ColumnSeries3D, Tooltip3D } from '@syncfusion/ej2-charts';
import { Legend3D, Category3D, DataLabel3D } from '@syncfusion/ej2-charts';
Chart3D.Inject(ColumnSeries3D, Legend3D, Category3D, Tooltip3D, DataLabel3D);
let chartData: any[] = [
      { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
      { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
      { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
      { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
      { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
      { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
];
let chart: Chart3D = new Chart3D({
    // Tooltip for 3d chart
    tooltip: {
        enable: true
    },
    primaryXAxis: {
        valueType: 'Category'
    },
    primaryYAxis: {
        labelFormat: '${value}K'
    },
   series:[{
        dataSource: chartData,
        name:'Sales',
        xName: 'month',
        yName: 'sales',
        type: 'Column',
        // Data label for 3d chart series
        dataLabel: {
            visible: true
        }
    }],
    legendSettings: { visible: true },
    title: 'Sales Analysis'
}, '#element');



