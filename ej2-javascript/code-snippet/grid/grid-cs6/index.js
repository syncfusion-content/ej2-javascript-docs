var grid = new ej.grids.Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 140, },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', format: 'C', width: 120},
        { field: 'OrderDate', headerText: 'Order Date', textAlign: 'Right', format: 'yMd',width: 140, },
        { field: 'ShipCity', headerText: 'Ship City', visible: false, width: 100 }    
    ],
    height: 315
});
grid.appendTo('#Grid');

var toggle = new ej.buttons.Switch({
    change: Change,
});
toggle.appendTo('#switch');

function Change(args) {
    if (args.checked) {
        grid.getColumnByField('ShipCity').visible = true;
    } else {
        grid.getColumnByField('ShipCity').visible = false;
    }
    grid.refreshColumns();
}