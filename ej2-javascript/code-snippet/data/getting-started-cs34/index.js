const datamanger = new ej.data.DataManager({
    // Use remote server host and port instead of 'xxxx'.
    url: 'https://localhost:xxxx/api/Orders',
    adaptor: new ej.data.UrlAdaptor(),
});

datamanger.executeQuery(new ej.data.Query().take(10)).then((e) => {
    const data = e.result.result;
    const tbody = document.getElementById('table-body');
    data.forEach((item) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${item.OrderID}</td>
          <td>${item.CustomerID}</td>
          <td>${item.EmployeeID}</td>
          <td>${item.ShipCity}</td>
          <td>${item.ShipCountry}</td>
      `;
        tbody.appendChild(row);
    });
}).catch(error => {
    console.error("Data fetch failed:", error);
});