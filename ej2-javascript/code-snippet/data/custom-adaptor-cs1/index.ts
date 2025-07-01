import { DataManager, Query, ReturnOption, ODataV4Adaptor } from '@syncfusion/ej2-data';
import { compile } from '@syncfusion/ej2-base';

var template = '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${EmployeeID}</td><td>${ShipCountry}</td></tr>';
const compiledFunction: Function = compile(template);

const SERVICE_URI: string = 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders';
const table: HTMLElement | null = document.getElementById('datatable');

class CustomAdaptor extends ODataV4Adaptor {
    public processQuery(dm: DataManager, query: Query): Object {
        dm.dataSource.url = 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders';
        query.addParams('CustomAdaptor in Syncfusion TS DataManager', 'true'); // Add the additional parameter.
        return super.processQuery.apply(this, arguments as any);
    }
}

new DataManager({ url: SERVICE_URI, adaptor: new CustomAdaptor() })
    .executeQuery(new Query().take(8))
    .then((e: ReturnOption) => {
        console.log("Fetched Data:", e.result);
        (e.result as Object[]).forEach((data: Object) => {
            table!.innerHTML += compiledFunction(data)[0].outerHTML;
        });
    });
