// Compile template for inserting data rows.
const template = '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${EmployeeID}</td></tr>';
const compiledFunction = ej.base.compile(template);
let localData = [];
// Get the table and initialize DataManager.
const table = document.getElementById('datatable');
const datamanager = new ej.data.DataManager({
    // Use remote server host and port instead of 'xxxx'.
    url: 'https://localhost:xxxx/api/Order',
    insertUrl: 'https://localhost:xxxx/api/Order/Insert',
    updateUrl: 'https://localhost:xxxx/api/Order/Update',
    removeUrl: 'https://localhost:xxxx/api/Order/Remove',
    adaptor: new ej.data.UrlAdaptor()
});

// Initial table render.
renderTable();

async function renderTable() {
    const e = await datamanager.executeQuery(new ej.data.Query());
    if (e && e.result && e.result.result) {
        localData = (e.result.result);
        table.tBodies[0].innerHTML = '';
        (e.result.result).forEach((data) => {
            if (data && data.OrderID) {
                table.tBodies[0].appendChild(compiledFunction(data)[0].firstChild);
            }
        });
    }
}

// Insert new record.
const insertBtn = document.getElementById('insertBtn');
insertBtn.onclick = async () => {
  const orderid = document.getElementById('insertOrderID');
  const cusid = document.getElementById('insertCustomerID');
  const empid = document.getElementById('insertEmployeeID');
  if (!orderid.value || !cusid.value || !empid.value) {
    document.getElementById('message').innerText = 'All fields are required to insert a new order.';
    return;
  }
  const orderIdValue = parseInt(orderid.value, 10);
  const exists = localData.some(item => item.OrderID === orderIdValue);
  if (exists) {
    document.getElementById('message').innerText = `OrderID ${orderIdValue} already exists. Please use a unique OrderID.`;
    return;
  }
  const newData = {
    OrderID: parseInt(orderid.value, 10),
    CustomerID: cusid.value,
    EmployeeID: parseInt(empid.value, 10)
  };
  await datamanager.insert(newData, new ej.data.Query());
  await renderTable();
};

// Update a record.
const updateBtn = document.getElementById('updateBtn');
updateBtn.onclick = async () => {
  const orderid = document.getElementById('updateOrderID');
  const cusid = document.getElementById('updateCustomerID');
  const empid = document.getElementById('updateEmployeeID');
  const updatedData = {
    OrderID: parseInt(orderid.value, 10),
    CustomerID: cusid.value,
    EmployeeID: parseInt(empid.value, 10)
  };
  if (!updatedData.OrderID) {
    document.getElementById('message').innerText = 'OrderID is required to update';
    return;
  }
  await datamanager.update('OrderID', updatedData, new ej.data.Query());
  await renderTable();
};

// Delete a record.
const deleteBtn = document.getElementById('deleteBtn');
deleteBtn.onclick = async () => {
  const orderid = document.getElementById('deleteOrderID');
  if (!orderid.value) {
    document.getElementById('message').innerText = 'OrderID is required to delete';
    return;
  }
  await datamanager.remove('OrderID', { OrderID: parseInt(orderid.value, 10) }, new ej.data.Query());
  await renderTable();
};
