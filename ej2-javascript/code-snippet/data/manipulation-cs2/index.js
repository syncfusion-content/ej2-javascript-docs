var template = '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${EmployeeID}</td></tr>';

var compiledFunction = ej.base.compile(template);

var table = (document.getElementById('datatable'));
var dataManager = new ej.data.DataManager(data.slice(0, 5));

dataManager.executeQuery(new ej.data.Query())
.then((e) => {
    (e.result).forEach((data) => {
        table.tBodies[0].appendChild(compiledFunction(data)[0].firstChild);
    });
});

var button = document.getElementById('manipulate');
var orderIdInput = document.getElementById('OrderID');
var CustomerIdInput = document.getElementById('CustomerID');
var employeeIdInput =document.getElementById('EmployeeID');

button.onclick = () => {
    var data = {
        OrderID: +orderIdInput.value,
        CustomerID: CustomerIdInput.value,
        EmployeeID: +employeeIdInput.value
    };
    if (!data.OrderID) { return; }
    dataManager.update('OrderID', data);
    dataManager.executeQuery(new ej.data.Query())
    .then((e) => {
        table.tBodies[0].innerHTML = '';
        (e.result).forEach((data) => {
            table.tBodies[0].appendChild(compiledFunction(data)[0].firstChild);
        });
    });
};
