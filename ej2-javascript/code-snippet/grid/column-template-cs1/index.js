var grid = new ej.grids.Grid({
    dataSource: employeeData,
    columns: [
        {
            headerText: 'Employee Image', textAlign: 'Center',
            template: '#template', width: 150
        },
        { field: 'FirstName', headerText: 'First Name', width: 100 },
        { field: 'LastName', headerText: 'Last Name', width: 100 },
        { field: 'City', headerText: 'City', width: 100 }
    ],
    height: 315
});
grid.appendTo('#Grid');