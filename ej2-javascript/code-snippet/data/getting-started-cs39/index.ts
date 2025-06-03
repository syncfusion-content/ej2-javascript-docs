import { DataManager, Query, ReturnOption, GraphQLAdaptor } from '@syncfusion/ej2-data';
import { compile } from '@syncfusion/ej2-base';

let data: DataManager = new DataManager({
  // Use remote server host and port instead of 'xxxx'.
  url: "http://localhost:xxxx", 
  adaptor: new GraphQLAdaptor({
    response: {
      result: 'getOrders.result',
      count: 'getOrders.count'
    },
    query: `query getOrders($datamanager: DataManager) {
      getOrders(datamanager: $datamanager) {
        count,
        result{
          OrderID, CustomerID, ShipCity, ShipCountry}
        }
      }`,

    // Mutation for performing CRUD.
    getMutation: function (action: any): string {
      if (action === 'insert') {
        return `mutation CreateOrderMutation($value: OrderInput!){
          createOrder(value: $value){
            OrderID, CustomerID, ShipCity, ShipCountry
          }
        }`;
      }
      else if (action === 'update') {
        return `mutation UpdateOrderMutation($key: Int!, $keyColumn: String,$value: OrderInput){
          updateOrder(key: $key, keyColumn: $keyColumn, value: $value) {
            OrderID, CustomerID, ShipCity, ShipCountry
          }
        }`;
      } 
      else {
        return `mutation RemoveOrderMutation($key: Int!, $keyColumn: String, $value: OrderInput){
          deleteOrder(key: $key, keyColumn: $keyColumn, value: $value) {
            OrderID, CustomerID, ShipCity, ShipCountry
          }
        }`;
      }
    }
  }),
});

let template: string = '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${ShipCity}</td><td>${ShipCountry}</td></tr>';

let compiledFunction: Function = compile(template);

let table: HTMLElement = (<HTMLElement>document.getElementById('datatable'));

async function renderTable() {
  const query = new Query();
  const e = await data.executeQuery(query) as ReturnOption;
  if (e && e.result && e.result.result) {
    (table as HTMLFormElement).tBodies[0].innerHTML = '';
    (e.result.result as Object[]).forEach((data: any) => {
      if (data && data.OrderID) {
        (table as HTMLFormElement).tBodies[0].appendChild(compiledFunction(data)[0].firstChild);
      }
    });
  } else {
    console.warn('No data received from API');
  }
}
renderTable(); // Load first 8 records.

// Insert new record.
const insertBtn = document.getElementById('insertBtn') as HTMLInputElement;
insertBtn.onclick = async () => {
    const orderid = document.getElementById('insertOrderID') as HTMLInputElement;
    const cusid = document.getElementById('insertCustomerID') as HTMLInputElement;
    const shipCity = (document.getElementById('insertShipCity') as HTMLInputElement).value;
    const shipCountry = (document.getElementById('insertShipCountry') as HTMLInputElement).value; 

    if (!orderid.value || !cusid.value) {
      (document.getElementById('message') as HTMLElement).innerText='OrderID and CustomerID are required';
      return;
    }
          
    const res = await data.executeQuery(new Query()) as any;
    const exists = res.result?.result?.some((item: any) => item.OrderID === Number(orderid.value));

    if (exists) {
      (document.getElementById('message') as HTMLElement).innerText = `OrderID ${orderid.value} already exists`;
      return;
    }

    const newData = {
      OrderID: parseInt(orderid.value, 10),
      CustomerID: cusid.value,
      ShipCity: shipCity,
      ShipCountry: shipCountry
    };

    try {
      await data.insert(newData, new Query());
      await renderTable();
    } catch (err) {
      console.error('Insert failed:', err);
    }
};

// Update a record.
const updateBtn = document.getElementById('updateBtn') as HTMLInputElement;
updateBtn.onclick = async () => {
    const orderid = document.getElementById('updateOrderID') as HTMLInputElement;
    const cusid = document.getElementById('updateCustomerID') as HTMLInputElement;
    const shipCity = (document.getElementById('updateShipCity') as HTMLInputElement).value;
    const shipCountry = (document.getElementById('updateShipCountry') as HTMLInputElement).value;
    const updatedData = {
        OrderID: parseInt(orderid.value, 10),
        CustomerID: cusid.value,
        ShipCity: shipCity,
        ShipCountry: shipCountry
    };

    if (!updatedData.OrderID) { return; }
    try {
      await data.update('OrderID', updatedData, new Query());
      await renderTable();
    } catch (err) {
      console.error('Update failed:', err);
    }
};

// Delete a record.
const deleteBtn = document.getElementById('deleteBtn') as HTMLInputElement;
deleteBtn.onclick = async () => {
    const orderid = document.getElementById('deleteOrderID') as HTMLInputElement;
    if (!orderid.value) { return; }
    try {
      await data.remove('OrderID', { OrderID: parseInt(orderid.value, 10) }, new Query());
      await renderTable();
    } catch (err) {
      console.error('Delete failed:', err);
    }
};

interface Order {
  OrderID: number;
  CustomerID: string;
  ShipCity: string;
  ShipCountry: string;
}