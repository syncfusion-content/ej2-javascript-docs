# Complex Data Binding

You can achieve complex data binding in the grid by using the dot(.) operator in the [`column.field`](../../api/grid/column/#field).

{% tab template="grid/complex-binding", sourceFiles="index.ts,index.html", es5Template="databind"  %}

```typescript
import { Grid } from '@syncfusion/ej2-grids';
import { complexData } from './datasource.ts';

let grid: Grid = new Grid({
    dataSource: complexData,
    columns: [
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 100 },
        { field: 'Name.FirstName', headerText: 'First Name', width: 120 },
        { field: 'Name.LastName', headerText: 'Last Name', width: 100 },
        { field: 'Title', headerText: 'Title', width: 150 }
    ],
    height: 315
});
grid.appendTo('#Grid');

```

{% endtab %}

For OData and ODataV4 adaptors, you need to add [`expand`](../../api/data/query/#expand) query to the [`query`](../../api/grid/#query) property (of Grid), to eager load the complex data.

```typescript
import { DataManager, ODataAdaptor, Query } from '@syncfusion/ej2-data';

 let  data: DataManager = new DataManager({
       adaptor: new ODataAdaptor(),
       crossDomain: true,
       url: 'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Orders'
     });
 let query: Query = new Query().expand('Employee');

 let grid: Grid = new Grid({
    dataSource: data,
    query: query,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
        { field: 'Employee.City', headerText: 'Employee City', width: 150 }
    ],
    height: 315
});
grid.appendTo('#Grid');

```