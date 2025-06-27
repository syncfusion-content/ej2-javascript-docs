var template = '<tr><td>${EmployeeID}</td><td>${Employees}</td><td>${Designation}</td></tr>';
var compiledFunction = ej.base.compile(template);
const SERVICE_URI = 'https://services.syncfusion.com/js/production/api/UrlDataSource';
var table = document.getElementById('datatable');
var query = new ej.data.Query().sortBy('Designation', 'descending').take(8);
// Create DataManager instance.
let dataManager = new ej.data.DataManager({
  url: SERVICE_URI,
  adaptor: new ej.data.UrlAdaptor(),
  enablePersistence: true,
  id: 'JohnDoe',
}).executeQuery(query).then((e) => {
    e.result.forEach((data) => {
      table.appendChild(compiledFunction(data)[0]);
    });
});
window.applyDM = () => {
  const newQuery = new ej.data.Query().sortBy('EmployeeID', 'descending').take(8);
  table.innerHTML ='<tr><th>EmployeeID</th><th>Employees</th><th>Designation</th></tr>';
  dataManager.executeQuery(newQuery).then((e) => {
    e.result.forEach((data) => {
      table.appendChild(compiledFunction(data)[0]);
    });
  });
};
// This function can be called on button click.
window.clearDM = () => {
  dataManager.clearPersistence();
};