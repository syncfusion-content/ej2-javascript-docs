# Column menu

The column menu has options to integrate features like sorting, filtering, and autofit. It will show a menu with the integrated feature when users click the Multiple icon of the column. To enable the column menu, you should set the [`showColumnMenu`](../api/gantt/#showcolumnmenu) property to true.
The default items are displayed in the following table:

| Item | Description |
|-----|-----|
| `SortAscending` | Sort the current column in ascending order. |
| `SortDescending` | Sort the current column in descending order. |
| `AutoFit` | Auto fit the current column. |
| `AutoFitAll` | Auto fit all columns. |
| `Filter` | Show the filter option as given in the `filterSettings.type` property. |

{% tab template="gantt/columns", es5Template="columnMenu" %}

```typescript

import { Gantt, Filter, Sort, Resize, ColumnMenu } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Filter, Sort, Resize, ColumnMenu);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    showColumnMenu: true,
    allowFiltering: true,
    allowResizing: true,
    allowSorting: true,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks',
    },
    splitterSettings: {
        position: '100%'
    },
    height: '450px'
});

gantt.appendTo('#Gantt');

```

{% endtab %}

> You can disable the column menu for a particular column by setting the `columns.showColumnMenu` to `false`.

## Column menu events

During the resizing action, the gantt component triggers the below two events.

1. The [`columnMenuOpen`](../api/gantt/#columnmenuopen) event triggers before the column menu opens.
2. The [`columnMenuClick`](../api/gantt/#columnmenuclick) event triggers when the user clicks the column menu of the gantt.

{% tab template="gantt/columnMenu-events", es5Template="col-menu-events" %}

```typescript
import { Gantt, Filter, Sort, Resize, ColumnMenu } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Filter, Sort, Resize, ColumnMenu);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    showColumnMenu: true,
    allowFiltering: true,
    allowResizing: true,
    allowSorting: true,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks',
    },
    splitterSettings: {
        position: '100%'
    },
    height: '450px',
    columnMenuOpen: () => {
        alert('columnMenuOpen event is Triggered');
    },
    columnMenuClick: () => {
        alert('columnMenuClick event is Triggered');
    }
});

gantt.appendTo('#Gantt');


```

{% endtab %}

## Custom Column Menu Item

Custom column menu items can be added by defining the [`columnMenuItems`](../api/gantt/#columnmenuitems).
Actions for this customized items can be defined in the [`columnMenuClick`](../api/gantt/#columnmenuclick) event.

{% tab template="gantt/columnMenu-custom-item" , es5Template="col-cust-item" %}

```typescript

import { Gantt, Filter, Sort, Resize, ColumnMenu } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';
import { MenuEventArgs } from '@syncfusion/ej2-navigations';

Gantt.Inject(Filter, Sort, Resize, ColumnMenu);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    showColumnMenu: true,
    allowFiltering: true,
    allowResizing: true,
    allowSorting: true,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks',
    },
    columnMenuItems:[{text:'Clear Sorting', id:'ganttclearsorting'}],
    columnMenuClick: function(args: MenuEventArgs){
        if(args.item.id === 'ganttclearsorting'){
            gantt.clearSorting();
        }
    },
    sortSettings:{
        columns:[{direction: "Ascending", field: "TaskName"}]
    },
    splitterSettings: {
        position: '75%'
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID'},
        { field: 'TaskName', headerText: 'Task Name' },
        { field: 'StartDate', headerText: 'Start Date', width: '150' },
        { field: 'Duration', headerText: 'Duration', width: '100' },
        { field: 'Progress', headerText: 'Progress', width: '150' }
    ],
    height: '450px'
});

gantt.appendTo('#Gantt');

```

{% endtab %}

## Customize menu items for particular columns

Sometimes, you have a scenario that to hide an item from column menu for particular columns. In that case, you need to define the [`columnMenuOpenEventArgs.hide`](../api/grid/columnMenuOpenEventArgs) as true in the [`columnMenuOpen`](../api/gantt/#columnmenuopen) event.

The following sample, **Filter** item was hidden in column menu when opens for the **Task Name** column.

{% tab template="gantt/colMenu-customAction", es5Template="colMenu-custom-action" %}

```typescript
import { Gantt, Filter, Sort, Resize, ColumnMenu } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';
import { ColumnMenuOpenEventArgs, ColumnMenuItemModel } from '@syncfusion/ej2-grids';

Gantt.Inject(Filter, Sort, Resize, ColumnMenu);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    showColumnMenu: true,
    allowFiltering: true,
    allowResizing: true,
    allowSorting: true,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks',
    },
    splitterSettings: {
        position: '100%'
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID'},
        { field: 'TaskName', headerText: 'Task Name' },
        { field: 'StartDate', headerText: 'Start Date', width: '150' },
        { field: 'Duration', headerText: 'Duration', width: '100' },
        { field: 'Progress', headerText: 'Progress', width: '150' }
    ],
    height: '450px',
    columnMenuOpen: function (args: ColumnMenuOpenEventArgs) {
        for (let item of args.items) {
            if (item.text === 'Filter' && args.column.field === 'TaskName') {
                (item as ColumnMenuItemModel).hide = true;
            } else {
                (item as ColumnMenuItemModel).hide = false;
            }
        }
    },
});

gantt.appendTo('#Gantt');


```

{% endtab %}