# ForeignKey Column

Foreign key column can be enabled by using [`column.dataSource`](../../api/grid/column/#datasource), [`column.foreignKeyField`](../api/grid/column/#foreignkeyfield) and [`column.foreignKeyValue`](../../api/grid/column/#foreignkeyvalue) properties.

* [`column.dataSource`](../../api/grid/column/#datasource) - Defines the foreign data.
* [`column.foreignKeyField`](../../api/grid/column/#foreignkeyfield) - Defines the mapping column name to the foreign data.
* [`column.foreignKeyValue`](../../api/grid/column/#foreignkeyvalue) - Defines the display field from the foreign data.

In the following example, **Employee Name** is a foreign column which shows **FirstName** column from foreign data.

{% tab template="grid/foreign-key", es5Template="foreign-key" %}

```typescript
import { Grid, ForeignKey } from '@syncfusion/ej2-grids';
import { data, employeeData } from './datasource.ts';

Grid.Inject(ForeignKey);

let grid: Grid = new Grid(
    {
        dataSource: data.slice(0,10),
        columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
            {
                field: 'EmployeeID', headerText: 'Employee Name', width: 150, foreignKeyValue: 'FirstName', dataSource: employeeData
            },
            { field: 'Freight', headerText: 'Freight', width: 100, textAlign: 'Right'},
            { field: 'ShipName', headerText: 'Ship Name', width: 180 }
        ],
        height: 315
    });
grid.appendTo('#Grid');

```

{% endtab %}

> * For remote data, the sorting and grouping is done based on [`column.foreignKeyField`](../../api/grid/column/#foreignkeyfield) instead of [`column.foreignKeyValue`](../../api/grid/column/#foreignkeyvalue).
> * If [`column.foreignKeyField`](../../api/grid/column/#foreignkeyfield) is not defined, then the column uses [`column.field`](../../api/grid/column/#field).

## Use edit template in foreignkey column

By default, the foreign key column uses the drop-down component for editing. You can render other than the drop-down component by using the [`column.edit`](../../api/grid/column/#edit) property. The following example demonstrates the way of using edit template in the foreign column.

In the following code example, the `Employee Name` is a foreign key column. When editing, the AutoComplete component is rendered instead of drop-down list.

{% tab template="grid/foreign-key", es5Template="foreign-edit" %}

```typescript
import { createElement } from '@syncfusion/ej2-base';
import { Grid, ForeignKey, Edit, Toolbar } from '@syncfusion/ej2-grids';
import { AutoComplete } from '@syncfusion/ej2-dropdowns';
import { DataManager, Query } from '@syncfusion/ej2-data';
import { data, employeeData } from './datasource.ts';

Grid.Inject(ForeignKey, Edit, Toolbar);

let autoComplete: AutoComplete;

let grid: Grid = new Grid(
        {
            dataSource: data,
            editSettings: { allowEditing: true },
            toolbar: ['Edit', 'Update', 'Cancel'],
            columns: [
                { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100, isPrimaryKey: true },
                // Foreign column
                {
                    field: 'EmployeeID', headerText: 'Employee Name', width: 150, foreignKeyValue: 'LastName', dataSource: employeeData,
                    edit: {
                            create: () => { // to create input element
                                return createElement('input');
                            },
                            read: () => { // return edited value to update data source
                                let value: Object[] = new DataManager(employeeData).executeLocal(new Query().where('LastName', 'equal', autoComplete.value));
                                return value.length && value[0]['EmployeeID']; // to convert foreign key value to local value.
                            },
                            destroy: () => { // to destroy the custom component.
                                autoComplete.destroy();
                            },
                            write: (args: { rowData: Object, column: Column, foreignKeyData: Object }) => { // to show the value for custom component
                                autoComplete = new AutoComplete({
                                    dataSource: employeeData,
                                    fields: { value: args.column.foreignKeyValue },
                                    value: args.foreignKeyData[0][args.column.foreignKeyValue]
                                });
                                autoComplete.appendTo(args.element);
                            }
                        }
                },
                { field: 'Freight', headerText: 'Freight', width: 100, textAlign: 'Right'},
                { field: 'ShipName', headerText: 'Ship Name', width: 180 }
            ],
            height: 265
        });
    grid.appendTo('#Grid');

```

{% endtab %}

## Customize filter UI in foreignkey column

You can create your own filtering UI by using [`column.filter`](../../api/grid/column/#filter) property. The following example demonstrates the way to create a custom filtering UI in the foreign column.

In the following example, The `Employee Name` is a foreign key column. DropDownList is rendered using Filter UI.

{% tab template="grid/foreign-key", es5Template="foreign-fui" %}

```typescript
import { createElement } from '@syncfusion/ej2-base';
import { DataManager } from '@syncfusion/ej2-data';
import { Grid, ForeignKey, Filter } from '@syncfusion/ej2-grids';
import { data, fEmployeeData } from './datasource.ts';
import { DropDownList } from '@syncfusion/ej2-dropdowns';

Grid.Inject(ForeignKey, Filter);

let grid: Grid = new Grid(
    {
        dataSource: data,
        allowFiltering: true,
        filterSettings: {type: 'Menu'},
        columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
            // Foreign column
            {
                field: 'EmployeeID', headerText: 'Employee Name', width: 150, foreignKeyValue: 'FirstName', dataSource: fEmployeeData,
                filter: {
                        ui: {
                            create: (args: { target: Element, column: Object }) => {
                                let flValInput: HTMLElement = createElement('input', { className: 'flm-input' });
                                args.target.appendChild(flValInput);
                                this.dropInstance = new DropDownList({
                                    dataSource: new DataManager(fEmployeeData),
                                    fields: { text: 'FirstName', value: 'EmployeeID' },
                                    placeholder: 'Select a value',
                                    popupHeight: '200px'
                                });
                                this.dropInstance.appendTo(flValInput);
                            },
                            write: (args: {
                                column: Object, target: Element, parent: any,
                                filteredValue: number | string
                            }) => {
                                this.dropInstance.text = args.filteredValue || '';
                            },
                            read: (args: { target: Element, column: any, operator: string, fltrObj: Filter }) => {
                                args.fltrObj.filterByColumn(args.column.field, args.operator, this.dropInstance.text);
                            }
                        }
                    }
            },
            { field: 'Freight', headerText: 'Freight', width: 100, textAlign: 'Right'},
            { field: 'ShipName', headerText: 'Ship Name', width: 180 }
        ],
        height: 315
    });
    grid.appendTo('#Grid');

```

{% endtab %}

## Use filter bar template in foreignkey column

You can use the filter bar template in foreign key column by defining the [`column.filterBarTemplate`](../../api/grid/column/#filterbartemplate) property. The following example demonstrates the way to use filter bar template in foreign column.

In the following example, The `Employee Name` is a foreign key column. This column header shows the custom filter bar template and you can select filter value by using the `DropDown` options.

{% tab template="grid/foreign-key", es5Template="foreign-ftemp" %}

```typescript
import { Grid, ForeignKey, Filter } from '@syncfusion/ej2-grids';
import { data, fEmployeeData } from './datasource.ts';
import { createElement } from '@syncfusion/ej2-base';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { DataManager } from '@syncfusion/ej2-data';

Grid.Inject(ForeignKey, Filter);

let grid: Grid = new Grid(
    {
        dataSource: data,
        allowFiltering: true,
        columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
            // Foreign column
            {
                field: 'EmployeeID', headerText: 'Employee Name', width: 150, foreignKeyValue: 'FirstName', dataSource: fEmployeeData,
                filterBarTemplate: {
                    create: (args: { element: Element, column: Column }) =>
                        return createElement('input', { className: 'flm-input' });;
                    },
                    write: (args: { element: Element, column: Column }) => {
                        fEmployeeData.splice(0, 0, {'FirstName': 'All'}); // for clear filtering
                        let dropInstance: DropDownList = new DropDownList({
                            dataSource: new DataManager(fEmployeeData),
                            fields: { text: 'FirstName' },
                            placeholder: 'Select a value',
                            popupHeight: '200px',
                            index: 0,
                            change: (args) => {
                                if (args.value !== 'All') {
                                    grid.filterByColumn('EmployeeID', 'equal', args.value);
                                }
                                else {
                                    grid.removeFilteredColsByField('EmployeeID');
                                }
                            }
                        });
                        dropInstance.appendTo(args.element);
                    }
                }
            },
            { field: 'Freight', headerText: 'Freight', width: 100, textAlign: 'Right'},
            { field: 'ShipName', headerText: 'Ship Name', width: 180 }
        ],
        height: 260
    });
    grid.appendTo('#Grid');

```

{% endtab %}

## Perform aggregation in foreignkey column

Default aggregations are not supported in a foreign key column. You can achieve aggregation for the foreign key column by using the custom aggregates. The following example demonstrates the way to achieve aggregation in foreign key column.

In the following example, The `Employee Name` is a foreign key column and the aggregation for the foreign column was calculated in customAggregateFn.

{% tab template="grid/foreign-key", es5Template="foreign-aggregate" %}

```typescript
import { Grid, ForeignKey, Aggregate, getForeignData, CustomSummaryType, AggregateColumnModel } from '@syncfusion/ej2-grids';
import { data, employeeData } from './datasource.ts';
import { getValue } from '@syncfusion/ej2-base';

Grid.Inject(ForeignKey, Aggregate);

// Custom Aggregate function for foreign column
let customAggregateFn: CustomSummaryType = (data: Object, column: AggregateColumnModel) => {
    return data.result.filter((dObj: Object) => {
        return getValue('FirstName' , getForeignData(grid.getColumnByField(column.columnName), dObj)[0]) === 'Margaret';
    }).length;
};

let grid: Grid = new Grid(
    {
        dataSource: data,
        columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
            // Foreign column
            {
                field: 'EmployeeID', headerText: 'Employee Name', width: 150, foreignKeyValue: 'FirstName', dataSource: employeeData,
            },
            { field: 'Freight', headerText: 'Freight', width: 100, textAlign: 'Right'},
            { field: 'ShipName', headerText: 'Ship Name', width: 180 }
        ],
        height: 280,
        aggregates: [
            {
                columns: [
                    {
                        type: 'Custom',
                        customAggregate: customAggregateFn,
                        field: 'EmployeeID',
                        footerTemplate: 'Count of Margaret: ${Custom}'
                    }
                ]
            }
        ]
    });
    grid.appendTo('#Grid');

```

{% endtab %}

## Enable multiple foreign key columns

Multiple foreign key columns with editing options are enabled for the JavaScript(ES5) Grid component.

In the following example, **Customer Name** and **Ship City** are foreign key columns that display the **ContactName** and **City** columns from foreign data.

{% tab template="grid/foreign-key", es5Template="foreignkeycol-multiple" %}

```typescript
import { Grid, Page, Edit, Toolbar, ForeignKey } from '@syncfusion/ej2-grids';
import { orderDetails, customerData, employeeData } from './datasource.ts';

Grid.Inject(Page, Edit, Toolbar, ForeignKey);

let grid: Grid = new Grid(
    {
        dataSource: orderDetails,
        allowPaging: true,
        toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
        editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
        columns: [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', isPrimaryKey: true, width: 100 },
            {
                field: 'CustomerID', foreignKeyField: 'CustomerID', foreignKeyValue: 'ContactName', dataSource: customerData,
                width: 150, headerText: 'Customer Name', validationRules: { required: true }
            },
            { field: 'Freight', headerText: 'Freight', editType: 'numericedit', width: 100, textAlign: 'Right', format: 'C2' },
            {
                field: 'EmployeeID', foreignKeyField: 'EmployeeID', foreignKeyValue: 'City', dataSource: employeeData,
                width: 150, headerText: 'Ship City', validationRules: { required: true }
            },

            { field: 'ShipName', headerText: 'Ship Name', editType: 'dropdownedit', width: 180 }
        ],
        height: 315
    });
grid.appendTo('#Grid');

```

{% endtab %}