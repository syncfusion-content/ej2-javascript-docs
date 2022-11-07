# Custom Aggregate

To calculate the aggregate value with your own aggregate functions, use the custom aggregate option. To use custom aggregation, specify the [`type`](../../api/grid/aggregateColumn/#type) as `Custom`, and provide the custom aggregate function in the [`customAggregate`](../../api/grid/aggregateColumn/#customaggregate) property.

The custom aggregate function will be invoked with different arguments for total and group aggregations.
* **Total aggregation**: The custom aggregate function will be called with the whole data and current [`AggregateColumn`](../../api/grid/aggregateColumn/)
object.
* **Group aggregation**: This will be called with the current group details and [`AggregateColumn`](../../api/grid/aggregateColumn/) object.

{% tab template="grid/aggregates", es5Template="custom" %}

```typescript
import { Grid, Aggregate } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Aggregate);

let customAggregateFn = (data: Object, aggColumn: Object) => data.result.filter((item: Object) => item[aggColumn.columnName] === 'Brazil').length;

let grid: Grid = new Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'Freight', headerText: 'Freight', width: 150, format: 'C2' },
        { field: 'ShipCountry', headerText: 'Ship Name', width: 150 }
    ],
    height: 268,
    aggregates: [{
        columns: [{
            type: 'Custom',
            customAggregate: customAggregateFn,
            columnName: 'ShipCountry',
            footerTemplate: 'Brazil Count: ${Custom}'
        }]
    }]
});
grid.appendTo('#Grid');

```

{% endtab %}

> To access the custom aggregate value inside the template, use the key as `Custom`.

## Show the count of distinct values in aggregate row

You can calculate the aggregate value with your own aggregate functions. To use custom aggregation, specify the [`type`](../../api/grid/aggregateColumn/#type) as `Custom`, and provide the custom aggregate function in the [`customAggregate`](../../api/grid/aggregateColumn/#customaggregate) property.

In this below demo, we have show the count of distinct value for `ShipCountry` column by using custom aggregate.

{% tab template="grid/custom-agg", es5Template="agg" %}

```typescript
import { Grid, Page, Aggregate  } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { DataManager, Query, DataUtil } from '@syncfusion/ej2-data';

Grid.Inject(Page, Aggregate );


let customAggregateFn = function() {
let results = new DataManager(this.currentViewData).executeLocal(new Query().select(['ShipCountry']));
let distinct = DataUtil.distinct(results, 'ShipCountry', true);
return distinct.length;
}

let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C2' },
        { field: "ShipCountry", headerText: "Ship Country", width: 150 }
    ],
    height: 220,
     aggregates: [{
        columns: [{
            type: 'Custom',
            customAggregate: customAggregateFn,
            columnName: 'ShipCountry',
            footerTemplate: 'Distinct Count: ${Custom}'
        }]
    }]
});
grid.appendTo('#Grid');

```

{% endtab %}