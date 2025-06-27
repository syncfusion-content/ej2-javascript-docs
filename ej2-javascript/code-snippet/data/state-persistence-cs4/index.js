var template = '<tr><td>${EmployeeID}</td><td>${Employees}</td><td>${Designation}</td></tr>';
var compiledFunction = ej.base.compile(template);
const SERVICE_URI = 'https://services.syncfusion.com/js/production/api/UrlDataSource';
var table = document.getElementById('datatable');
var query1 = new ej.data.Query().sortBy('Designation', 'descending').take(8);
var query2 = new ej.data.Query().sortBy('EmployeeID', 'descending').take(8);
// Create DataManager instance.
let dataManager = new ej.data.DataManager({
  url: SERVICE_URI,
  adaptor: new ej.data.UrlAdaptor(),
  enablePersistence: true,
  id: 'JohnDoe',
}).executeQuery(query1).then((e) => {
    e.result.forEach((data) => {
      table.appendChild(compiledFunction(data)[0]);
    });
});
// Persist the query into the DataManager’s existing persisted data.
dataManager.setPersistData(null, 'JohnDoe', query2);