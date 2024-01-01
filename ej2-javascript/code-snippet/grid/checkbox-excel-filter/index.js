ej.grids.Grid.Inject(ej.grids.Filter, ej.grids.Page, ej.grids.Selection, ej.grids.Sort);
var urlapi = new ej.data.DataManager({
    url: 'https://services.syncfusion.com/js/production/api/UrlDataSource',
    adaptor: new UrlAdaptor()
});
var grid = new ej.grids.Grid({
    dataSource: urlapi,
    query: new ej.data.Query().addParams('dataCount', '10000'),
    allowPaging: true,
    allowFiltering: true,
    allowSorting: true,
    filterSettings: { type: 'Excel', enableInfiniteScrolling: true, itemsCount: 40, loadingIndicator: 'Spinner' },
    columns: [
        { field: 'EmployeeID', headerText: 'Employee ID', isPrimaryKey: true, width: '120' },
        { field: 'Employees', headerText: 'Employee Name', width: '150' },
        { field: 'Designation', headerText: 'Designation', width: '130' },
        {
            field: 'CurrentSalary', headerText: 'Current Salary', format: 'C2',
            textAlign: 'Right', width: '120'
        },
    ],
    pageSettings: { pageCount: 5 }
});
grid.appendTo('#Grid');

