---
title: "Filtering"
component: "Grid"
description: "Learn how to filter rows in the DataGrid using the filter bar, menu, and Excel-like filtering. Also learn how to use custom filter components in the Essential JS 2 DataGrid control."
---

# Filtering

Filtering allows you to view particular records based on filter criteria. To enable filtering in the Grid, set the [`allowFiltering`](../../api/grid/#allowfiltering) to true. Filtering options can be configured through [`filterSettings`](../../api/grid/filterSettings).

To use filter, inject the [`Filter`](../../api/grid/filter) module in the grid.

<!---
Grid supports two types of filter, they are:
* Filter bar
* Excel
-->

{% tab template="grid/grid",es5Template="filter" %}

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

> * You can apply and clear filtering by using [`filterByColumn`](../../api/grid/filter/#filterbycolumn) and [`clearFiltering`](../../api/grid/filter/#clearfiltering) methods.
> * To disable filtering for a particular column, set
[`columns.allowFiltering`](../../api/grid/column/#allowfiltering) to false.

## Initial filter

To apply the filter at initial rendering, set the filter [`predicate`](../../api/grid/predicate) object in
[`filterSettings.columns`](../../api/grid/filterSettingsModel#columns).

{% tab template="grid/grid",es5Template="initfilter" %}

```typescript
import { Grid, Filter } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Filter);

let grid: Grid = new Grid({
    dataSource: data,
    allowFiltering: true,
    filterSettings: {
        columns: [{ field: 'ShipCity', matchCase: false, operator: 'startswith', predicate: 'and', value: 'reims' },
        { field: 'ShipName', matchCase: false, operator: 'startswith', predicate: 'and', value: 'Vins et alcools Chevalier' }]
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

## Filter operators

The filter operator for a column can be defined in the [`filterSettings.columns.operator`](../../api/grid/predicateModel/#operator) property.

The available operators and its supported data types are:

Operator |Description |Supported Types
-----|-----|-----
startswith |Checks whether the value begins with the specified value. |String
endswith |Checks whether the value ends with the specified value. |String
contains |Checks whether the value contains the specified value. |String
equal |Checks whether the value is equal to the specified value. |String &#124; Number &#124; Boolean &#124; Date
notequal |Checks for values not equal to the specified value. |String &#124; Number &#124; Boolean &#124; Date
greaterthan |Checks whether the value is greater than the specified value. |Number &#124; Date
greaterthanorequal|Checks whether a value is greater than or equal to the specified value. |Number &#124; Date
lessthan |Checks whether the value is less than the specified value. |Number &#124; Date
lessthanorequal |Checks whether the value is less than or equal to the specified value. |Number &#124; Date

> By default, the [`filterSettings.columns.operator`](../../api/grid/predicateModel/#operator) value is `equal`.

## Diacritics filter

By default, grid ignores diacritic characters while filtering. To include diacritic characters, set the
[`filterSettings.ignoreAccent`](../../api/grid/filter/#ignoreAccent-boolean) as `true`.

In the following sample, type **aero** in `Name` column to filter diacritic characters.

{% tab template="grid/filter-diacritics",es5Template="filter" %}

```typescript
import { Grid, Filter, Page } from '@syncfusion/ej2-grids';
import { data } from 'datasource.ts';

Grid.Inject(Page, Filter);

let grid: Grid = new Grid({
    dataSource: data,
    allowFiltering: true,
    filterSettings: { ignoreAccent: true },
    columns: [
        { field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'Right', width: 140 },
        { field: 'Name', headerText: 'Name', width: 170 },
        { field: 'ShipName', headerText: 'Ship Name', width: 170 },
        { field: 'CustomerID', headerText: 'Supplier Name', width: 140 }
    ],
    allowPaging: true,
});
grid.appendTo('#Grid');

```

{% endtab %}

## See Also

* [Customizing Filter Dialog by using an additional parameter](../how-to/add-params-for-filtering)
* [How to implement 'not contains' operator for Grid filtering](https://www.syncfusion.com/kb/12691/how-to-implement-not-contains-operator-for-grid-filtering)
* [How to filter custom date ranges in Grid column using date range picker](https://www.syncfusion.com/kb/12390/how-to-filter-custom-date-ranges-in-grid-column-using-date-range-picker)
* [How to filter multiple records using the filter bar template](https://www.syncfusion.com/kb/11808/how-to-filter-multiple-records-using-the-filter-bar-template)
* [How to change the data source for checkbox filter popup in Grid?](https://www.syncfusion.com/kb/11339/how-to-change-the-data-source-for-checkbox-filter-popup-in-grid)
* [How to perform advanced filtering in grid using custom queries](https://www.syncfusion.com/kb/11256/how-to-perform-advanced-filtering-in-grid-using-custom-queries)