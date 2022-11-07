# Auto Generation

The [`columns`](../../api/grid/column) are automatically generated when
[`columns`](../../api/grid/column) declaration is empty or undefined while initializing the grid. All the columns in the [`dataSource`](../../api/grid/#datasource) are bound as grid columns.

{% tab template="grid/row-template" , es5Template="autogenerate" %}

```typescript
import { Grid } from '@syncfusion/ej2-grids';

let data: Object[] = [
    { OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5 },
    { OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6 },
    { OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4 }];

let grid: Grid = new Grid ({
    dataSource: data
});
grid.appendTo('#Grid');

```

{% endtab %}

> When columns are auto-generated, the column [`type`](../../api/grid/column/#type) will be determined from the first record of the [`dataSource`](../../api/grid/#datasource).

## Set isPrimaryKey for auto generated columns when editing is enabled

Primary key can be defined in the declaration of column object of the grid. When we didn't declare the columns, the grid will generate the columns automatically. For these auto generated columns, you can set [`isPrimaryKey`](../../api/grid/column/#isprimarykey) column property as true by any one of the following two ways,

If Primary key "column index" is known then refer the following code example

```typescript

import { Grid, Edit } from '@syncfusion/ej2-grids';

Grid.Inject(Edit);

let data: Object[] = [
    { OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5 },
    { OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6 },
    { OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4 }];

let grid: Grid = new Grid ({
    dataSource: data,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true }
});
grid.appendTo('#Grid');

grid.dataBound = () => {
    var column: Column = grid.columns[0];
    column.isPrimaryKey = 'true';
}

```

If Primary key "column fieldname" is known then refer the following code example

```typescript

import { Grid, Edit } from '@syncfusion/ej2-grids';

Grid.Inject(Edit);

let data: Object[] = [
    { OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5 },
    { OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6 },
    { OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4 }];

let grid: Grid = new Grid ({
    dataSource: data,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true }
});
grid.appendTo('#Grid');

grid.dataBound = () => {
    var column: Column = grid.getColumnByField('OrderID');
    column.isPrimaryKey = 'true';
}

```

## Set column options to auto generated columns

You can set column options such as [`format`](../../api/grid/column/#format), [`width`](../../api/grid/column/#width) to the auto generated columns by using [`dataBound`](../../api/grid/#databound) event of the grid.

In the below example, [`width`](../../api/grid/column/#width) is set for **OrderID** column, **date** type is set for **OrderDate** column and **numeric** type is set for **Freight** column.

{% tab template="grid/row-template" , es5Template="autogenerateformat" %}

```typescript
import { Grid } from '@syncfusion/ej2-grids';

let data: Object[] = [
            { OrderID: 10248, CustomerID: 'VINET', Freight: 32.3800, OrderDate: "1996-07-02T00:00:00.000Z" },
            { OrderID: 10249, CustomerID: 'TOMSP', Freight: 32.3800, OrderDate: "1996-07-19T00:00:00.000Z" },
            { OrderID: 10250, CustomerID: 'HANAR', Freight: 32.3800, OrderDate: "1996-07-22T00:00:00.000Z" }];

let grid: Grid = new Grid ({
    dataSource: data,
    dataBound: dataBound
});
grid.appendTo('#Grid');

function dataBound(args: any): void {
        for (var i = 0; i < this.columns.length; i++) {
            this.columns[0].width = 120;
            if(this.columns[i].field === "OrderDate"){
                this.columns[i].type="date";
            }
            if (this.columns[i].type === "date") {
                this.columns[i].format = { type: "date", format: "dd/MM/yyyy" };
            }
            this.columns[2].format = "P2";
        }
        this.refreshColumns();
    }

```

{% endtab %}