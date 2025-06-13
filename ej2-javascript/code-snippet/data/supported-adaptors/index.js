var template =
'<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${EmployeeID}</td></tr>';
var compiledFunction = ej.base.compile(template);
var table = document.getElementById('datatable');

var SERVICE_URI = 'https://services.syncfusion.com/js/production/';

var dataManager = new ej.data.DataManager({
url: SERVICE_URI + 'api/Orders',
adaptor: new ej.data.WebApiAdaptor(),
});
// Method to apply middleware before sending a request to the server.
dataManager.applyPreRequestMiddlewares = async function (request) {
try {
  // Fetch authentication token from an external service.
  const response = await fetch('https://jsonplaceholder.typicode.com/todos', // Replace with your actual endpoint. This URL is just for example purposes.
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    }
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
dataManager.applyPostRequestMiddlewares = async function (response) {
return response;
};

dataManager.dataManagerFailure = (e) => {
  // Handle DataManager failure event.
}

dataManager.executeQuery(new ej.data.Query()).then(function (e) {
  //e.result will contain the records.
e.result.forEach(function (data) {
  table.appendChild(compiledFunction(data)[0]);
});
});