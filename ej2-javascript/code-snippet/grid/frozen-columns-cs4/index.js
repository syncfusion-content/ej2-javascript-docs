var grid = new ej.grids.Grid({
  dataSource: data,
  allowSelection: false,
  enableHover: false,
  columns: [
      { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
      { field: 'CustomerID', headerText: 'Customer ID', width: 100, freeze: 'Left' },
      { field: 'OrderDate', headerText: 'Order Date', width: 100, format: 'yMd', textAlign: 'Right' },
      { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 80 },
      { field: 'ShipName', headerText: 'Ship Name', width: 130 },
      { field: 'ShipAddress', headerText: 'Ship Address', width: 140, freeze: 'Fixed' },
      { field: 'ShipCity', headerText: 'Ship City', width: 100 },
      { field: 'ShipCountry', headerText: 'Ship Country', width: 100, freeze: 'Right' },
      { field: 'ShipRegion', headerText: 'Ship Region', width: 80 },
      { field: 'ShipPostalCode', headerText: 'Ship Postal Code', width: 110 },
      { field: 'Freight', headerText: 'Freight', width: 80 }
  ]
});
grid.appendTo('#Grid');