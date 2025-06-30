var template = '<tr><td>${Sno}</td><td>${OrderID}</td><td>${CustomerID}</td><td>${EmployeeID}</td><td>${ShipCountry}</td></tr>';
var compiledFunction = ej.base.compile(template);

class CustomAdaptor extends ej.data.ODataV4Adaptor {
    processResponse(data, ds, query, xhr, request, changes) {
        if (data && data.value && Array.isArray(data.value)) {
            data.value.forEach((item, index) => {
                item.Sno = index + 1;
            });
        }
        return super.processResponse(data, ds, query, xhr, request, changes);
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