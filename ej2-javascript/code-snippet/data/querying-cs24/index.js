var template = '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${Freight}</td></tr>';

var compiledFunction = ej.base.compile(template);
var footerFn = ej.base.compile('<tr><td></td><td></td><td>Average: ${avg}</td></tr>');

const SERVICE_URI =  'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/';

var table = (document.getElementById('datatable'));

new ej.data.DataManager({ url: SERVICE_URI, adaptor: new ej.data.ODataV4Adaptor })
    .executeQuery(new ej.data.Query().take(5).requiresCount().aggregate('average', 'Freight'))
    .then((e) => {
        (e.result).forEach((data) => {
            table.appendChild(compiledFunction(data)[0]);
        });
        table.appendChild(footerFn({ avg: e.aggregates['Freight - average'].toFixed(2) })[0]);
    });