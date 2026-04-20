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

button.onclick = () => {
    if (!orderIdInput.value) { return; }
    dataManager.remove('OrderID', { OrderID: +orderIdInput.value });
    dataManager.executeQuery(new ej.data.Query())
        .then((e) => {
            table.tBodies[0].innerHTML = '';
            (e.result).forEach((data) => {
                table.tBodies[0].appendChild(compiledFunction(data)[0].firstChild);
            });
        });
};

