ej.grids.Grid.Inject( ej.grids.DetailRow,ej.grids.Toolbar, ej.grids.ExcelExport);
var grid = new ej.grids.Grid({
  dataSource: employeeData,
  toolbar: ['ExcelExport'],
  allowExcelExport: true,
  columns: [
    { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 120 },
    { field: 'FirstName', headerText: 'First Name', width: 150 },
    { field: 'City', headerText: 'City', width: 150 },
    { field: 'Country', headerText: 'Country', width: 150 }
  ],
  childGrid: {
    dataSource: data,
    queryString: 'EmployeeID',
    columns: [
      { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
      { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
      { field: 'OrderDate', headerText: 'Order Date', width: 120,format: { type: 'date', format: 'dd-MM-yyyy' }},
      { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ],
  },
  exportDetailDataBound: exportDetailDataBound,
  toolbarClick: toolbarClick,
});
grid.appendTo('#Grid');
function exportDetailDataBound(args) {
  args.childGrid.columns[2].format = 'dd\\/MM\\/yyyy';
}
function toolbarClick(args) {
  if (args['item'].id === 'Grid_excelexport') {
    var exportProperties = {
      hierarchyExportMode: 'All',
    };
  grid.excelExport(exportProperties);
  }
}