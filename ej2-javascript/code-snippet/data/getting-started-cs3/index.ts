import { DataManager, Query, ReturnOption, ODataV4Adaptor } from '@syncfusion/ej2-data';
import { compile } from '@syncfusion/ej2-base';

let template: string = '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${EmployeeID}</td><td>${ShipCountry}</td></tr>';

let compiledFunction: Function = compile(template);

let table: HTMLElement = (<HTMLElement>document.getElementById('datatable'));

const datamanger = new DataManager({ 
    // Use remote server host and port instead of 'xxxx'.
    url: "https://localhost:xxxx/odata/Orders/", 
    adaptor: new ODataV4Adaptor 
});

datamanger.executeQuery(new Query().take(8)).then((e: ReturnOption) => {

    (<Object[]>e.result).forEach((data: Object) => {
        table.appendChild(compiledFunction(data)[0]);
    });
});