---
title: "Search"
component: "Grid"
description: "Learn how to search DataGrid content, change search operators, perform searches using external buttons, and search particular fields."
---

# Search

You can search records in a Grid, by using the [`search`](../api/grid/#search) method with search key as a parameter. This also provides an option to integrate search text box in grid's toolbar by adding `search` item to the [`toolbar`](../api/grid/#toolbar).

To search records, inject the [`Search`](../api/grid/search) module in the grid.

> The clear icon is shown in the Data Grid search text box when it is focused on search text or after typing the single character in the search text box. A single click of the clear icon clears the text in the search box as well as the search results in the Data Grid.

{% tab template="grid/grid", es5Template="search" %}

```typescript
import { Grid, Search, Toolbar } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Search, Toolbar);

let grid: Grid = new Grid({
    dataSource: data,
    toolbar: ['Search'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 150, headerText: 'Customer ID', type: 'string' },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C' },
        { field: 'OrderDate', headerText: 'Order Date', textAlign: 'Right', width: 140, format: 'yMd' }
    ],
    height: 272
});
grid.appendTo('#Grid');

```

{% endtab %}

## Initial search

To apply search at initial rendering, set the fields, operator, key, and ignoreCase in the [`searchSettings`](../api/grid/searchSettings/#ignorecase).

{% tab template="grid/grid", es5Template="initsearch" %}

```typescript
import { Grid, Search, Toolbar } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Search, Toolbar);

let grid: Grid = new Grid({
    dataSource: data,
    toolbar: ['Search'],
    searchSettings: { fields: ['CustomerID'], operator: 'contains', key: 'Ha', ignoreCase: true },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ],
    height: 272
});
grid.appendTo('#Grid');

```

{% endtab %}

> By default, grid searches all the bound column values. To customize this behavior define the [`searchSettings.fields`](../api/grid/searchSettings/#fields) property.

## Search operators

The search operator can be defined in the [`searchSettings.operator`](../api/grid/searchSettings/#operator) property to configure specific searching.

The following operators are supported in searching:

Operator |Description
-----|-----
startsWith |Checks whether a value begins with the specified value.
endsWith |Checks whether a value ends with the specified value.
contains |Checks whether a value contains the specified value.
equal |Checks whether a value is equal to the specified value.
notEqual |Checks for values not equal to the specified value.

> By default, the [`searchSettings.operator`](../api/grid/searchSettings/#operator) value is `contains`.

## Search by external button

To search grid records from an external button, invoke the [`search`](../api/grid/#search) method.

{% tab template="grid/search-method", es5Template="external" %}

```typescript
import { Grid } from '@syncfusion/ej2-grids';
import { Button } from '@syncfusion/ej2-buttons';
import { data } from './datasource.ts';

let grid: Grid = new Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ],
    height: 260
});
grid.appendTo('#Grid');

let searchBtn: Button = new Button();
searchBtn.appendTo('#search');

document.getElementById('search').addEventListener('click', () => {
    let searchText: string = (<HTMLInputElement>document.getElementsByClassName('searchtext')[0]).value;
    grid.search(searchText);
});

```

{% endtab %}

## Search specific columns

By default, grid searches all visible columns. You can search specific columns by defining the specific column's field names in the [`searchSettings.fields`](../api/grid/searchSettings/#fields) property.

{% tab template="grid/column-search", es5Template="specific" %}

```typescript
import { Grid, Toolbar } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Toolbar);

let grid: Grid = new Grid({
    dataSource: data,
    searchSettings: { fields: ['CustomerID', 'ShipCity', 'ShipName']},
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
        { field: 'ShipName', headerText: 'Ship Name', width: 100 }
    ],
    toolbar: ['Search'],
    height: 270
});
grid.appendTo('#Grid');

```

{% endtab %}

## Clear search by external button

To clear the searched grid records from the external button, set [`searchSettings.key`](../api/grid/searchSettings/#key) property as `empty` string.

{% tab template="grid/clear-search", es5Template="clear" %}

```typescript
import { Grid, Search, Toolbar } from '@syncfusion/ej2-grids';
import { Button } from '@syncfusion/ej2-buttons';
import { data } from './datasource.ts';

Grid.Inject(Search, Toolbar);

let grid: Grid = new Grid({
    dataSource: data,
    toolbar: ['Search'],
    searchSettings: { fields: ['CustomerID'], operator: 'contains', key: 'Ha', ignoreCase: true },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ],
    height: 272
});
grid.appendTo('#Grid');

let clearBtn: Button = new Button();
clearBtn.appendTo('#clear');

document.getElementById('clear').addEventListener('click', () => {
    grid.searchSettings.key='';
});

```

{% endtab %}

## Search on each key stroke

You can search the Grid data on each key stroke by binding the `keyup` event for the search input element inside the [`created`](../api/grid/#created) event. Inside the `keyup` handler you can search the Grid by invoking the [`search`](../api/grid/#search) method of the Grid component.

{% tab template="grid/column-search", es5Template="eachkey" %}

```typescript
import { Grid, Search, Toolbar } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Search, Toolbar);

let grid: Grid = new Grid({
    dataSource: data,
    toolbar: ['Search'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ],
    height: 272,
    created: () => {
        document.getElementById(grid.element.id + "_searchbar").addEventListener('keyup', () => {
                grid.search((event.target as HTMLInputElement).value)
        });
    }
});
grid.appendTo('#Grid');

```

{% endtab %}

## Highlight the search text

You can highlight the search text in the Grid content by adding the style inside the [`queryCellInfo`](../api/grid/#querycellinfo) event. you can get the search keyword from the [`actionBegin`](../api/grid/#actionbegin) event.

{% tab template="grid/column-search", es5Template="highlight" %}

```typescript
import { Grid, Search, Toolbar, QueryCellInfoEventArgs, SearchEventArgs } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Search, Toolbar);

let key: string = '';
let grid: Grid = new Grid({
    dataSource: data,
    toolbar: ['Search'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 150 },
        { field: 'ShipCity', headerText: 'Ship City', width: 150 },
        { field: 'ShipName', headerText: 'Ship Name', width: 150 }
    ],
    height: 272,
    actionBegin: (args: SearchEventArgs) => {
    if (args.requestType === 'searching') {
      key = args.searchString.toLowerCase();
    }
  },
  queryCellInfo: (args: QueryCellInfoEventArgs) => {
    if (key != '') {
      let cellContent: string = args.data[args.column.field];
      let parsedContent: string = cellContent.toString().toLowerCase();
      if (parsedContent.includes(key.toLowerCase())) {
        let i: number = 0;
        let searchStr: string = '';
        while (i < key.length) {
          let index: number = parsedContent.indexOf(key[i]);
          searchStr = searchStr + cellContent.toString()[index];
          i++;
        }
        args.cell.innerHTML = (args.cell as any).innerText.replaceAll(
          searchStr,
          "<span class='customcss'>" + searchStr + '</span>'
        );
      }
    }
  }
});
grid.appendTo('#Grid');

```

{% endtab %}

## Perform search operation in Grid using multiple keywords

You can perform a searching operation in the Grid using multiple keywords. This can be achieved by the [actionBegin](../api/grid/#actionbegin) event of the Grid.
In the following sample, we have performed the searching with multiple keywords by using the query property of grid when the requestType is searching in the [actionBegin](../api/grid/#actionbegin) event.

{% tab template="grid/column-search", es5Template="multiplekeywords" %}

```typescript
import { Grid, Search, Toolbar } from '@syncfusion/ej2-grids';
import { Predicate, Query } from '@syncfusion/ej2-data';
import { data } from './datasource.ts';

Grid.Inject(Search, Toolbar);

let key: string = '';
let values;
let refresh:boolean= false;
let removeQuery:boolean= false;
let valueAssign:boolean= false;
let grid: Grid = new Grid({
    dataSource: data,
    toolbar: ['Search'],
    columns: [
        {
            field: 'OrderID',headerText: 'Order ID',textAlign: 'Center',width: 120,
        },
        {
            field: 'CustomerID',headerText: 'Customer ID',textAlign: 'Center',width: 150,
        },
        {
            field: 'ShipCity',headerText: 'Ship City',textAlign: 'Center',width: 150,
        },
        {
            field: 'ShipName',headerText: 'Ship Name',textAlign: 'Center',width: 150,
        },
    ],
    searchSettings: {
        fields: ['CustomerID', 'OrderID', 'ShipCity', 'ShipName'],key: ''
    },
    height: 272,

    actionBegin: (args) => {
        if (args.requestType == 'searching') {
            const keys = args.searchString.split(',');
            var flag = true;
            var predicate;
            if (keys.length > 1) {
                if (grid.searchSettings.key !== '') {
                    values = args.searchString;
                    keys.forEach((key) => {
                        grid.getColumns().forEach((col) => {
                            if (flag) {
                                predicate = new Predicate(col.field,'contains',key,true);
                                flag = false;
                            }
                            else {
                                var pre = new Predicate(col.field,'contains',key,true);
                                predicate = predicate.or(pre);
                            }
                        });
                    });
                    grid.query = new Query().where(predicate);
                    grid.searchSettings.key = '';
                    refresh = true;
                    valueAssign = true;
                    removeQuery = true;
                    grid.refresh();
                }
            }
        }
    },
    actionComplete: (args) => {
        if (args.requestType === 'refresh' && valueAssign) {
            document.getElementById(grid.element.id + '_searchbar').value = values;
            valueAssign = false;
        }
        else if (
            document.getElementById(grid.element.id + '_searchbar').value === '' &&
            args.requestType === 'refresh' &&
            removeQuery
        )
        {
            grid.query = new Query();
            removeQuery = false;
            grid.refresh();
        }
    },
});
grid.appendTo('#Grid');

```

{% endtab %}

> * Search operation can be performed in foreign key column based on following way.
> * When a value is searched on a grid with the foreign key column, a filter query is sent to the foreign key data source, and the appropriate column is filtered depending on the search value. The search query will be sent to the grid data source, and the value of the associated field will be returned.

## See Also

* [How to perform searching in Date type column](https://www.syncfusion.com/kb/11251/how-to-perform-searching-in-date-type-column)
* [How to search the records in grid on each keystroke](https://www.syncfusion.com/kb/11248/how-to-search-the-records-in-grid-on-each-keystroke)