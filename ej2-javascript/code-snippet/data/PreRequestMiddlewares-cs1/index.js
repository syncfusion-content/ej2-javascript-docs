var template = '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${EmployeeID}</td></tr>';
var compiledFunction = ej.base.compile(template);
var table = document.getElementById('datatable');

var SERVICE_URI = 'https://services.syncfusion.com/js/production/';

var dataManager = new ej.data.DataManager({
    url: SERVICE_URI + 'api/Orders',
    adaptor: new ej.data.WebApiAdaptor()
});

dataManager.applyPreRequestMiddlewares = async function (request) {
    try {
    var response = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        }
    });

    var data = await response.json();
    var token = data.id; // Simulate token value.

    return {
        headers: {
        Authorization: 'Bearer ' + token
        }
    };
    } catch (err) {
    console.error('Token fetch failed:', err);
    return {};
    }
};

dataManager.executeQuery(new ej.data.Query()).then(function (e) {
    e.result.forEach(function (data) {
    table.appendChild(compiledFunction(data)[0]);
    });
});