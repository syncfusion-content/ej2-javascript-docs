ej.grids.Grid.Inject(ej.grids.Group);

var initial = true;

var grid = new ej.grids.Grid({
    dataSource: data,
    dataBound: dataBound,
    allowGrouping: true,
    groupSettings: {columns: ['ShipCity']},
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 120 }
    ],
    height: 267
});
grid.appendTo('#Grid');

function dataBound() {
    if (initial === true) {
        grid.groupModule.collapseAll();
        initial = false;
    }
}