import { DataManager, Query, ReturnOption, ODataV4Adaptor } from '@syncfusion/ej2-data';
import { compile } from '@syncfusion/ej2-base';

const template: string = '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${EmployeeID}</td></tr>';
const compiledFunction: Function = compile(template);

const table: HTMLElement = document.getElementById('datatable') as HTMLElement;

const SERVICE_URI: string = 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/';

new DataManager({
  url: SERVICE_URI,
  adaptor: new ODataV4Adaptor()
})
  .executeQuery(new Query().take(50))
  .then((e: ReturnOption) => {
    // Custom sorting applied to CustomerID column.
    const sortedData = (e.result as Record<string, any>[]).sort((a, b) => {
      return a.CustomerID < b.CustomerID ? 1 : a.CustomerID > b.CustomerID ? -1 : 0;
    });

    // Limit to the first 8 records after sorting.
    const topRecords = sortedData.slice(0, 8);

    // Append sorted records to the table.
    topRecords.forEach((data: Record<string, any>) => {
      table.appendChild(compiledFunction(data)[0]);
    });
  })
  .catch((error: any) => {
    console.error('Error fetching or sorting data:', error);
  });
