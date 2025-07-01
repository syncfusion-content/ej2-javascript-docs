import { DataManager, Query, ReturnOption } from '@syncfusion/ej2-data';
import { compile } from '@syncfusion/ej2-base';
import { data } from './datasource.ts';


// Compile template for inserting data rows.
let template: string = '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${EmployeeID}</td></tr>';
let compiledFunction: Function = compile(template);

// Get the table and initialize DataManager.
let table: HTMLTableElement = <HTMLTableElement>document.getElementById('datatable');
let datamanger: DataManager = new DataManager(data);

// Function to render table data.
function renderTable() {
    datamanger.executeQuery(new Query()).then((e: ReturnOption) => {
        table.tBodies[0].innerHTML = '';
        (<Object[]>e.result).forEach((data: Object) => {
            table.tBodies[0].appendChild(compiledFunction(data)[0].firstChild);
        });
    });
}

// Insert new record.
let insertBtn: HTMLInputElement = <HTMLInputElement>document.getElementById('insertBtn');
insertBtn.onclick = async () => {
    let orderid = <HTMLInputElement>document.getElementById('OrderID');
    let cusid = <HTMLInputElement>document.getElementById('CustomerID');
    let empid = <HTMLInputElement>document.getElementById('EmployeeID');

    if (!orderid.value || !cusid.value || !empid.value) { 
        (document.getElementById('message') as HTMLElement).innerText = 'All fields are required to insert a new order.';
        return; 
    }
    const exists =  (datamanger.dataSource.json as  OrderData[]).some(item => item.OrderID === Number(orderid.value));
    if (exists) {
        document.getElementById('message')!.innerText ='OrderID ' + orderid.value + ' already exists. Please use a unique OrderID.';
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
let updateBtn: HTMLInputElement = <HTMLInputElement>document.getElementById('updateBtn');
updateBtn.onclick = () => {
    let orderid = <HTMLInputElement>document.getElementById('updateOrderID');
    let cusid = <HTMLInputElement>document.getElementById('updateCustomerID');
    let empid = <HTMLInputElement>document.getElementById('updateEmployeeID');

    let updatedData = {
        OrderID: +orderid.value,
        CustomerID: cusid.value,
        EmployeeID: +empid.value
    };

    if (!updatedData.OrderID) {   
       (document.getElementById('message') as HTMLElement).innerText ='OrderID is required to update';
       return;
   }
    datamanger.update('OrderID', updatedData);
    renderTable();
};

// Delete a record
let deleteBtn: HTMLInputElement = <HTMLInputElement>document.getElementById('deleteBtn');
deleteBtn.onclick = () => {
    let orderid = <HTMLInputElement>document.getElementById('deleteOrderID');
    if (!orderid.value) {      
        (document.getElementById('message') as HTMLElement).innerText ='OrderID is required to delete';
        return; 
    }

    datamanger.remove('OrderID', { OrderID: parseInt(orderid.value) });
    renderTable();
};

// Initial table render.
renderTable();

interface OrderData {
    OrderID: number;
    CustomerID: string;
    EmployeeID: number;
}
