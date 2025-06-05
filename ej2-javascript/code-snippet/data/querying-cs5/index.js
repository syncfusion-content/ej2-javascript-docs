var template =
  '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${EmployeeID}</td></tr>';

var compiledFunction = ej.base.compile(template);

const SERVICE_URI = 'https://services.odata.org/V4/Northwind/Northwind.svc/';

var table = document.getElementById('datatable');

new ej.data.DataManager({ url: SERVICE_URI, adaptor: new ej.data.ODataV4Adaptor })
    .executeQuery(new ej.data.Query().from('Orders').requiresCount(true).take(5)) 
    .then((e) => {
        console.log('Total Count:', e.count); // Count from server.
        (e.result).forEach((data) => {
            table.appendChild(compiledFunction(data)[0]);
        });
    });