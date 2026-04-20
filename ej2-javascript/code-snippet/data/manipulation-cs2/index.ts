import { DataManager, Query, ReturnOption } from '@syncfusion/ej2-data';
import { compile } from '@syncfusion/ej2-base';
import { data } from './datasource.ts';

interface Order {
    OrderID: number;
    CustomerID: string;
    EmployeeID: number;
}

let template: string = '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${EmployeeID}</td></tr>';

let compiledFunction: Function = compile(template);

const table: HTMLTableElement = document.getElementById('datatable') as HTMLTableElement;
const dataManager: DataManager = new DataManager(data.slice(0, 5));

dataManager.executeQuery(new Query())
.then((e: ReturnOption) => {
    (e.result as Order[]).forEach((order: Order) => {
        table.tBodies[0].appendChild(compiledFunction(order)[0].firstChild as Node);
    });
});

const button: HTMLInputElement = document.getElementById('manipulate') as HTMLInputElement;
const orderIdInput: HTMLInputElement = document.getElementById('OrderID') as HTMLInputElement;
const customerIdInput: HTMLInputElement = document.getElementById('CustomerID') as HTMLInputElement;
const employeeIdInput: HTMLInputElement = document.getElementById('EmployeeID') as HTMLInputElement;

button.onclick = () => {
    let updatedOrder: Order = {
        OrderID: +orderIdInput.value,
        CustomerID: customerIdInput.value,
        EmployeeID: +employeeIdInput.value
    };

    if (!updatedOrder.OrderID) {
        return;
    }

    dataManager.update('OrderID', updatedOrder);
    dataManager.executeQuery(new Query())
    .then((e: ReturnOption) => {
        table.tBodies[0].innerHTML = '';
        (<Object[]>e.result).forEach((data: Object) => {
            table.tBodies[0].appendChild(compiledFunction(data)[0].firstChild);
        });
    });
};
