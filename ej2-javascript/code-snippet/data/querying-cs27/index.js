var template = '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${EmployeeID}</td><td>${Freight}</td><td>${ShipCountry}</td></tr>';

var compiledFunction = ej.base.compile(template);

const SERVICE_URI = 'https://services.odata.org/V4/Northwind/Northwind.svc/';

var table = (document.getElementById('datatable'));

new ej.data.DataManager({ url: SERVICE_URI, adaptor: new ej.data.ODataV4Adaptor })
    .executeQuery(
    new ej.data.Query()
    .from("Orders")
    .select(["OrderID", "CustomerID", "EmployeeID", "Freight", "ShipCountry"])
    .addParams("PageNumber", 5)
    .addParams("PageSize", 5)
    .where("CustomerID", "contains", "A", false)                  
  )
  .then((e) => {
        (e.result).forEach((data) => {
            table.appendChild(compiledFunction(data)[0]);
        });
    });