const SERVICE_URI = 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/';
const CUSTOMER_URI = 'https://services.odata.org/V4/Northwind/Northwind.svc/Customers/';
const table = document.querySelector('#datatable');
const tbody = table.querySelector('tbody');
const messageDiv = document.getElementById('message');

let switchObj = new ej.buttons.Switch({
  cssClass: 'handle-text',
  change: change
});
switchObj.appendTo('#switch1');
switchObj.toggle();

function fetchDataWithAdaptor(url, adaptor, deferred){
  const manager = new ej.data.DataManager({
    url,
    adaptor,
    crossDomain: true
  });
  manager.executeQuery(new ej.data.Query())
    .then((response) => {
      if ('result' in response) {
        deferred.resolve(response.result);
      }
    })
    .catch((error) => {
      deferred.reject(error);
    });
}

function handleResult(deferred) {
  deferred.promise
    .then((result) => {
      tbody.innerHTML = '';
      result.forEach((item) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.OrderID}</td>
            <td>${item.CustomerID}</td>
            <td>${item.EmployeeID}</td>
          `;
        tbody.appendChild(row);
      });
      messageDiv.innerText = '✅ Data loaded successfully';
      messageDiv.style.color = 'green';
    })
    .catch(() => {
      tbody.innerHTML = '';
      messageDiv.innerText = '❌ Error loading data';
      messageDiv.style.color = 'red';
    });
}

// Initial load.
const initialDeferred = new ej.data.Deferred();
handleResult(initialDeferred);
fetchDataWithAdaptor(SERVICE_URI, new ej.data.ODataV4Adaptor(), initialDeferred);

function change(args) {
  const newDeferred = new ej.data.Deferred();
  const useCustomer = switchObj.checked;
  const newUrl = useCustomer ? SERVICE_URI : CUSTOMER_URI;
  const newAdaptor = useCustomer ? new ej.data.ODataV4Adaptor() : new ej.data.UrlAdaptor();
  handleResult(newDeferred);
  fetchDataWithAdaptor(newUrl, newAdaptor, newDeferred);
}

