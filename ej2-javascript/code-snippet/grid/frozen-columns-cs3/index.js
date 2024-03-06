var grid = new ej.grids.Grid({
  dataSource: data,
  enableHover: false,
  height:315,
  columns: [
    { field: 'OrderID', headerText: 'Order ID', width: '90', textAlign: 'Right' },
    { field: 'Freight', headerText: 'Freight', width: '90', format: 'C2', textAlign: 'Right', freeze: 'Fixed' },
    { field: 'CustomerID', headerText: 'Customer ID', width: '100', freeze: 'Right' },
    { field: 'OrderDate', headerText: 'Order Date', width: '100', format: 'yMd', textAlign: 'Right' },
    { field: 'ShipName', headerText: 'Ship Name', width: '100' },
    { field: 'ShipAddress', headerText: 'Ship Address', width: '120' },
    { field: 'ShipCity', headerText: 'Ship City', width: '110' },
    { field: 'ShipCountry', headerText: 'Ship Country', width: '100', freeze: 'Left' } 
  ]
});
grid.appendTo('#Grid');

var columnDropDown= new ej.dropdowns.DropDownList({
  dataSource: [
    { id: 'OrderID', name: 'Order ID' },
    { id: 'Freight', name: 'Freight' },
    { id: 'CustomerID', name: 'Customer ID' },
    { id: 'OrderDate', name: 'Order Date' },
    { id: 'ShipName', name: 'Ship Name' },
    { id: 'ShipAddress', name: 'Ship Address' },
    { id: 'ShipCity', name: 'Ship City' },
    { id: 'ShipCountry', name: 'Ship Country' },
],
fields: { text: 'name', value: 'id' },
index: 0,
width: 100
});
columnDropDown.appendTo('#columnDropDown');

var directionDropDown= new ej.dropdowns.DropDownList({
  dataSource: [
    { id: 'Left', name: 'Left' },
    { id: 'Right', name: 'Right' },
    { id: 'Fixed', name: 'Fixed' },
  ],
  fields: { text: 'name', value: 'id' },
  index: 0,
  width: 80
});
directionDropDown.appendTo('#directionDropDown');

var button = new ej.buttons.Button({ content: 'Update' });
button.appendTo('#updateButton');

document.getElementById('updateButton').addEventListener('click', function() {
  grid.getColumnByField(columnDropDown.value).freeze = directionDropDown.value
  grid.refreshColumns();
});