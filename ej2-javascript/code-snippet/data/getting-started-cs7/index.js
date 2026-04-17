
var template = '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${EmployeeID}</td></tr>';

var compiledFunction = ej.base.compile(template);

const SERVICE_URL =  'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/?$top=7';

var table = (document.getElementById('datatable'));

var dm = new ej.data.DataManager({ url: SERVICE_URL, adaptor: new ej.data.ODataV4Adaptor(), offline: true });

dm.ready.then((e) => {
        (e.result).forEach((data) => {
            table.appendChild(compiledFunction(data)[0]);
        });
  });

