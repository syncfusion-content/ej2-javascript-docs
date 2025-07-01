var template = '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${EmployeeID}</td><td>${ShipCountry}</td></tr>';
var compiledFunction = ej.base.compile(template);

class CustomAdaptor extends ej.data.ODataV4Adaptor {
    beforeSend(dm, request, settings) {
        request.headers.set('Accept-Language', 'Syncfusion');
        super.beforeSend(dm, request, settings);
    }
}

const SERVICE_URI = 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders';

var table = document.getElementById('datatable');

new ej.data.DataManager({ url: SERVICE_URI, adaptor: new CustomAdaptor() })
    .executeQuery(new ej.data.Query().take(8))
    .then((e) => {
        for (let record of e.result) {
            table.innerHTML += compiledFunction(record)[0].outerHTML;
        }
    });