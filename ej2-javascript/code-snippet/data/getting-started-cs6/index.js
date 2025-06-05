var template = '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${EmployeeID}</td></tr>';

var compiledFunction = ej.base.compile(template);

const SERVICE_URI = 'https://services.syncfusion.com/js/production/api/orders';

var table = (document.getElementById('datatable'));

new DataManager({ url: SERVICE_URI }).executeQuery(new Query().take(8)).then((e) => {
    const results = e.result.items;
    results.forEach((data) => {
        table.appendChild(compiledFunction(data)[0]);
    });
});

