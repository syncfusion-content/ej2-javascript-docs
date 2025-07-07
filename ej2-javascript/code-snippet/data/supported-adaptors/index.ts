import { DataManager, Query, ReturnOption, WebApiAdaptor,} from '@syncfusion/ej2-data';
import { compile } from '@syncfusion/ej2-base';

const template = '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${EmployeeID}</td></tr>';
const compiledFunction = compile(template);
const table = document.getElementById('datatable') as HTMLElement;

const SERVICE_URI = 'https://services.syncfusion.com/vue/production/';

const dataManager = new DataManager({
  url: SERVICE_URI + 'api/Orders',
  adaptor: new WebApiAdaptor(),
});

// Method to apply middleware before sending a request to the server.
dataManager.applyPreRequestMiddlewares = async (request: Request) => {
  try {
    // Fetch authentication token from an external service.
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', // Replace with your actual endpoint. This URL is just for example purposes.
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    const token = data.id; 
    // Return the authentication token.
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

// Method to apply middleware after receiving a response from the server.
dataManager.applyPostRequestMiddlewares = async (response: Response) => {
  return response;
};

dataManager.dataManagerFailure = (e: Error) => {
  //Handle DataManager failure event.
}

dataManager.executeQuery(new Query()).then((e: ReturnOption) => {
  //e.result will contain the records.
  (e.result as Object[]).forEach((data: Object) => {
    table.appendChild(compiledFunction(data)[0]);
  });
});
