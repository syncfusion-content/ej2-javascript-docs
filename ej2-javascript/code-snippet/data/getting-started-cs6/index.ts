import { DataManager, Query, ReturnOption } from '@syncfusion/ej2-data';
import { compile } from '@syncfusion/ej2-base';

let template: string = '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${EmployeeID}</td></tr>';

let compiledFunction: Function = compile(template);

const SERVICE_URI: string = 'https://services.syncfusion.com/js/production/api/orders';

let table: HTMLElement = (<HTMLElement>document.getElementById('datatable'));

new DataManager({ url: SERVICE_URI }).executeQuery(new Query().take(8)).then((e: ReturnOption) => {
    const results = (e.result as { items: Order[] }).items;
    results.forEach((data: Object) => {
        table.appendChild(compiledFunction(data)[0]);
    });
});

interface Order {
    OrderID: number;
    CustomerID: string;
    EmployeeID: number;
  }

