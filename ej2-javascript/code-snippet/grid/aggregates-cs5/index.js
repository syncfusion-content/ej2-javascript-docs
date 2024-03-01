ej.grids.Grid.Inject(ej.grids.Group, ej.grids.Aggregate);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowGrouping: true,
    groupSettings: { showDropArea: false, columns: ['ShipCountry'] },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'OrderDate', headerText: 'Order Date', width: 120, format: 'yMd' },
        { field: 'Freight', headerText: 'Freight', width: 150, format: 'C2' },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 150 }
    ],
    height: 290,
    aggregates: [{
        columns: [{
            type: 'Sum',
            field: 'Freight',
            groupFooterTemplate: 'Sum: ${Sum}'
        }]
    }]
});
grid.appendTo('#Grid');