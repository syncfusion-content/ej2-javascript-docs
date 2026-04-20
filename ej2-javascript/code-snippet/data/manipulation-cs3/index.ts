import { DataManager, Query, ReturnOption } from '@syncfusion/ej2-data';
import { compile } from '@syncfusion/ej2-base';
import { data } from './datasource.ts';

let template: string = '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${EmployeeID}</td></tr>';

let compiledFunction: Function = compile(template);

const table: HTMLTableElement = document.getElementById('datatable') as HTMLTableElement;
const dataManager: DataManager = new DataManager(data.slice(0, 5));

dataManager.executeQuery(new Query())
.then((e: ReturnOption) => {
    (<Object[]>e.result).forEach((data: Object) => {
        table.tBodies[0].appendChild(compiledFunction(data)[0].firstChild);
    });
});

const button: HTMLInputElement = document.getElementById('manipulate') as HTMLInputElement;
const orderIdInput: HTMLInputElement = document.getElementById('OrderID') as HTMLInputElement;

button.onclick = () => {
    if (!orderIdInput.value) {
        return;
    }

    dataManager.remove('OrderID', { OrderID: +orderIdInput.value });
    dataManager.executeQuery(new Query())
    .then((e: ReturnOption) => {
        table.tBodies[0].innerHTML = '';
        (<Object[]>e.result).forEach((data: Object) => {
            table.tBodies[0].appendChild(compiledFunction(data)[0].firstChild);
        });
    });
};


