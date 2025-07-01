import { DataManager, Query, ReturnOption, ODataV4Adaptor } from '@syncfusion/ej2-data';
import { compile } from '@syncfusion/ej2-base';

var template = '<tr><td>${Sno}</td><td>${OrderID}</td><td>${CustomerID}</td><td>${EmployeeID}</td><td>${ShipCountry}</td></tr>';
const compiledFunction: Function = compile(template);

const SERVICE_URI: string = 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders';
const table: HTMLElement | null = document.getElementById('datatable');

class CustomAdaptor extends ODataV4Adaptor {
    public processResponse(data: any) {
        if (data && data.value && Array.isArray(data.value)) {
            data.value.forEach((item: { Sno: any; }, index: number) => {
                item.Sno = index + 1;
            });
        }
        return super.processResponse(data);
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
