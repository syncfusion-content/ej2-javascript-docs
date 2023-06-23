


import { Chart, ColumnSeries, Category } from '@syncfusion/ej2-charts';
import { DataManager, Query } from '@syncfusion/ej2-data';
Chart.Inject(ColumnSeries, Category);
let dataManager: DataManager = new DataManager({
    url: 'http://mvc.syncfusion.com/Services/Northwnd.svc/Tasks/'
});
let query: Query = new Query().take(5).where('Estimate', 'lessThan', 3, false);
let chart: Chart = new Chart({
        primaryXAxis: {
            valueType: 'Category',
            title: 'Assignee'
        },
        primaryYAxis:
        {
            title: 'Estimate',
            minimum: 0, maximum: 3, interval: 1
        },
        series: [
            {
                type: 'Column',
                dataSource: dataManager,
                xName: 'Assignee', yName: 'Estimate', query: query,
                name: 'In progress'
            }
        ],
        title: 'Sprint Task Analysis'
}, '#element');



