
var columns = [
  { field: 'EmployeeID', header: 'Employee ID', width: 120 },
  { field: 'FirstName', header: 'Name', width: 130 },
  { field: 'Designation', header: 'Designation', width: 120 },
  { field: 'Country', header: 'Country', width: 90 },
];

var multiColumnComboboxObj = new ej.multicolumncombobox.MultiColumnComboBox({
  dataSource: new ej.data.DataManager({
    url:'https://services.syncfusion.com/js/production/api/Employees',
    adaptor: new ej.data.WebApiAdaptor(),
    crossDomain: true
  }),
  columns: columns,
  fields: { text: 'FirstName', value: 'EmployeeID' },
  placeholder: 'Select a name',
  popupHeight: '230px'
});
multiColumnComboboxObj.appendTo('#multicolumn');