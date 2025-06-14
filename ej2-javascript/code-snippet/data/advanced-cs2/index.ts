import { DataManager, Query, ReturnOption, UrlAdaptor } from '@syncfusion/ej2-data';
import { compile } from '@syncfusion/ej2-base';

interface Employee {
  EmployeeID: number;
  Employees: string;
  Designation: string;
  Location: string;
  Check: boolean;
}

let template: string ='<tr><td>${EmployeeID }</td><td>${Employees}</td><td>${Designation}</td><td>${Location}</td><td>${Status}</td></tr>';

let table: HTMLElement = <HTMLElement>document.getElementById('datatable');
let compiledFunction: Function = compile(template);
const dataManager = new DataManager({
  url: "https://services.syncfusion.com/js/production/api/UrlDataSource",
  adaptor: new UrlAdaptor(),
  crossDomain: true
});

const btnLoad = document.getElementById("submit") as HTMLButtonElement;
const inputFrom = document.getElementById("pageIndex") as HTMLInputElement;
const inputTo = document.getElementById("pageSize") as HTMLInputElement;

// Initial load: page 1, size 5.
let query = new Query().page(1, 5);

function renderTable(data: Employee[]) {
  data.forEach((data: Object) => {
    table.appendChild(compiledFunction(data)[0]);
  });
}

// Execute initial query.
dataManager.executeQuery(query).then((e: ReturnOption) => {
  renderTable(e.result as Employee[]);
}).catch(console.error);

// Load data on demand button click.
btnLoad.addEventListener("click", () => {
  const pageIndex = parseInt(inputFrom.value);
  const pageSize = parseInt(inputTo.value);
  if (!isNaN(pageIndex) && !isNaN(pageSize) && pageIndex > 0 && pageSize > 0) {
    const tempQuery = new Query().page(pageIndex, pageSize);
    dataManager.executeQuery(tempQuery).then((e: ReturnOption) => {
      renderTable(e.result as Employee[]);
    }).catch(console.error);
  }
});
