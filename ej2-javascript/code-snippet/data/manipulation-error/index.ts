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

function renderTable() {
  datamanager.executeQuery(new Query())
    .then((e: any) => {
      if (e && e.result && e.result.result) {
        localData = e.result.result as OrderData[];
        table.tBodies[0].innerHTML = '';
        localData.forEach((data: any) => {
          if (data && data.OrderID) {
            table.tBodies[0].appendChild(compiledFunction(data)[0].firstChild);
          }
        });
      }
    })
    .catch((error: any) => {
      console.error("Server error while fetching data:", error);
      (document.getElementById('message') as HTMLElement).innerText = "An error occurred while loading data. Please try again later."

    });
}

// Insert new record.
const insertBtn = document.getElementById('insertBtn') as HTMLInputElement;
insertBtn.onclick = () => {
  const orderid = document.getElementById('insertOrderID') as HTMLInputElement;
  const cusid = document.getElementById('insertCustomerID') as HTMLInputElement;
  const empid = document.getElementById('insertEmployeeID') as HTMLInputElement;
  const newData = {
    OrderID: parseInt(orderid.value, 10),
    CustomerID: cusid.value,
    EmployeeID: parseInt(empid.value, 10)
  };
  (datamanager.insert(newData, new Query()) as Promise<any>)
    .then(() => {
      (document.getElementById('message') as HTMLElement).innerText = '';
      return renderTable();
    })
    .catch(async (err: any) => {
      if (Array.isArray(err) && err[0]?.error instanceof Response) {
        const response = err[0].error;
        const errorData = await response.json();
        (err as any).message = errorData.message || 'Failed to insert record.';
      }
      (document.getElementById('message') as HTMLElement).innerText = err.message;
    });
};

// Update a record.
const updateBtn = document.getElementById('updateBtn') as HTMLInputElement;
updateBtn.onclick = () => {
  const orderid = document.getElementById('updateOrderID') as HTMLInputElement;
  const cusid = document.getElementById('updateCustomerID') as HTMLInputElement;
  const empid = document.getElementById('updateEmployeeID') as HTMLInputElement;
  const updatedData = {
    OrderID: parseInt(orderid.value, 10),
    CustomerID: cusid.value,
    EmployeeID: parseInt(empid.value, 10)
  };

  (datamanager.update('OrderID', updatedData, new Query()) as Promise<any>)
    .then(() => {
    (document.getElementById('message') as HTMLElement).innerText = '';
    return renderTable();
  })
    .catch(async (err: any) => {
      if (Array.isArray(err) && err[0]?.error instanceof Response) {
        const response = err[0].error;
        const errorData = await response.json();
        (err as any).message = errorData.message || 'Failed to update record.';
      }
      (document.getElementById('message') as HTMLElement).innerText = err.message;
    });

};

// Delete a record.
const deleteBtn = document.getElementById('deleteBtn') as HTMLInputElement;
deleteBtn.onclick = () => {
  const orderid = document.getElementById('deleteOrderID') as HTMLInputElement;
  (datamanager.remove('OrderID', { OrderID: parseInt(orderid.value, 10) }, new Query()) as Promise<any>)
    .then(() => {
    (document.getElementById('message') as HTMLElement).innerText = '';
    return renderTable();
  })
    .catch(async (err: any) => {
      if (Array.isArray(err) && err[0]?.error instanceof Response) {
        const response = err[0].error;
        const errorData = await response.json();
        (err as any).message = errorData.message || 'Failed to delete record.';
      }
      (document.getElementById('message') as HTMLElement).innerText = err.message;
    });
};

interface OrderData {
  OrderID: number;
  CustomerID: string;
  EmployeeID: number;
}
