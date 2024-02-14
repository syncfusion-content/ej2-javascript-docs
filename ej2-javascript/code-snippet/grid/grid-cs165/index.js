var grid = new ej.grids.Grid({
  dataSource: data,
  selectionSettings: { mode: 'Both' },
  columns: [
      { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
      { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
      { field: 'ShipCity', headerText: 'Ship City', width: 150 },
      { field: 'ShipName', headerText: 'Ship Name', width: 150 }
  ],
  height: 315
});
grid.appendTo('#Grid');

var dropdownData = [
  { text: 'Row', value: 'Row' },
  { text: 'Cell', value: 'Cell' },
  { text: 'Both', value: 'Both' }
];

var dropdown = new ej.dropdowns.DropDownList({
  value: grid.selectionSettings.mode,
  popupHeight: '240px',
  width: 100,
  dataSource: dropdownData,
  change: valueChange,
});
dropdown.appendTo('#dropdown');

function valueChange(args) {
  grid.selectionSettings.mode = args.value;
}