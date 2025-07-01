import { DataManager, Query, ReturnOption, ODataV4Adaptor } from '@syncfusion/ej2-data';
import { compile } from '@syncfusion/ej2-base';

const template = '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${EmployeeID}</td><td>${ShipCountry}</td></tr>';
const compiledFunction: Function = compile(template);

const table: HTMLElement | null = document.getElementById('datatable');
const errorMessage: HTMLElement | null = document.getElementById('error-message');

class CustomAdaptor extends ODataV4Adaptor {
    // You can override adaptor methods here if needed.
}

const SERVICE_URI: string = 'https://localhost:xxxx/odata/orders';

new DataManager({ url: SERVICE_URI, adaptor: new CustomAdaptor() })
    .executeQuery(new Query())
    .then((e: ReturnOption) => {
        console.log("Fetched Data:", e.result);
        (e.result as Object[]).forEach((data: Object) => {
            if (table) {
                table.innerHTML += compiledFunction(data)[0].outerHTML;
            }
        });
    })
    .catch((error) => {
        console.error('Data fetch error:', error);
        if (errorMessage) {
            errorMessage.textContent = "Failed to load data. Please check your connection or service and try again.";
        }
    });
