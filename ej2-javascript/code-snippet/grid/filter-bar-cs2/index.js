ej.grids.Grid.Inject(ej.grids.Filter);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowPaging: true,
    pageSettings: { pageSize: 5 },
    allowFiltering: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'OrderDate', headerText: 'OrderDate', width: 100, format: 'yMd'},
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 100 }
    ],
    height: 273
});
grid.appendTo('#Grid');

var switchObj = new ej.buttons.Switch({
     checked: true,
     change: onChange
});
switchObj.appendTo('#switch');

function onChange(args){
    grid.filterSettings = { showFilterBarStatus: args.checked }
}