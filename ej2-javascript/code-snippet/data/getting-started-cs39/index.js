
let data = new ej.data.DataManager({
    url: "http://localhost:xxxx", // Use remote server host and port instead of 'xxxx'.
    adaptor: new ej.data.GraphQLAdaptor({
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
           
        // mutation for performing CRUD.
        getMutation: function (action) {
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

let template = '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${ShipCity}</td><td>${ShipCountry}</td></tr>';

let compiledFunction = ej.base.compile(template);

let table =document.getElementById('datatable');

async function renderTable() {
  const query = new ej.data.Query().skip(skip).take(take);
  const e = await data.executeQuery(query);
  if (e && e.result && e.result.result) {
    table.tBodies[0].innerHTML = '';
    (e.result.result).forEach((data) => {
        table.tBodies[0].appendChild(compiledFunction(data)[0].firstChild);
    });
  } else {
    console.warn('No data received from API');
  }
}
renderTable(); // Load first 8 records.


// Insert new record.
const insertBtn = document.getElementById('insertBtn');
insertBtn.onclick = async () => {
    const orderid = document.getElementById('insertOrderID');
    const cusid = document.getElementById('insertCustomerID');
    const shipCity = document.getElementById('insertShipCity').value;
    const shipCountry = document.getElementById('insertShipCountry').value; 
    if (!orderid.value || !cusid.value) {
      document.getElementById('message').innerText='OrderID and CustomerID are required';
      return;
    }
          
    const res = await data.executeQuery(new Query());
    const exists = res.result?.result?.some((item) => item.OrderID === Number(orderid.value));

    if (exists) {
      document.getElementById('message').innerText = `OrderID ${orderid.value} already exists`;
      return;
    }
    
    const newData = {
        OrderID: parseInt(orderid.value, 10),
        CustomerID: cusid.value,
        ShipCity: shipCity,
        ShipCountry: shipCountry
    };

    try {
        await data.insert(newData, new ej.data.Query());
        await renderTable();
    } catch (err) {
        console.error('Insert failed:', err);
    }
};

// Update a record.
const updateBtn = document.getElementById('updateBtn');
updateBtn.onclick = async () => {
    const orderid = document.getElementById('updateOrderID');
    const cusid = document.getElementById('updateCustomerID');
    const shipCity = document.getElementById('updateShipCity').value;
    const shipCountry = document.getElementById('updateShipCountry').value;
    const updatedData = {
        OrderID: parseInt(orderid.value, 10),
        CustomerID: cusid.value,
        ShipCity: shipCity,
        ShipCountry: shipCountry
    };

    if (!updatedData.OrderID) { 
        document.getElementById('message').innerText='OrderID is required to update';
        return; 
    }
    try {
        await data.update('OrderID', updatedData, new ej.data.Query());
        await renderTable();
    } catch (err) {
        console.error('Update failed:', err);
    }
};

// Delete a record.
const deleteBtn = document.getElementById('deleteBtn');
deleteBtn.onclick = async () => {
    const orderid = document.getElementById('deleteOrderID');
    if (!orderid.value) { 
      document.getElementById('message').innerText='OrderID is required to delete';
      return;
    }
    try {
      await data.remove('OrderID', { OrderID: parseInt(orderid.value, 10) }, new ej.data.Query());
      await renderTable();
    } catch (err) {
      console.error('Delete failed:', err);
    }
};

