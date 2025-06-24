import { DataManager, Query, UrlAdaptor, ReturnOption } from '@syncfusion/ej2-data';

const datamanger = new DataManager({
    // Use remote server host and port instead of 'xxxx'.
    url: 'https://localhost:xxxx/api/Orders',
    adaptor: new UrlAdaptor(),
});

datamanger.executeQuery(new Query().take(10)).then((e: ReturnOption) => {
    const response = e.result as { result: Order[] };
    const data = response.result;
    const tbody = document.getElementById('table-body');
    data.forEach((item: Order) => {
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

interface Order {
  OrderID: number;
  CustomerID: string;
  EmployeeID: number;
  ShipCity: string;
  ShipCountry: string;
}