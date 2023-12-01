var intl = new ej.base.Internationalization();

var dFormatter = intl.getDateFormat({ skeleton: 'yMd', type: 'date' });

(window).formatDate = (date) => dFormatter(date);

var grid = new ej.grids.Grid({
    dataSource: employeeData,
    rowTemplate: '#rowtemplate',
    columns: [
        { headerText: 'Employee Image', width: 150, textAlign: 'Center', field: 'OrderID' },
        { headerText: 'Employee Details', width: 300, field: 'EmployeeID' }
    ],
    height: 315
});
grid.appendTo('#Grid');