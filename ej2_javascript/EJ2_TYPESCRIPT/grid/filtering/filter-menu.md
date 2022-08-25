# Filter Menu

You can enable filter menu by setting the [`filterSettings.type`](../../api/grid/filterSettings#type) as `Menu`. The filter menu UI will be rendered based on its column type, which allows you to filter data.
You can filter the records with different operators.

{% tab template="grid/grid",es5Template="filtermenu" %}

```typescript
import { Grid, Filter } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Filter);

let grid: Grid = new Grid({
    dataSource: data,
    allowFiltering: true,
    filterSettings: { type:'Menu' },
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

> * [`allowFiltering`](../../api/grid/#allowfiltering) must be set as true to enable filter menu.
> * Setting [`columns.allowFiltering`](../../api/grid/column/#allowfiltering) as false will prevent
 filter menu rendering for a particular column.

## Custom component in filter menu

The [`column.filter.ui`](../../api/grid/column/#filter) is used to add custom filter components to a particular column.
To implement custom filter ui, define the following functions:

* `create`:  Creates custom component.
* `write`: Wire events for custom component.
* `read`: Read the filter value from custom component.

In the following sample, dropdown is used  as custom component in the OrderID column.

{% tab template="grid/grid",es5Template="customfiltermenu" %}

```typescript
import { Grid, Filter } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { DataManager } from '@syncfusion/ej2-data';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { createElement } from '@syncfusion/ej2-base';

Grid.Inject(Filter);

let grid: Grid = new Grid({
    dataSource: data,
    allowFiltering: true,
    filterSettings: {type:'Menu'},
        columns: [
            {
                field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right', filter: {
                    ui: {
                        create: (args: { target: Element, column: Object }) => {
                            let db: Object = new DataManager(data);
                            let flValInput: HTMLElement = createElement('input', { className: 'flm-input' });
                            args.target.appendChild(flValInput);
                            this.dropInstance = new DropDownList({
                                dataSource: new DataManager(data),
                                fields: { text: 'OrderID', value: 'OrderID' },
                                placeholder: 'Select a value',
                                popupHeight: '200px'
                            });
                            this.dropInstance.appendTo(flValInput);
                        },
                        write: (args: {
                            column: Object, target: Element, parent: any,
                            filteredValue: number | string
                        }) => {
                            this.dropInstance.value = args.filteredValue;
                        },
                        read: (args: { target: Element, column: any, operator: string, fltrObj: Filter }) => {
                            args.fltrObj.filterByColumn(args.column.field, args.operator, this.dropInstance.value);

                        }
                    }
                }
            },
            { field: 'CustomerID', headerText: 'Customer Name', width: 150 },
            { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd', textAlign: 'Right' },
            { field: 'Freight', width: 120, format: 'C2', textAlign: 'Right' }
        ]
    height: 273
});
grid.appendTo('#Grid');

```

{% endtab %}

## Customizing filter menu operators list

 You can customize the default filter operator list by defining the [`filterSettings.operators`](../../api/grid/filterSettings/#operators) property.
The available options are:
* `stringOperator`- Defines the customized string operator list.
* `numberOperator` - Defines the customized number operator list.
* `dateOperator` - Defines the customized date operator list.
* `booleanOperator` - Defines the customized Boolean operator list.

The following sample illustrates customizing the string filter operators.

{% tab template="grid/grid",es5Template="customfilter" %}

```typescript
import { Grid, Filter } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Filter);

let grid: Grid = new Grid({
    dataSource: data,
    allowFiltering: true,
    filterSettings: {type:'Menu',
        operators: {
            stringOperator: [
                    { value: 'startsWith', text: 'starts with' },
                    { value: 'endsWith', text: 'ends with' },
                    { value: 'contains', text: 'contains' }],
            }
    },
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

## Enable different filter for a column

You can use both `Menu` and `CheckBox` filter in a same Grid. To do so, set the
[`column.filter.type`](../../api/grid/column/#filter) as `Menu` or `CheckBox`.

In the following sample menu filter is enabled by default and checkbox filter is enabled for the CustomerID column using the
[`column.filter.type`](../../api/grid/column/#filter).

{% tab template="grid/grid",es5Template="filtertype" %}

```typescript
import { Grid, Filter } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Filter);

let grid: Grid = new Grid({
    dataSource: data,
    allowFiltering: true,
    filterSettings: { type:'Menu' },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 , filter: { type : 'CheckBox' } },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 100 }
    ],
    height: 273
});
grid.appendTo('#Grid');

```

{% endtab %}

## Filter by multiple keywords using filter menu

By default, the filtering action is performed based on the single keyword filter value from the built-in component of the filter menu dialog. Now data grid has an option to perform filtering actions based on multiple keywords instead of a single keyword alone. For this, set [`filterSettings.type`](../../api/grid/filterSettings#type) as `Menu`.

In the following sample, filtering action with multiple keywords can be done by rendering the `MultiSelect` component as custom component in the OrderID column filter menu dialog.

{% tab template="grid/grid",es5Template="filtermenu-multiple" %}

```typescript
import { Grid, Filter } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';
import { DataManager } from '@syncfusion/ej2-data';
import { MultiSelect, CheckBoxSelection } from '@syncfusion/ej2-dropdowns';
import { createElement } from '@syncfusion/ej2-base';

Grid.Inject(Filter);
MultiSelect.Inject(CheckBoxSelection);

let grid: Grid = new Grid({
    dataSource: data,
    allowFiltering: true,
    allowPaging: true,
    filterSettings: {type:'Menu'},
    columns: [
        {
            field: 'OrderID', headerText: 'Order ID', width: 120, textAlign: 'Right', filter: {
                ui: {
                    create: (args: { target: Element, column: Object }) => {
                        let db: Object = new DataManager(data);
                        let flValInput: HTMLElement = createElement('input', { className: 'flm-input' });
                        args.target.appendChild(flValInput);
                        this.dropInstance = new MultiSelect({
                            dataSource: new DataManager(data),
                            fields: { text: 'OrderID', value: 'OrderID' },
                            placeholder: 'Select a value',
                            popupHeight: '200px',
                            allowFiltering: true,
                            mode: 'CheckBox',
                        });
                        this.dropInstance.appendTo(flValInput);
                    },
                    write: (args: {
                        column: Object, target: Element, parent: any,
                        filteredValue: number | string
                    }) => {
                        let filteredValue = [];
                        grid.filterSettings.columns.map((item) => {
                            if (item.field === 'OrderID' && item.value) {
                               filteredValue.push(item.value);
                            }
                        });
                        if (filteredValue.length > 0) {
                            this.dropInstance.value = filteredValue;
                        }  
                    },
                    read: (args: { target: Element, column: any, operator: string, fltrObj: Filter }) => {
                        grid.removeFilteredColsByField(args.column.field);
                        args.fltrObj.filterByColumn(
                            args.column.field,
                            'contains',
                            this.dropInstance.value
                        );  
                    }
                }
            }
        },
        { field: 'CustomerID', headerText: 'Customer Name', width: 150 },
        { field: 'OrderDate', headerText: 'Order Date', width: 130, format: 'yMd', textAlign: 'Right' },
        { field: 'Freight', width: 120, format: 'C2', textAlign: 'Right' }
    ]
    height: 273
});
grid.appendTo('#Grid');

```

{% endtab %}