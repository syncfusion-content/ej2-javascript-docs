import { DataManager, Query, ReturnOption, ODataV4Adaptor } from '@syncfusion/ej2-data';
import { compile } from '@syncfusion/ej2-base';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { Button } from '@syncfusion/ej2-buttons';

const template: string = '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${EmployeeID}</td></tr>';
const compiledFunction: (data: Object) => HTMLElement[] = compile(template) as (data: Object) => HTMLElement[];

const SERVICE_URI: string = 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/';
const table: HTMLElement = document.getElementById('datatable') as HTMLElement;
const tbody: HTMLTableSectionElement = table.querySelector('tbody') as HTMLTableSectionElement;

const dataManager: DataManager = new DataManager({
  url: SERVICE_URI,
  adaptor: new ODataV4Adaptor()
});

const dropdown: DropDownList = new DropDownList({
  dataSource: [
    { text: 'Order ID', value: 'OrderID' },
    { text: 'Customer ID', value: 'CustomerID' },
    { text: 'Employee ID', value: 'EmployeeID' },
  ],
  fields: { text: 'text', value: 'value' },
  placeholder: 'Select a column',
  value: 'OrderID',
  width:'190px'
});
dropdown.appendTo('#colName');

const sortButton: Button = new Button();
sortButton.appendTo('#sortBtn');

function loadData(sortField: string = 'OrderID'): void {
  const query: Query = new Query().sortBy(sortField, 'ascending').take(8);

  dataManager.executeQuery(query).then((e: ReturnOption) => {
    tbody.innerHTML = ''; 
    (e.result as Object[]).forEach((data: Object) => {
      const fragment: HTMLElement[] = compiledFunction(data);
      if (fragment && fragment.length > 0) {
        const rowWrapper: HTMLTableSectionElement = document.createElement('tbody');
        rowWrapper.innerHTML = fragment[0].outerHTML;
        tbody.appendChild(rowWrapper.firstElementChild as HTMLTableRowElement);
      }
    });
  });
}

loadData();

(document.getElementById('sortBtn')as HTMLElement).addEventListener('click', () => {
  const sortField = dropdown.value as string;
  if (sortField) {
    loadData(sortField);
  }
});
