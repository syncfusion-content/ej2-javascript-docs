var template =
  '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${EmployeeID}</td></tr>';

var compiledFunction = ej.base.compile(template);

const SERVICE_URI = 'https://services.odata.org/V4/Northwind/Northwind.svc/';

var table = document.getElementById('datatable');

var baseQuery = new ej.data.Query()
    .from('Orders')
    .select(['OrderID', 'CustomerID', 'EmployeeID'])
    .take(5);
    
var clonedQuery = baseQuery.clone().skip(5);

new ej.data.DataManager({
  url: SERVICE_URI,
  adaptor: new ej.data.ODataV4Adaptor(),
})
  .executeQuery(clonedQuery)
  .then((e) => {
    e.result.forEach((data) => {
      table.appendChild(compiledFunction(data)[0]);
    });
  });
