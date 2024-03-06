ej.grids.Grid.Inject(ej.grids.Reorder);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowReordering: true,
    allowSelection: false,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipCity', headerText: 'Ship City',width: 100, lockColumn: true, customAttributes: { class: 'customcss' }},
        { field: 'ShipName', headerText: 'Ship Name', width: 100 },
    ],
    height: 315
});
grid.appendTo('#Grid');