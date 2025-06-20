var tableBody = document.getElementById('datatable')?.querySelector('tbody');
if (!tableBody) {throw new Error('Table body not found');}

var SERVICE_URI = 'https://services.syncfusion.com/js/production/';

var dataManager = new ej.data.DataManager({
  url: SERVICE_URI + 'api/Orders',
  adaptor: new ej.data.WebApiAdaptor()
});

function applyMiddlewareStack(stack) {
  return async function (result) {
    let modifiedResult = result;
    for (const fn of stack) {
      modifiedResult = await fn(modifiedResult);
    }
    return modifiedResult;
  };
}

dataManager.applyPostRequestMiddlewares = applyMiddlewareStack([
  async function (result) {
    console.log('Original Data:', result);

    if (!Array.isArray(result)) {
      throw new Error('Expected result to be an array');
    }

    return result.map(function (item) {
      return {
        id: item.OrderID,
        name: item.CustomerID ? item.CustomerID.toLowerCase() : '',
        date: item.OrderDate
          ? new Date(item.OrderDate).toLocaleDateString()
          : 'N/A'
      };
    });
  },

  async function (result) {
    console.log('Transformed Data:', result);
    return result;
  }
]);

dataManager.executeQuery(new ej.data.Query())
  .then(function (e) {
    e.result.forEach(function (data) {
      var tr = document.createElement('tr');

      var tdId = document.createElement('td');
      tdId.textContent = data.id.toString();
      tr.appendChild(tdId);

      var tdName = document.createElement('td');
      tdName.textContent = data.name;
      tr.appendChild(tdName);

      var tdDate = document.createElement('td');
      tdDate.textContent = data.date;
      tr.appendChild(tdDate);

      tableBody.appendChild(tr);
    });
  })
  .catch(function (error) {
    console.error('❌ Data fetch error:', error);
  });