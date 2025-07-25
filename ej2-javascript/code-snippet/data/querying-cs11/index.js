
var dropdown = new ej.dropdowns.DropDownList({
  dataSource: [
    { text: 'Order ID', value: 'OrderID' },
    { text: 'Customer ID', value: 'CustomerID' },
    { text: 'Employee ID', value: 'EmployeeID' },
  ],
  fields: { text: 'text', value: 'value' },
  placeholder: 'Select a column',
  value: 'OrderID',
  width:'190px'
});
dropdown.appendTo('#colName');

var sortButton = new ej.buttons.Button();
sortButton.appendTo('#sortBtn');

var template = '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${EmployeeID}</td></tr>';
var compiledFunction = ej.base.compile(template);
var table = document.getElementById('datatable');
var tbody = table.querySelector('tbody');

const SERVICE_URI = 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/';
const dataManager = new ej.data.DataManager({
  url: SERVICE_URI,
  adaptor: new ej.data.ODataV4Adaptor()
});

function loadData(sortField = 'OrderID') {
  const query = new ej.data.Query().sortBy(sortField, 'ascending').take(8);
  dataManager.executeQuery(query).then((e) => {
    tbody.innerHTML = '';
    e.result.forEach(data => {
      const fragment = compiledFunction(data);
      if (fragment && fragment.length > 0) {
        let rowWrapper = document.createElement('tbody');
        rowWrapper.innerHTML = fragment[0].outerHTML;
        tbody.appendChild(rowWrapper.firstElementChild);
      }
    });
  });
}

loadData();

document.getElementById('sortBtn').addEventListener('click', () => {
  const sortField = dropdown.value;
  loadData(sortField);
});
