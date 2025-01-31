
var columns = [
    { field: 'OrderID', header: 'Order ID', width: 120 },
    { field: 'CustomerID', header: 'Customer ID', width: 130 },
    { field: 'ShipCountry', header: 'Ship Country', width: 120 }
];

var virtualComboboxObj = new ej.multicolumncombobox.MultiColumnComboBox({
  dataSource: new ej.data.DataManager({
    url:'https://services.syncfusion.com/js/production/api/Orders',
    adaptor: new ej.data.WebApiAdaptor(),
    crossDomain: true
  }),
  columns: columns,
  enableVirtualization: true,
  fields: { text: 'ShipCountry', value: 'CustomerID' },
  popupHeight: '230px',
  placeholder: 'Select a country',
  gridSettings: { rowHeight: 40 }
});
virtualComboboxObj.appendTo('#multicolumn');