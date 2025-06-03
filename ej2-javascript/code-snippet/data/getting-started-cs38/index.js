let data = new ej.data.DataManager({
  url: "http://localhost:xxxx", // Use remote server host and port instead of 'xxxx'.
  adaptor: new ej.data.GraphQLAdaptor({
    response: {
      result: 'getOrders.result',
      count: 'getOrders.count'
    },
    query: `query getOrders($datamanager: DataManager) {
      getOrders(datamanager: $datamanager) {
        count,
        result{
          OrderID, CustomerID, ShipCity, ShipCountry
        }
      }
    }`
  }),
});

let template = '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${ShipCity}</td><td>${ShipCountry}</td></tr>';

let compiledFunction = ej.base.compile(template);

let table = document.getElementById('datatable');

const query = new ej.data.Query()
  .skip(0).take(8).search('Cunewalde', ['ShipCity']).where('ShipCountry', 'equal', 'Germany').sortBy('OrderID', 'descending');

data.executeQuery(query).then((e) => {
  const response = e.result;
  response.result.forEach((data) => {
    table.appendChild(compiledFunction(data)[0]);
  });
});