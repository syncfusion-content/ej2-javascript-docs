ej.grids.Grid.Inject(ej.grids.Filter, ej.grids.Sort, ej.grids.Page);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowFiltering: true,
    allowPaging: true,
    pageSettings: { pageSize: 6 },
    allowSorting: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', format: 'C2', width: 90 },
        { field: 'OrderDate', headerText: 'Order Date', textAlign: 'Right', format: 'yMd', width: 120 }
    ],
});
grid.appendTo('#Grid');