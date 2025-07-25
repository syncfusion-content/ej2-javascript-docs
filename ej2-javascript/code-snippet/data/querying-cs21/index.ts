import { DataManager, Query, ReturnOption, ODataV4Adaptor } from '@syncfusion/ej2-data';
import { compile } from '@syncfusion/ej2-base';

const template: string = '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${Freight}</td></tr>';
const compiledFunction: (data: any) => HTMLElement[] = compile(template);

const footerTemplate: string = '<tr><td></td><td></td><td>Sum: ${sum}</td></tr>';
const footerFn: (data: any) => HTMLElement[] = compile(footerTemplate);

const SERVICE_URI: string = 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/';

const table: HTMLElement = document.getElementById('datatable') as HTMLElement;

new DataManager({
    url: SERVICE_URI,
    adaptor: new ODataV4Adaptor()
}).executeQuery(
    new Query().take(5).requiresCount().aggregate('sum', 'Freight')
).then((e: ReturnOption) => {
    (e.result as Record<string, any>[]).forEach((data: Record<string, any>) => {
        table.appendChild(compiledFunction(data)[0]);
    });
    const sum: number = e.aggregates ? e.aggregates['Freight - sum'] : 0;
    table.appendChild(footerFn({ sum })[0]);
});