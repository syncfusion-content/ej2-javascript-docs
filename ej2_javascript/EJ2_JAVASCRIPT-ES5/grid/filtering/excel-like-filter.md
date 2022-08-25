# Excel Like Filter

You can enable Excel like filter by defining.
[`filterSettings.type`](../../api/grid/filterSettings#type) as `Excel`.The excel menu contains an option such as Sorting, Clear filter, Sub menu for advanced filtering.

{% tab template="grid/grid",es5Template="excelfilter" %}

```typescript
import { Grid, Filter } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Filter);

let grid: Grid = new Grid({
    dataSource: data,
    allowFiltering: true,
    filterSettings: { type:'Excel' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 100 }
    ],
    height: 273
});
grid.appendTo('#Grid');

```

{% endtab %}

> * By default, while opening the excel/checkbox filter in the Grid, the filter dialog will get and display the distinct data from the first 1000 records bound to the Grid to optimize performance. The remaining records will be returned as a result of the search option of the filter dialog.
> * However, we can increase the excel/checkbox filter count by modifying the `filterChoiceCount` argument value(as per our need) in the [`actionBegin`](../../api/grid/#actionBegin) event when the [`requestType`](../../api/grid/filterEventArgs/#requesttype) is `filterchoicerequest` or `filtersearchbegin`. This is demonstrated in the below code snippet,

```typescript
function actionBegin(args: FilterEventArgs) {
    if (args.requestType === "filterchoicerequest" || args.requestType === "filtersearchbegin") {
        args.filterChoiceCount = 3000;
    }
}
```