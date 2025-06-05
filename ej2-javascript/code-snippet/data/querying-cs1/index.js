var template = '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${EmployeeID}</td></tr>';

var compiledFunction = ej.base.compile(template);

const SERVICE_URI = 'https://services.odata.org/V4/Northwind/Northwind.svc/';

var table = (document.getElementById('datatable'));

new ej.data.DataManager({ url: SERVICE_URI, adaptor: new ej.data.ODataV4Adaptor })
    .executeQuery(
    new ej.data.Query()
      .from('Orders')                                           // Specifies the target resource.
      .select(['OrderID', 'CustomerID', 'EmployeeID'])          // Project's specific fields.
      .using(new ej.data.ODataV4Adaptor())                      // Uses a custom adaptor for processing.
      .skip(8)                                                  // Skips the first 8 records.
      .take(8)                                                  // Takes the next 8 records.
  )
  .then((e) => {
        (e.result).forEach((data) => {
            table.appendChild(compiledFunction(data)[0]);
        });
    });