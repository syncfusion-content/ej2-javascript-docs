import { AccumulationChart } from '@syncfusion/ej2-charts';

// Sample data for the Accumulation Chart
let pieData: Object[] = [
    { month: 'Jan', sales: 35 },
    { month: 'Feb', sales: 28 },
    { month: 'Mar', sales: 34 },
    { month: 'Apr', sales: 32 },
    { month: 'May', sales: 40 },
    { month: 'Jun', sales: 32 },
    { month: 'Jul', sales: 35 },
    { month: 'Aug', sales: 55 },
    { month: 'Sep', sales: 38 },
    { month: 'Oct', sales: 30 },
    { month: 'Nov', sales: 25 },
    { month: 'Dec', sales: 32 }
];

// Initialize the Accumulation Chart
let chart: AccumulationChart = new AccumulationChart({
    series: [
        {
            dataSource: pieData,
            xName: 'month',
            yName: 'sales',
            type: 'Pie'
        }
    ]
});

// Render the chart to the target container
chart.appendTo('#element');