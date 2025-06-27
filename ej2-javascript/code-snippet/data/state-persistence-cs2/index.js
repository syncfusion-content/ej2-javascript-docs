var template = '<tr><td>${EmployeeID}</td><td>${Employees}</td><td>${Designation}</td></tr>';
var compiledFunction = ej.base.compile(template);
const SERVICE_URI = 'https://services.syncfusion.com/js/production/api/UrlDataSource';
var table = document.getElementById('datatable');
// Create DataManager instance.
new ej.data.DataManager({
  url: SERVICE_URI,
  adaptor: new ej.data.UrlAdaptor(),
  enablePersistence: true,
  id: 'JohnDoe',
  //sort and search query won't persist now.
  ignoreOnPersist: ['onSortBy', 'onSearch'],
}).executeQuery(new ej.data.Query().sortBy('Designation', 'descending').take(8)).then((e) => {
    e.result.forEach((data) => {
      table.appendChild(compiledFunction(data)[0]);
    });
});