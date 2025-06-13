import { DataManager, Query, WebApiAdaptor, ReturnOption } from '@syncfusion/ej2-data';

const tableBody = document.getElementById('datatable')?.querySelector('tbody');
if (!tableBody) {
  throw new Error('Table body not found');
}

const SERVICE_URI = 'https://services.syncfusion.com/js/production/';

const dataManager = new DataManager({
  url: SERVICE_URI + 'api/Orders',
  adaptor: new WebApiAdaptor()
});

dataManager.executeQuery(new Query()).then((e: ReturnOption) => {
  console.log('Original data:', e.result);

  const transformed = (e.result as any[])
    .map(item => ({
      OrderID: item.OrderID,
      CustomerID: item.CustomerID.toLowerCase(),
      EmployeeID: item.EmployeeID
    })) 

  console.log('Transformed data:', transformed);

  transformed.forEach(data => {
    const tr = document.createElement('tr');

    const tdOrder = document.createElement('td');
    tdOrder.textContent = data.OrderID.toString();
    tr.appendChild(tdOrder);

    const tdCustomer = document.createElement('td');
    tdCustomer.textContent = data.CustomerID;
    tr.appendChild(tdCustomer);

    const tdEmployee = document.createElement('td');
    tdEmployee.textContent = data.EmployeeID.toString();
    tr.appendChild(tdEmployee);

    tableBody.appendChild(tr);
  });
}).catch(error => {
  console.error('Data fetch error:', error);
});