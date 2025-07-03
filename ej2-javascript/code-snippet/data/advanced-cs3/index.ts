import { DataManager, Query, Deferred, ODataV4Adaptor, UrlAdaptor } from '@syncfusion/ej2-data';
import { ChangeEventArgs, Switch } from '@syncfusion/ej2-buttons';

const SERVICE_URI = 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/';
const CUSTOMER_URI = 'https://services.odata.org/V4/Northwind/Northwind.svc/Customers/';
const table = document.querySelector('#datatable');
const tbody = (table as HTMLElement).querySelector('tbody');
const messageDiv = document.getElementById('message') as HTMLElement;

let switchObj: Switch = new Switch({
  cssClass: 'handle-text',
  change: change
});
switchObj.appendTo('#switch1');
switchObj.toggle();

function fetchDataWithAdaptor(url: string, adaptor: any, deferred: Deferred): void {
  const manager = new DataManager({
    url,
    adaptor,
    crossDomain: true
  });
  manager.executeQuery(new Query())
    .then((response) => {
      if ('result' in response) {
        deferred.resolve((response as { result: Order[] }).result);
      }
    })
    .catch((error) => {
      deferred.reject(error);
    });
}

function handleResult(deferred) {
  deferred.promise
    .then((result) => {
      (tbody as HTMLElement).innerHTML = '';
      result.forEach((item: Order) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.OrderID}</td>
            <td>${item.CustomerID}</td>
            <td>${item.EmployeeID}</td>
          `;
        (tbody as HTMLElement).appendChild(row);
      });
      messageDiv.innerText = '✅ Data loaded successfully';
      messageDiv.style.color = 'green';
    })
    .catch(() => {
      (tbody as HTMLElement).innerHTML = '';
      messageDiv.innerText = '❌ Error loading data';
      messageDiv.style.color = 'red';
    });
}

// Initial load.
const initialDeferred = new Deferred();
handleResult(initialDeferred);
fetchDataWithAdaptor(SERVICE_URI, new ODataV4Adaptor(), initialDeferred);

function change(args:ChangeEventArgs): void {
  const newDeferred = new Deferred();
  const useCustomer = switchObj.checked;
  const newUrl = useCustomer ? SERVICE_URI : CUSTOMER_URI;
  const newAdaptor = useCustomer ? new ODataV4Adaptor() : new UrlAdaptor();
  handleResult(newDeferred);
  fetchDataWithAdaptor(newUrl, newAdaptor, newDeferred);
}

interface Order {
  OrderID: number;
  CustomerID: string;
  EmployeeID: number;
  ShipCity: string;
  ShipCountry: string;
}