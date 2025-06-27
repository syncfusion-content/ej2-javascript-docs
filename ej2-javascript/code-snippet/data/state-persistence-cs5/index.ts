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
const query = new Query().sortBy('Designation', 'descending').take(8);
dataManager.executeQuery(query).then((e: ReturnOption) => {
  (<Object[]>e.result).forEach((data: Object) => {
    table.appendChild(compiledFunction(data)[0]);
  });
});
(window as any).applyDM = () => {
  const newQuery = new Query().sortBy('EmployeeID', 'descending').take(8);
  table.innerHTML = '<tr><th>EmployeeID</th><th>Employees</th><th>Designation</th></tr>';
  dataManager.executeQuery(newQuery).then((e: ReturnOption) => {
    (e.result as Object[]).forEach((data: Object) => {
      table.appendChild(compiledFunction(data)[0]);
    });
  });
};
// This function can be called on button click.
(window as any).clearDM = () => {
  dataManager.clearPersistence();
};