var template = '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${EmployeeID}</td><td>${ShipCountry}</td></tr>';
var compiledFunction = ej.base.compile(template);

var table = document.getElementById('datatable');
var errorMessage = document.getElementById('error-message');

class CustomAdaptor extends ej.data.ODataV4Adaptor {
    // Override adaptor methods here if needed.
}

const SERVICE_URI = 'https://localhost:xxxx/odata/Orders'; // Replace xxxx with your actual port number.

new ej.data.DataManager({ url: SERVICE_URI, adaptor: new CustomAdaptor() })
    .executeQuery(new ej.data.Query())
    .then(function (e) {
        e.result.forEach(function (record) {
            if (table) {
                table.innerHTML += compiledFunction(record)[0].outerHTML;
            }
        });
    })
    .catch(function (error) {
        console.error("Data fetch error:", error);
        if (errorMessage) {
            errorMessage.textContent = "Failed to load data. Please check your connection or service and try again.";
        }
    });