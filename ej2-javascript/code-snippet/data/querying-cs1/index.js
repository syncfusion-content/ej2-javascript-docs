var template = '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${EmployeeID}</td></tr>';

var compiledFunction = ej.base.compile(template);

const SERVICE_URI = 'https://services.odata.org/V4/Northwind/Northwind.svc/';

var table = (document.getElementById('datatable'));

let dataManager = new ej.data.DataManager({
    url: SERVICE_URI,
    adaptor: new ej.data.ODataV4Adaptor()
});

let query = new ej.data.Query()
    .from('Orders')                                  // Specifies the target resource.
    .select(['OrderID', 'CustomerID', 'EmployeeID']) // Project's specific fields.
    .skip(8)                                         // Skips the first 8 records.
    .take(8)                                         // Takes the next 8 records.
    .using(dataManager);                             // Associates the query with the specified DataManager instance.

query.execute().then((e) => {
    (e.result).forEach((data) => {
        table.appendChild(compiledFunction(data)[0]);
    });
});