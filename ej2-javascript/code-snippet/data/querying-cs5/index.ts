import { DataManager, Query, ReturnOption, ODataV4Adaptor } from '@syncfusion/ej2-data';
import { compile } from '@syncfusion/ej2-base';

const template: string = '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${EmployeeID}</td></tr>';
const compiledFunction: Function = compile(template);

const SERVICE_URI: string = 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders';

const table: HTMLElement | null = document.getElementById('datatable');

new DataManager({ url: SERVICE_URI, adaptor: new ODataV4Adaptor() })
    .executeQuery(new Query()
    .requiresCount(true)
    .take(8))
    .then((e: ReturnOption) => {
        console.log('Total Count:', e.count);
        (e.result as Object[]).forEach((data: Object) => {
            const nodes = compiledFunction(data); 
            nodes.forEach((node: Node) => {
                table?.appendChild(node);
            });
        });
    });