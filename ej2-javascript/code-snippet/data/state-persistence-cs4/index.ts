import { DataManager, Query, ReturnOption, UrlAdaptor } from '@syncfusion/ej2-data';
import { compile } from '@syncfusion/ej2-base';

let template: string = '<tr><td>${EmployeeID}</td><td>${Employees}</td><td>${Designation}</td></tr>';
let compiledFunction: Function = compile(template);
const SERVICE_URI: string = 'https://services.syncfusion.com/js/production/api/UrlDataSource';
let table: HTMLElement = <HTMLElement>document.getElementById('datatable');
// Create DataManager instance.
const dataManager = new DataManager({
  url: SERVICE_URI,
  adaptor: new UrlAdaptor(),
  enablePersistence: true,
  id: 'JohnDoe',
});
// Define the query.
const query1 = new Query().sortBy('Designation', 'descending').take(8);
const query2 = new Query().sortBy('EmployeeID', 'descending').take(8);
// Persist the query into the DataManager’s existing persisted data.
dataManager.setPersistData(null, "JohnDoe", query2);
dataManager.executeQuery(query1).then((e: ReturnOption) => {
  (<Object[]>e.result).forEach((data: Object) => {
    table.appendChild(compiledFunction(data)[0]);
  });
});