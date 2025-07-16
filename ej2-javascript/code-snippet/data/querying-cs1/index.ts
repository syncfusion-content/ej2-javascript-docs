import { DataManager, Query, ReturnOption, ODataV4Adaptor } from '@syncfusion/ej2-data';
import { compile } from '@syncfusion/ej2-base';

let template: string = '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${EmployeeID}</td></tr>';

let compiledFunction: Function = compile(template);

const SERVICE_URI: string = 'https://services.odata.org/V4/Northwind/Northwind.svc/';

let dataManager = new DataManager({
    url: SERVICE_URI,
    adaptor: new ODataV4Adaptor()
});

let query = new Query()
    .from('Orders')                                  // Specifies the target resource.
    .select(['OrderID', 'CustomerID', 'EmployeeID']) // Project's specific fields.
    .skip(8)                                         // Skips the first 8 records.
    .take(8)                                         // Takes the next 8 records.
    .using(dataManager);                             // Associates the query with the specified DataManager instance.

query.execute().then((e: ReturnOption) => {
    let table: HTMLElement = document.getElementById('datatable') as HTMLElement;
    (e.result as Object[]).forEach((data: Object) => {
        table.appendChild(compiledFunction(data)[0]);
    });
});