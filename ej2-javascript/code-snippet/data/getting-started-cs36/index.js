let template = '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${EmployeeID}</td><td>${ShipCity}</td><td>${ShipCountry}</td></tr>';

let compiledFunction = ej.base.compile(template);

let table = document.getElementById('datatable');

const datamanger = new ej.data.DataManager({
  // Use remote server host and port instead of 'xxxx'.
  url: "https://localhost:xxxx/api/Orders",
  adaptor: new ej.data.WebMethodAdaptor()
});

datamanger.executeQuery(new ej.data.Query().take(8)).then((e) => {

  (e.result.result).forEach((data) => {
    table.appendChild(compiledFunction(data)[0]);
  });
});