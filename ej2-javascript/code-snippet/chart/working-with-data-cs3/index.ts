


import { Chart, ColumnSeries, Category } from '@syncfusion/ej2-charts';
import { DataManager, Query, ODataAdaptor } from '@syncfusion/ej2-data';
Chart.Inject(ColumnSeries, Category);
let dataManager: DataManager = new DataManager({
   url: 'https://js.syncfusion.com/ejServices/Wcf/Northwind.svc/Orders/?$top=7',
   adaptor: new ej.data.ODataAdaptor()
});
let query: Query = new ej.data.Query();

let chart: Chart = new Chart({
         primaryXAxis: {
            valueType: 'Category'
        },
        //Initializing Chart Sample
        series: [
            {
                type: 'Column',
                dataSource: data,
                xName: 'CustomerID', yName: 'Freight', query: query,
            }
        ],
        title: 'Sprint Task Analysis'
}, '#element');



