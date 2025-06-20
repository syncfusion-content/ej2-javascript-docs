import { DataManager, Query, WebMethodAdaptor, ReturnOption } from '@syncfusion/ej2-data';
import { compile } from '@syncfusion/ej2-base';

let template: string = '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${EmployeeID}</td><td>${ShipCity}</td><td>${ShipCountry}</td></tr>';

let compiledFunction: Function = compile(template);

let table: HTMLElement = (<HTMLElement>document.getElementById('datatable'));

const datamanger = new DataManager({
    // Use remote server host and port instead of 'xxxx'.
    url: "https://localhost:xxxx/api/Orders",
    adaptor: new WebMethodAdaptor()
});

datamanger.executeQuery(new Query().take(8)).then((e: ReturnOption) => {

    (<Object[]>e.result.result).forEach((data: Object) => {
        table.appendChild(compiledFunction(data)[0]);
    });
});