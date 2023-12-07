

import { Chart3D, ColumnSeries3D, Category3D } from '@syncfusion/ej2-charts';
Chart3D.Inject(ColumnSeries3D, Category3D);
let chartData: any[] = [
      { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
      { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
      { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
      { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
      { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
      { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
];
let chart: Chart3D = new Chart3D({
    primaryXAxis: {
        valueType: 'Category'
    },
    primaryYAxis: {
        // label format for axis
        labelFormat: '${value}K'
    },
    series:[{
        dataSource: chartData,
        xName: 'month',
        yName: 'sales',
        type: 'Column'
    }]
}, '#element');



