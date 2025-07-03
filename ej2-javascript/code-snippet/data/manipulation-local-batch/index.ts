import { DataManager, Query, ReturnOption } from '@syncfusion/ej2-data';
import { compile } from '@syncfusion/ej2-base';
import { data } from './datasource.ts';

let template: string = '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${EmployeeID}</td></tr>';

let compiledFunction: Function = compile(template);

let table: HTMLTableElement = (<HTMLTableElement>document.getElementById('datatable'));
let datamanager: DataManager = new DataManager({ json: (<Object[]>data).slice(0, 4) });

datamanager.executeQuery(new Query())
    .then((e: ReturnOption) => {
        (<Object[]>e.result).forEach((data: Object) => {
            table.tBodies[0].appendChild(compiledFunction(data)[0].firstChild);
        });
    });
let changes: { changedRecords: Object[], addedRecords: Object[], deletedRecords: Object[] } = {
    changedRecords: [], addedRecords: [], deletedRecords: []
};

(document.getElementById('added') as HTMLElement).onclick = () => {
  let orderid: HTMLInputElement = <HTMLInputElement>document.getElementById('addOrderID');
  let cusid: HTMLInputElement = <HTMLInputElement>document.getElementById('addCustomerID');
  let empid: HTMLInputElement = <HTMLInputElement>document.getElementById('addEmployeeID');
    changes.addedRecords.push({
        OrderID: +orderid.value,
        CustomerID: cusid.value,
        EmployeeID: +empid.value
    });
};

(document.getElementById('changed') as HTMLElement).onclick = () => {
    let orderid: HTMLInputElement = <HTMLInputElement>document.getElementById('updateOrderID');
    let cusid: HTMLInputElement = <HTMLInputElement>document.getElementById('updateCustomerID');
   let empid: HTMLInputElement = <HTMLInputElement>document.getElementById('updateEmployeeID');
    changes.changedRecords.push({
        OrderID: +orderid.value,
        CustomerID: cusid.value,
        EmployeeID: +empid.value
    });
};

(document.getElementById('deleted') as HTMLElement).onclick = () => {
   let orderid: HTMLInputElement = <HTMLInputElement>document.getElementById('deleteOrderID');
    changes.deletedRecords.push({
        OrderID: +orderid.value
    });
};

(document.getElementById('save') as HTMLElement).onclick = () => {
  datamanager.saveChanges(changes, 'OrderID');
  changes = { changedRecords: [], addedRecords: [], deletedRecords: [] };
    datamanager.executeQuery(new Query())
        .then((e: ReturnOption) => {
            table.tBodies[0].innerHTML = '';
            (<Object[]>e.result).forEach((data: Object) => {
                table.tBodies[0].appendChild(compiledFunction(data)[0].firstChild);
            });
        });
};
