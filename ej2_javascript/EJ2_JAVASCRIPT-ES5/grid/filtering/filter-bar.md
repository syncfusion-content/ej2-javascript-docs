# Filter Bar

By setting the [`allowFiltering`](../../api/grid/#allowfiltering) to true, the filter bar row will render next to the header, which allows you to filter data. You can filter the records with different expressions depending upon the column type.

 **Filter bar expressions:**

 You can enter the following filter expressions (operators) manually in the filter bar.

Expression |Example |Description |Column Type
-----|-----|-----|-----
= |=value |equal |Number
!= |!=value |notequal |Number
> |>value |greaterthan |Number
< |<value |lessthan |Number
>= |>=value |greaterthanorequal |Number
<=|<=value|lessthanorequal |Number
* |*value |startswith |String
% |%value |endswith |String
N/A |N/A | `Equal` operator will always be used for date filter. |Date
N/A |N/A |`Equal` operator will always be used for Boolean filter. |Boolean

{% tab template="grid/grid",es5Template="filterbar" %}

```typescript
import { Grid, Filter } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Filter);

let grid: Grid = new Grid({
    dataSource: data,
    allowFiltering: true,
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

## Filter bar template with custom component

The [`filterBarTemplate`](../../api/grid/column/#filterbartemplate) is used to add custom components to a particular column, and does the following functions:
* `create`: Creates custom components.
* `write`: Wires events for custom components.

In the following sample, the dropdown is used as a custom component in the EmployeeID column.

{% tab template="grid/filter-template",es5Template="custom" %}

```typescript
import { Grid, Filter, Column } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Filter);

let gridObj: Grid = new Grid({
    dataSource: data,
    allowFiltering: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        {
            field: 'EmployeeID', filterBarTemplate: {
                create: (args: { element: Element, column: Column }) => {
                    let dd: HTMLSelectElement = document.createElement('select');
                    dd.id = 'EmployeeID';
                    let dataSource: string[] = ['All', '1', '3', '4', '5', '6', '8', '9'];
                    for (let i: number = 0; i < dataSource.length; i++) {
                        let option: HTMLOptionElement = document.createElement('option');
                        option.value = dataSource[i];
                        option.innerHTML = dataSource[i];
                        dd.appendChild(option);
                    }
                    return dd;
                },
                write: (args: { element: Element, column: Column }) => {
                    args.element.addEventListener('input',
                    (args: Event): void => {
                        let target: HTMLInputElement = <HTMLInputElement>args.currentTarget;
                        if (target.value !== 'All') {
                            let value: Number = +target.value;
                            gridObj.filterByColumn(target.id, 'equal', value);
                        } else {
                            gridObj.removeFilteredColsByField(target.id);
                        }
                    });
                },
            },
            textAlign: 'Right', width: 100
        },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 100 }]
});
gridObj.appendTo('#Grid');

```

{% endtab %}

## Change default filterbar operator

You can change the filter operator as per the requirement by defining the `filter` property in Grid columns.

In this below demo, we have applied the filter operator `contains` for CustomerID column.

{% tab template="grid/filteroperator", es5Template="operator" %}

```typescript
import { Grid, Page, Filter } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Page, Filter);

let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    allowFiltering: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 140, filter: { operator: "contains" }, headerText: 'Customer ID', type: 'string' },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C2' },
        { field: 'OrderDate', headerText: 'Order Date', textAlign: 'Right', width: 140, format: 'yMd' }
    ],
    height: 220
});
grid.appendTo('#Grid');

```

{% endtab %}
