import { DataManager, Query, RemoteSaveAdaptor, ReturnOption } from '@syncfusion/ej2-data';
import { compile } from '@syncfusion/ej2-base';

let dataManager: DataManager;
let template: string = '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${EmployeeID}</td><td>${ShipCity}</td><td>${ShipCountry}</td></tr>';
let compiledFunction: Function = compile(template);
let table: HTMLElement = document.getElementById('datatable')!;

function load(): void {
    fetch('https://localhost:xxxx/api/Orders') // Use remote server host and port instead of 'xxxx'.
        .then(response => {
            if (!response.ok) {
                throw new Error("Unable to fetch data. Please check the URL or network connectivity.");
            }
            return response.json();
        })
        .then(jsonValue => {
            dataManager = new DataManager({
                json: jsonValue,
                adaptor: new RemoteSaveAdaptor()
            });

            dataManager.executeQuery(new Query().take(8)).then((e: ReturnOption) => {
                const data = e.result as Object[]
                data.forEach((item) => {
                    table.appendChild(compiledFunction(item)[0]);
                });
            })
        })
        .catch(error => {
            console.error("Data fetch failed:", error);
        });
}

load();