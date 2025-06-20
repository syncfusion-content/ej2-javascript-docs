import { DataManager, Query, ReturnOption, GraphQLAdaptor } from '@syncfusion/ej2-data';
import { compile } from '@syncfusion/ej2-base';

let data: DataManager = new DataManager({
  // Use remote server host and port instead of 'xxxx'.
  url: "http://localhost:xxxx", 
  adaptor: new GraphQLAdaptor({
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

let template: string = '<tr><td>${OrderID}</td><td>${CustomerID}</td><td>${ShipCity}</td><td>${ShipCountry}</td></tr>';

let compiledFunction: Function = compile(template);

let table: HTMLElement = (<HTMLElement>document.getElementById('datatable'));

const query = new Query()
  .skip(0).take(8).search('Cunewalde', ['ShipCity']).where('ShipCountry', 'equal', 'Germany').sortBy('OrderID', 'descending');

data.executeQuery(query).then((e: ReturnOption) => {
  const response = e.result as { result: Order[] };
  response.result.forEach((data: Order) => {
    table.appendChild(compiledFunction(data)[0]);
  });
});

interface Order {
  OrderID: number;
  CustomerID: string;
  ShipCity: string;
  ShipCountry: string;
}