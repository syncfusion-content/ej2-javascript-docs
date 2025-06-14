import { DataManager, UrlAdaptor, Query, ReturnOption } from '@syncfusion/ej2-data';
import { compile } from '@syncfusion/ej2-base';

// Compile template for inserting data rows.
const template = '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${EmployeeID}</td></tr>';
const compiledFunction = compile(template);
let localData: OrderData[] = [];
// Get the table and initialize DataManager.
const table = document.getElementById('datatable') as HTMLTableElement;
const datamanager = new DataManager({
    // Use remote server host and port instead of 'xxxx'.
    url: 'https://localhost:xxxx/api/Order',
    insertUrl: 'https://localhost:xxxx/api/Order/Insert',
    updateUrl: 'https://localhost:xxxx/api/Order/Update',
    removeUrl: 'https://localhost:xxxx/api/Order/Remove',
    adaptor: new UrlAdaptor()
});

// Initial table render.
renderTable();

async function renderTable() {
  const e = await datamanager.executeQuery(new Query()) as ReturnOption;
  if (e && e.result && e.result.result) {
    localData = (e.result.result as OrderData[]);
    table.tBodies[0].innerHTML = '';
    (e.result.result as OrderData[]).forEach((data: any) => {
      if (data && data.OrderID) {
        table.tBodies[0].appendChild(compiledFunction(data)[0].firstChild);
      }
    });
  }
}

// Insert new record.
const insertBtn = document.getElementById('insertBtn') as HTMLInputElement;
insertBtn.onclick = async () => {
  const orderid = document.getElementById('insertOrderID') as HTMLInputElement;
  const cusid = document.getElementById('insertCustomerID') as HTMLInputElement;
  const empid = document.getElementById('insertEmployeeID') as HTMLInputElement;
  if (!orderid.value || !cusid.value || !empid.value) {
    (document.getElementById('message') as HTMLElement).innerText = 'All fields are required to insert a new order.';
    return;
  }
  const orderIdValue = parseInt(orderid.value, 10);
  const exists = localData.some(item => item.OrderID === orderIdValue);
  if (exists) {
    (document.getElementById('message') as HTMLElement).innerText = `OrderID ${orderIdValue} already exists. Please use a unique OrderID.`;
    return;
  }
  const newData = {
    OrderID: parseInt(orderid.value, 10),
    CustomerID: cusid.value,
    EmployeeID: parseInt(empid.value, 10)
  };

  await datamanager.insert(newData, new Query());
  await renderTable();
};

// Update a record.
const updateBtn = document.getElementById('updateBtn') as HTMLInputElement;
updateBtn.onclick = async () => {
  const orderid = document.getElementById('updateOrderID') as HTMLInputElement;
  const cusid = document.getElementById('updateCustomerID') as HTMLInputElement;
  const empid = document.getElementById('updateEmployeeID') as HTMLInputElement;
  const updatedData = {
    OrderID: parseInt(orderid.value, 10),
    CustomerID: cusid.value,
    EmployeeID: parseInt(empid.value, 10)
  };
  if (!updatedData.OrderID) {
    (document.getElementById('message') as HTMLElement).innerText = 'OrderID is required to update';
    return;
  }
  await datamanager.update('OrderID', updatedData, new Query());
  await renderTable();
};

// Delete a record.
const deleteBtn = document.getElementById('deleteBtn') as HTMLInputElement;
deleteBtn.onclick = async () => {
  const orderid = document.getElementById('deleteOrderID') as HTMLInputElement;
  if (!orderid.value) {
    (document.getElementById('message') as HTMLElement).innerText = 'OrderID is required to delete';
    return;
  }
  await datamanager.remove('OrderID', { OrderID: parseInt(orderid.value, 10) }, new Query());
  await renderTable();
};

interface OrderData {
  OrderID: number;
  CustomerID: string;
  EmployeeID: number;
}
