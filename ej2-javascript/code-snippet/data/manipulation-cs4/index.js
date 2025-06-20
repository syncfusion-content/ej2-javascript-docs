import { data } from './es5-datasource.js';

// Compile template for inserting data rows.
let template= '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${EmployeeID}</td></tr>';
var compiledFunction = ej.base.compile(template);

// Get the table and initialize DataManager.
let table= document.getElementById('datatable');
let datamanger= new ej.data.DataManager(data);

// Function to render table data.
function renderTable() {
    datamanger.executeQuery(new ej.data.Query()).then((e) => {
        table.tBodies[0].innerHTML = ''; // Clear existing data.
        (e.result).forEach((data) => {
            table.tBodies[0].appendChild(compiledFunction(data)[0].firstChild);
        });
    });
}

// Insert new record
let insertBtn = document.getElementById('insertBtn');
insertBtn.onclick = () => {
    let orderid = document.getElementById('OrderID');
    let cusid = document.getElementById('CustomerID');
    let empid = document.getElementById('EmployeeID');

    if (!orderid.value || !cusid.value || !empid.value) { 
        document.getElementById('message').innerText = 'All fields are required to insert a new order.';
        return; 
    }
    const exists =  (datamanger.dataSource.json).some(item => item.OrderID === Number(orderid.value));
    if (exists) {
        document.getElementById('message').innerText ='OrderID ' + orderid.value + ' already exists. Please use a unique OrderID.';
        return;
    }

    let newData = {
        OrderID: parseInt(orderid.value),
        CustomerID: cusid.value,
        EmployeeID: parseInt(empid.value)
    };

    datamanger.insert(newData);
    renderTable();
};

// Update record.
let updateBtn = document.getElementById('updateBtn');
updateBtn.onclick = () => {
    let orderid = document.getElementById('updateOrderID');
    let cusid = document.getElementById('updateCustomerID');
    let empid = document.getElementById('updateEmployeeID');

    let updatedData = {
        OrderID: +orderid.value,
        CustomerID: cusid.value,
        EmployeeID: +empid.value
    };

    if (!updatedData.OrderID) { 
        document.getElementById('message').innerText ='OrderID is required to update';
        return; 
    }
    datamanger.update('OrderID', updatedData);
    renderTable();
};

// Delete a record.
let deleteBtn =document.getElementById('deleteBtn');
deleteBtn.onclick = () => {
    let orderid = document.getElementById('deleteOrderID');
    if (!orderid.value) {      
        document.getElementById('message').innerText ='OrderID is required to delete';
        return; 
    }

    datamanger.remove('OrderID', { OrderID: parseInt(orderid.value) });
    renderTable();
};

// Initial table render.
renderTable();

