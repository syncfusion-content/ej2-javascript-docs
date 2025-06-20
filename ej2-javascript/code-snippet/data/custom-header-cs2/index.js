var template =
  '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${EmployeeID}</td></tr>';

var compiledFunction = ej.base.compile(template);

const SERVICE_URI = 'https://services.syncfusion.com/js/production/api/Orders';

var table = document.getElementById('datatable');

class CustomODataAdaptor extends ej.data.ODataV4Adaptor {
  beforeSend(dm, request, settings) {
    // You can modify headers, URL, or method here.
    request.headers.set('syncfusion', 'true');
    super.beforeSend(dm, request, settings);
  }
}
new ej.data.DataManager({
  url: SERVICE_URI,
  adaptor: new CustomODataAdaptor(),
})
  .executeQuery(new ej.data.Query())
  .then((e) => {
    e.result.forEach((data) => {
      table.appendChild(compiledFunction(data)[0]);
    });
  });
