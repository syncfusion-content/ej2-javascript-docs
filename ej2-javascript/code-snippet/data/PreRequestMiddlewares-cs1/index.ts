import { DataManager, Query, ReturnOption, WebApiAdaptor } from '@syncfusion/ej2-data';
import { compile } from '@syncfusion/ej2-base';

const template =
  '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${EmployeeID}</td></tr>';
const compiledFunction = compile(template);
const table = document.getElementById('datatable') as HTMLElement;

const SERVICE_URI = 'https://services.syncfusion.com/js/production/';

const dataManager = new DataManager({
  url: SERVICE_URI + 'api/Orders',
  adaptor: new WebApiAdaptor(),
});

dataManager.applyPreRequestMiddlewares = async (request: Request) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    const token = data.id; // Simulate token value.
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  } catch (err) {
    console.error('Token fetch failed:', err);
    return {};
  }
};

dataManager.executeQuery(new Query()).then((e: ReturnOption) => {
  (e.result as Object[]).forEach((data: Object) => {
    table.appendChild(compiledFunction(data)[0]);
  });
});
