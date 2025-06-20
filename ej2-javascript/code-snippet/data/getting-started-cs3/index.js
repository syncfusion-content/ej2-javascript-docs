let template = '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${EmployeeID}</td><td>${ShipCountry}</td></tr>';

var compiledFunction = ej.base.compile(template);

var table = (document.getElementById('datatable'));

const datamanger= new ej.data.DataManager({ 
    // Use remote server host and port instead of 'xxxx'.
    url: 'https://localhost:xxxx/odata/Orders/', 
    adaptor: new ej.data.ODataV4Adaptor 
});

datamanger.executeQuery(new ej.data.Query().take(8))
    .then((e) => {
    (e.result).forEach((data) => {
            table.appendChild(compiledFunction(data)[0]);
    });
});