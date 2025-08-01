

import { DataManager, Query, ReturnOption, ODataV4Adaptor } from '@syncfusion/ej2-data';
import { compile } from '@syncfusion/ej2-base';

let template: string = '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${EmployeeID}</td><td>${Freight}</td><td>${ShipCountry}</td></tr>';

let compiledFunction: Function = compile(template);

const SERVICE_URI: string =  'https://services.odata.org/V4/Northwind/Northwind.svc/';

let table: HTMLElement = (<HTMLElement>document.getElementById('datatable'));

new DataManager({ url: SERVICE_URI, adaptor: new ODataV4Adaptor })
    .executeQuery(new Query().from("Orders")
    .select(["OrderID", "CustomerID", "EmployeeID", "Freight", "ShipCountry"])
    .addParams("PageNumber", 5)
    .addParams("PageSize", 5)
    .where("CustomerID", "contains", "A", false))
    .then((e: ReturnOption) => {
        (<Object[]>e.result).forEach((data: Object) => {
            table.appendChild(compiledFunction(data)[0]);
        });
    });