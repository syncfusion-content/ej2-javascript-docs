# Column Menu

The column menu has options to integrate features like sorting, grouping, filtering, column chooser, and autofit. It will show a menu with the integrated feature when users click on multiple icon of the column. To enable column menu, you need to define the [`showColumnMenu`](../../api/grid/#showcolumnmenu) property as true.

To use the column menu, inject the **ColumnMenu** module in the grid.

The default items are displayed in following table.

| Item | Description |
|-----|-----|
| **SortAscending** | Sort the current column in ascending order. |
| **SortDescending** | Sort the current column in descending order. |
| **Group** | Group the current column. |
| **Ungroup** | Ungroup the current column. |
| **AutoFit** | Auto fit the current column. |
| **AutoFitAll** | Auto fit all columns. |
| **ColumnChooser** | Choose the column visibility. |
| **Filter** | Show the filter option as given in [`filterSettings.type`](../../api/grid/filterSettings/#type) |

{% tab template="grid/row-template", es5Template="columnmenu" %}

```typescript
import { Grid, Resize, Sort, Group, Filter, ColumnMenu, Page } from '@syncfusion/ej2-grids';
import { data  } from './datasource.ts';

Grid.Inject(Resize, Sort, Group, Filter, ColumnMenu, Page);

let grid: Grid = new Grid({
    dataSource: data,
    allowGrouping: true,
    allowSorting: true,
    allowFiltering: true,
    filterSettings: { type: 'CheckBox' },
    allowPaging: true,
    groupSettings: { showGroupedColumn: true },
    showColumnMenu: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 200, textAlign: 'Right',
            showInColumnChooser: false },
        { field: 'Freight', width: 150, format: 'C2', textAlign: 'Right', editType: 'numericedit' },
        { field: 'ShipName', headerText: 'Ship Name', width: 300 },
        { field: 'ShipCountry', headerText: 'Ship Country', visible: false, width: 200 },
        { field: 'ShipCity', headerText: 'Ship City', width: 200 }
    ]
});
grid.appendTo('#Grid');


```

{% endtab %}

> * You can disable column menu for a particular column by defining the [`columns.showColumnMenu`](../../api/grid/column/#showcolumnmenu) as false.
> * You can customize the default items by defining the [`columnMenuItems`](../../api/grid/#columnmenuitems) with required items.

## Column menu events

During the resizing action, the grid component triggers the below two events.

1. The [`columnMenuOpen`](../../api/grid/#columnmenuopen) event triggers before the column menu opens.
2. The [`columnMenuClick`](../../api/grid/#columnmenuclick) event triggers when the user clicks the column menu of the grid.

{% tab template="grid/row-template", es5Template="columnmenuevents" %}

```typescript
import { Grid, Resize, Sort, Group, Filter, ColumnMenu, Page } from '@syncfusion/ej2-grids';
import { data  } from './datasource.ts';

Grid.Inject(Resize, Sort, Group, Filter, ColumnMenu, Page);

let grid: Grid = new Grid({
    dataSource: data,
    allowGrouping: true,
    allowSorting: true,
    allowFiltering: true,
    filterSettings: { type: 'CheckBox' },
    allowPaging: true,
    groupSettings: { showGroupedColumn: true },
    showColumnMenu: true,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 200, textAlign: 'Right',
            showInColumnChooser: false },
        { field: 'Freight', width: 150, format: 'C2', textAlign: 'Right', editType: 'numericedit' },
        { field: 'ShipName', headerText: 'Ship Name', width: 300 },
        { field: 'ShipCountry', headerText: 'Ship Country', visible: false, width: 200 },
        { field: 'ShipCity', headerText: 'Ship City', width: 200 }
    ],
    columnMenuOpen: () => {
        alert('columnMenuOpen event is Triggered');
    },
    columnMenuClick: () => {
        alert('columnMenuClick event is Triggered');
    }
});
grid.appendTo('#Grid');


```

{% endtab %}

## Custom column menu item

Custom column menu items can be added by defining the [`columnMenuItems`](../../api/grid/#columnmenuitems) as collection of
the [`columnMenuItemModel`](../../api/grid/columnMenuItemModel).
Actions for this customized items can be defined in the [`columnMenuClick`](../../api/grid/#columnmenuclick) event.

{% tab template="grid/row-template" , es5Template="custommenu" %}

```typescript
import { Grid, ColumnMenu, Sort, Page } from '@syncfusion/ej2-grids';
import { MenuEventArgs } from '@syncfusion/ej2-navigations';
import { data  } from './datasource.ts';

Grid.Inject(ColumnMenu, Page, Sort);

let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    allowSorting: true,
    showColumnMenu: true,
    columnMenuItems:[{text:'Clear Sorting', id:'gridclearsorting'}],
    columnMenuClick: function(args: MenuEventArgs){
        if(args.item.id === 'gridclearsorting'){
            grid.clearSorting();
        }
    },
    sortSettings:{
        columns:[{direction: "Ascending", field: "OrderID"}]
    },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 200, textAlign: 'Right', showInColumnChooser: false },
        { field: 'Freight', width: 150, format: 'C2', textAlign: 'Right', editType: 'numericedit' },
        { field: 'ShipName', headerText: 'Ship Name', width: 300 },
        { field: 'ShipCountry', headerText: 'Ship Country', visible: false, width: 200 },
        { field: 'ShipCity', headerText: 'Ship City', width: 200 }
    ]
});
grid.appendTo('#Grid');


```

{% endtab %}

## Customize menu items for particular columns

Sometimes, you have a scenario that to hide an item from column menu for particular columns. In that case, you need to define the [`columnMenuOpenEventArgs.hide`](../../api/grid/columnMenuOpenEventArgs) as true in the [`columnMenuOpen`](../../api/grid/#columnmenuopen) event.

The following sample, **Filter** item was hidden in column menu when opens for the **OrderID** column.

{% tab template="grid/row-template", es5Template="menuitems" %}

```typescript
import { Grid, ColumnMenu, Sort, Page, Resize, Group, Filter, ColumnMenuOpenEventArgs, ColumnMenuItemModel } from '@syncfusion/ej2-grids';
import { data  } from './datasource.ts';

Grid.Inject(ColumnMenu, Page, Group, Sort, Resize, Filter);

let grid: Grid = new Grid({
    dataSource: data,
    allowPaging: true,
    showColumnMenu: true,
    filterSettings: {type: 'Menu'},
    allowFiltering: true,
    allowGrouping: true,
    allowSorting: true,
    columnMenuOpen: function (args: ColumnMenuOpenEventArgs) {
        for (let item of args.items) {
            if (item.text === 'Filter' && args.column.field === 'OrderID') {
                (item as ColumnMenuItemModel).hide = true;
            } else {
                (item as ColumnMenuItemModel).hide = false;
            }
        }
    },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 200, textAlign: 'Right', showInColumnChooser: false },
        { field: 'Freight', width: 150, format: 'C2', textAlign: 'Right', editType: 'numericedit' },
        { field: 'ShipName', headerText: 'Ship Name', width: 300 },
        { field: 'ShipCountry', headerText: 'Ship Country', visible: false, width: 200 },
        { field: 'ShipCity', headerText: 'Ship City', width: 200 }
    ]
});
grid.appendTo('#Grid');


```

{% endtab %}

## Customize the icon of column menu

You can customize the column menu icon by overriding the default grid class `.e-icons.e-columnmenu` with a custom property `content` as mentioned below.

```css
.e-grid .e-columnheader .e-icons.e-columnmenu::before {
              content: "\e941";
      }
```

In the below sample, grid is rendered with a customized column menu icon.

{% tab template="grid/custom-column-menu-icon",es5Template="column-icon" %}

```typescript
import { Grid, ColumnMenu } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(ColumnMenu);

let grid: Grid = new Grid({
    dataSource: data,
    columns: [
        { field: 'OrderID', headerText: 'Order ID', width: 100 },
        { field: 'CustomerID', headerText: 'Customer ID', width: 120 },
        { field: 'ShipName', headerText: 'Ship Name', width: 140 },
        { field: 'ShipCity', headerText: 'Ship City', width: 100 },
    ],
    showColumnMenu: true,
    height: 315
});
grid.appendTo('#Grid');

```

{% endtab %}