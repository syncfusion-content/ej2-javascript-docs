var template = '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${EmployeeID}</td></tr>';

var compiledFunction = ej.base.compile(template);
var table = document.getElementById('datatable');

const SERVICE_URI = 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders/';

new ej.data.DataManager({
  url: SERVICE_URI,
  adaptor: new ej.data.ODataV4Adaptor()
})
  .executeQuery(new ej.data.Query().take(50))  // Fetch a set of data.
  .then((e) => {
     // Custom sorting applied to CustomerID column.
    const sortedData = e.result.sort((a, b) => {
      if (a.CustomerID < b.CustomerID) return 1; 
      if (a.CustomerID > b.CustomerID) return -1; 
      return 0;
    });

    // Limit to the first 8 records after sorting.
    const topRecords = sortedData.slice(0, 8);

    // Append sorted records to the table.
    topRecords.forEach((data) => {
      table.appendChild(compiledFunction(data)[0]);
    });
  })
  .catch((error) => {
    console.error("Error fetching data: ", error);
  });
