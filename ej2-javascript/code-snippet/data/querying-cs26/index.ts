import { DataManager, Query, ReturnOption, ODataV4Adaptor } from '@syncfusion/ej2-data';
import { compile } from '@syncfusion/ej2-base';

let template: string = '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${Freight}</td></tr>';
let compiledFunction: (data: any) => HTMLElement[] = compile(template);

let footerTemplate: string = '<tr><td></td><td></td><td>Count: ${count}</td></tr>';
let footerFn: (data: any) => HTMLElement[] = compile(footerTemplate);

let SERVICE_URI: string = 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/';

let table: HTMLElement = document.getElementById('datatable') as HTMLElement;

new DataManager({
    url: SERVICE_URI,
    adaptor: new ODataV4Adaptor()
}).executeQuery(
    new Query().take(5).requiresCount().aggregate('count', 'Freight')
).then((e: ReturnOption) => {
    (e.result as Record<string, any>[]).forEach((data: Record<string, any>) => {
        table.appendChild(compiledFunction(data)[0]);
    });
    let count: number = e.aggregates ? e.aggregates['Freight - count'] : 0;
    table.appendChild(footerFn({ count })[0]);
});