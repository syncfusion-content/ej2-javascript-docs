import { DataManager, Query, ReturnOption, ODataV4Adaptor, DataUtil } from '@syncfusion/ej2-data';
import { compile } from '@syncfusion/ej2-base';

let template: string = '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${EmployeeID}</td></tr>';
let compiledFunction: (data: any) => HTMLElement[] = compile(template);

let SERVICE_URI: string = 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/';

let table1: HTMLElement = document.getElementById('table1') as HTMLElement;
let distinctTable: HTMLElement = document.getElementById('distinct') as HTMLElement;

new DataManager({
    url: SERVICE_URI,
    adaptor: new ODataV4Adaptor()
}).executeQuery(
    new Query().take(10).requiresCount()
).then((e: ReturnOption) => {
    let fullData: Record<string, any>[] = e.result as Record<string, any>[];
    fullData.forEach((data: Record<string, any>) => {
        table1.appendChild(compiledFunction(data)[0]);
    });
    let distinctData: Record<string, any>[] = DataUtil.distinct(fullData, 'EmployeeID', true);

    // Render distinct records into second table.
    distinctData.forEach((data: Record<string, any>) => {
        distinctTable.appendChild(compiledFunction(data)[0]);
    });
});
