var grid= new ej.grids.Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 90 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'Freight', headerText: 'Freight', format:'C2', width: 90 },
        { field: 'ShipName', headerText: 'Ship Name', width: 120 }
    ],
    showColumnMenu: true,
    height: 315
});
grid.appendTo('#Grid');