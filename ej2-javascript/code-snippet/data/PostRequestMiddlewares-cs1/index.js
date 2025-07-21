const tableBody = document.getElementById('datatable').querySelector('tbody');
if (!tableBody) throw new Error('Table body not found');

const SERVICE_URI = 'https://services.syncfusion.com/js/production/';

const dataManager = new ej.data.DataManager({
  url: SERVICE_URI + 'api/Orders',
  adaptor: new ej.data.WebApiAdaptor()
});

// Middleware stack function.
function applyMiddlewareStack(stack) {
  return async function (result) {
    let modifiedResult = result;
    for (const fn of stack) {
      modifiedResult = await fn(modifiedResult);
    }
    return modifiedResult;
  };
}

// Apply custom post-request middlewares.
dataManager.applyPostRequestMiddlewares = applyMiddlewareStack([
  async (result) => {
    console.log('Original Data:', result);

    if (!Array.isArray(result)) {
      throw new Error('Expected result to be an array');
    }

    return result.map((item) => ({
      id: item.OrderID,
      name: item.CustomerID.toLowerCase(),
      date: item.OrderDate
        ? new Date(item.OrderDate).toLocaleDateString()
        : 'N/A'
    }));
  },

  async (result) => {
    console.log('Transformed Data:', result);
    return result;
  }
]);

// Execute query and render data.
dataManager.executeQuery(new ej.data.Query()).then((e) => {
  e.result.forEach(data => {
    const tr = document.createElement('tr');

    const tdId = document.createElement('td');
    tdId.textContent = data.id.toString();
    tr.appendChild(tdId);

    const tdName = document.createElement('td');
    tdName.textContent = data.name;
    tr.appendChild(tdName);

    const tdDate = document.createElement('td');
    tdDate.textContent = data.date;
    tr.appendChild(tdDate);
    tableBody.appendChild(tr);
  });
}).catch(error => {
  console.error('❌ Data fetch error:', error);
}); 