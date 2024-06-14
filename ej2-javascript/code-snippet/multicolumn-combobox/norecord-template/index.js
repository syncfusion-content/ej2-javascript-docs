var columnsData = [
  { field: 'EmpID', header: 'Employee ID', width: 90 },
  { field: 'Name', width: 90, header: 'Name' },
  { field: 'Designation', header: 'Designation', width: 90 },
  { field: 'Country', header: 'Country', width: 70 }
];

var multiComboBoxObject = new ej.multicolumncombobox.MultiColumnComboBox({
  dataSource: [],
  columns: columnsData,
  placeholder:"Select an employee",
  fields: { text: 'Name', value: 'EmpID' },
  noRecordsTemplate: "<span class='norecord'> NO RECORDS FOUND </span>"
});

multiComboBoxObject.appendTo('#multicolumn');