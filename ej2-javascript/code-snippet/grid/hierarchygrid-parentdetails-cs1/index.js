ej.grids.Grid.Inject(ej.grids.DetailRow);
var grid = new ej.grids.Grid({
  dataSource: employeeData,
  columns: [
      { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 100 },
      { field: 'FirstName', headerText: 'First Name', width: 100 },
      { field: 'LastName', headerText: 'LastName', width: 100 },
      { field: 'City', headerText: 'City', width: 120 }
  ],
  childGrid: {
      dataSource: data,
      queryString: 'EmployeeID',
      columns: [
          { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
          { field: 'CustomerID', headerText: 'Customer ID', width: 100 },
          { field: 'ShipCity', headerText: 'Ship City', width: 100 },
          { field: 'ShipName', headerText: 'Ship Name', width: 100 }
      ],
      created:created,
  },
  height: 270,
});
grid.appendTo('#Grid');

function created(args) {
  var parentRowData = this.parentDetails.parentRowData; // 'this' refers to the instance of the child grid.
  document.getElementById(
    'message'
  ).innerHTML = `EmployeeID: ${parentRowData.EmployeeID}, FirstName: ${parentRowData.FirstName}, Title: ${parentRowData.Title}`;
}