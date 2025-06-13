var tableBody = document.getElementById('datatable').querySelector('tbody');

var SERVICE_URI = 'https://services.syncfusion.com/js/production/';

var dataManager = new ej.data.DataManager({
  url: SERVICE_URI + 'api/Orders',
  adaptor: new ej.data.WebApiAdaptor()
});

dataManager.executeQuery(new ej.data.Query()).then(function (e) {
  console.log('Original data:', e.result);
  const transformed = e.result.map(item => ({
    OrderID: item.OrderID,
    CustomerID: item.CustomerID.toLowerCase(),
    EmployeeID: item.EmployeeID
  })
  );
  console.log('Transformed data:', transformed);

  transformed.forEach(function(data) {
    var tr = document.createElement('tr');
    var tdOrder = document.createElement('td');
    tdOrder.textContent = data.OrderID;
    tr.appendChild(tdOrder);

    var tdCustomer = document.createElement('td');
    tdCustomer.textContent = data.CustomerID;
    tr.appendChild(tdCustomer);

    var tdEmployee = document.createElement('td');
    tdEmployee.textContent = data.EmployeeID;
    tr.appendChild(tdEmployee);

    tableBody.appendChild(tr);
  });
});