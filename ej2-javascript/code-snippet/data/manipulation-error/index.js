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

function renderTable() {
  datamanager.executeQuery(new ej.data.Query())
    .then((e) => {
      if (e && e.result && e.result.result) {
        localData = e.result.result;
        table.tBodies[0].innerHTML = '';
        localData.forEach((data) => {
          if (data && data.OrderID) {
            table.tBodies[0].appendChild(compiledFunction(data)[0].firstChild);
          }
        });
      }
    })
    .catch((error) => {
      console.error("Server error while fetching data:", error);
      document.getElementById('message').innerText = "An error occurred while loading data. Please try again later."
    });
}


// Insert new record.
const insertBtn = document.getElementById('insertBtn');
insertBtn.onclick = () => {
  const orderid = document.getElementById('insertOrderID');
  const cusid = document.getElementById('insertCustomerID');
  const empid = document.getElementById('insertEmployeeID');
  const newData = {
    OrderID: parseInt(orderid.value, 10),
    CustomerID: cusid.value,
    EmployeeID: parseInt(empid.value, 10)
  };
  datamanager.insert(newData, new ej.data.Query())
    .then(() => {
      document.getElementById('message').innerText = '';
      return renderTable();
    })
    .catch(async (err) => {
      if (Array.isArray(err) && err[0]?.error instanceof Response) {
        const response = err[0].error;
        const errorData = await response.json();
        err.message = errorData.message || 'Failed to insert record.';
      }
      document.getElementById('message').innerText = err.message;
    });

};

// Update a record.
const updateBtn = document.getElementById('updateBtn');
updateBtn.onclick = () => {
  const orderid = document.getElementById('updateOrderID');
  const cusid = document.getElementById('updateCustomerID');
  const empid = document.getElementById('updateEmployeeID');
  const updatedData = {
    OrderID: parseInt(orderid.value, 10),
    CustomerID: cusid.value,
    EmployeeID: parseInt(empid.value, 10)
  };
  datamanager.update('OrderID', updatedData, new ej.data.Query())
    .then(() => {
    document.getElementById('message').innerText = '';
    return renderTable();
  })
    .catch(async (err) => {
      if (Array.isArray(err) && err[0]?.error instanceof Response) {
        const response = err[0].error;
        const errorData = await response.json();
        err.message = errorData.message || 'Failed to update record.';
      }
      document.getElementById('message').innerText = err.message;
    });

};

// Delete a record.
const deleteBtn = document.getElementById('deleteBtn');
deleteBtn.onclick = () => {
  const orderid = document.getElementById('deleteOrderID');
  datamanager.remove('OrderID', { OrderID: parseInt(orderid.value, 10) }, new ej.data.Query())
    .then(() => {
    document.getElementById('message').innerText = '';
    return renderTable();
  })
    .catch(async (err) => {
      if (Array.isArray(err) && err[0]?.error instanceof Response) {
        const response = err[0].error;
        const errorData = await response.json();
        err.message = errorData.message || 'Failed to delete record.';
      }
      document.getElementById('message').innerText = err.message;
    });
};
