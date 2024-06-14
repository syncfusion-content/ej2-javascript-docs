var data = function(count) {
  var names = ["John", "Alice", "Bob", "Mario Pontes", "Yang Wang", "Michael", "Nancy", "Robert King"];
  var hours = [8, 12, 16];
  var status = ["Pending", "Completed", "In Progress"];
  var designation = ["Engineer", "Manager", "Tester"];
  var result = [];
  for (var i = 0; i < count; i++) {
      result.push({
          TaskID: i + 1,
          Engineer: names[Math.floor(Math.random() * names.length)],
          Designation: designation[Math.floor(Math.random() * designation.length)],
          Estimation: hours[Math.floor(Math.random() * hours.length)],
          Status: status[Math.floor(Math.random() * status.length)]
      });
  }
  return result;
};

var columns = [
  { field: 'TaskID', header: 'Task ID', width: 100 },
  { field: 'Engineer', header: 'Engineer', width: 140 },
  { field: 'Designation', header: 'Designation', width: 130 },
  { field: 'Estimation', header: 'Estimation', width: 120 },
  { field: 'Status', header: 'Status', width: 120,}
];

var virtualComboboxObj = new ej.multicolumncombobox.MultiColumnComboBox({
  dataSource: data(150),
  columns: columns,
  enableVirtualization: true,
  fields: { text: 'Engineer', value: 'TaskID'},
  placeholder: 'Select an engineer',
  popupHeight: '230px',
  gridSettings: { rowHeight: 40 }
});
virtualComboboxObj.appendTo('#multicolumn');