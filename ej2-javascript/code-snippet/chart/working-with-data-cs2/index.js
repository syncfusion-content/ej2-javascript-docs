var dataManager = new ej.data.DataManager({
    url: 'http://mvc.syncfusion.com/Services/Northwnd.svc/Tasks/'
});
var query = new ej.data.Query().take(5).where('Estimate', 'lessThan', 3, false);
var chart = new ej.charts.Chart({
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

