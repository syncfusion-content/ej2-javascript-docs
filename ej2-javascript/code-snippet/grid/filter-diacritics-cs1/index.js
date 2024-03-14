ej.grids.Grid.Inject(ej.grids.Filter);
var grid = new ej.grids.Grid({
    dataSource: data,
    allowFiltering: true,
    filterSettings: { ignoreAccent: true },
    columns: [
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 140 },
        { field: 'Name', headerText: 'Name', width: 140 },
        { field: 'ShipName', headerText: 'Ship Name', width: 170 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 140 }
    ]
});
grid.appendTo('#Grid');