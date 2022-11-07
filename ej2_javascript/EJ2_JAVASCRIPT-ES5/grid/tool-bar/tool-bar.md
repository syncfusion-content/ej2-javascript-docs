---
title: "ToolBar"
component: "Grid"
description: "Learn how to use the toolbar and add custom toolbar items in the Essential JS 2 DataGrid control."
---

# ToolBar

The Grid provides ToolBar support to handle grid actions. The [`toolbar`](../../api/grid/#toolbar)
property accepts either the collection of built-in toolbar items and [`ItemModel`](../../api/toolbar/itemModel) objects for custom toolbar items or
HTML element ID for toolbar template.

To use ToolBar, inject [`Toolbar`](../../api/grid/#toolbarmodule) module in the grid.

## Enable or disable toolbar items

You can enable/disable toolbar items by using the **enableItems** method.

{% tab template="grid/toolbar-enable", es5Template="toolbarenable" %}

```typescript
import { Grid, Toolbar, Group } from '@syncfusion/ej2-grids';
import { Button } from '@syncfusion/ej2-buttons';
import { data } from './datasource.ts';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';

Grid.Inject(Toolbar, Group);

let grid: Grid = new Grid({
    dataSource: data,
    toolbar: ['Expand', 'Collapse'],
    allowGrouping: true,
    groupSettings: { columns: ['CustomerID'] },
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C' },
        { field: 'OrderDate', headerText: 'Order Date', textAlign: 'Right', width: 140, format: 'yMd' }
    ],
    height: 200,
    toolbarClick: clickHandler
});
grid.appendTo('#Grid');

let enable: Button = new Button({}, '#enable');
let disable: Button = new Button({}, '#disable');

enable.element.onclick = () => {
    grid.toolbarModule.enableItems(['Grid_Collapse', 'Grid_Expand'], true);// enable toolbar items.
};

disable.element.onclick = () => {
    grid.toolbarModule.enableItems(['Grid_Collapse', 'Grid_Expand'], false);// disable toolbar items.
};

function clickHandler(args: ClickEventArgs): void {
    if (args.item.id === 'Grid_Collapse') { // grid_Collapse is component id + '_' + toolbar item name.
        grid.groupModule.collapseAll();
    }
    if (args.item.id === 'Grid_Expand') {
        grid.groupModule.expandAll();
    }
}

```

{% endtab %}

## Add toolbar at the bottom of Grid

You can add the Grid toolbar component at the bottom of Grid using the ['created'](../../api/grid/#created) event.

{% tab template="grid/toolbar-bottom", es5Template="toolbarbottom" %}

```typescript
import { Grid, Toolbar } from '@syncfusion/ej2-grids';
import { data } from './datasource.ts';

Grid.Inject(Toolbar);

let grid: Grid = new Grid({
    dataSource: data.slice(0,8),
    toolbar: ['Print', 'Search'],
    columns: [
        { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120, type: 'number' },
        { field: 'CustomerID', width: 140, headerText: 'Customer ID', type: 'string' },
        { field: 'Freight', headerText: 'Freight', textAlign: 'Right', width: 120, format: 'C' },
        { field: 'OrderDate', headerText: 'Order Date', textAlign: 'Right', width: 140, format: 'yMd' }
    ],
    height: 200,
    created: () => {
    let toolbar: HTMLElement = grid.element.querySelector('.e-toolbar');
    grid.element.appendChild(toolbar);
  }
});
grid.appendTo('#Grid');
```

{% endtab %}

## See Also

* [Toolbar Component](../../toolbar/getting-started/)
* [How to set overflow mode in Grid toolbar](https://www.syncfusion.com/kb/11524/how-to-set-overflow-mode-in-grid-toolbar)