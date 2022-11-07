---
title: "Context Menu"
component: "Gantt"
description: "Learn how to use the context menu and add custom context menu items in the Essential JS 2 Gantt control."
---

# Context menu

The Gantt control allows you to perform quick actions by using context menu. When right-clicking the context menu, the context menu options are shown. To enable this feature, set the [`enableContextMenu`](../api/gantt/#enablecontextmenu) to true. The default context menu options are enabled using the [`editSettings`](../api/gantt/#editsettings) property. The context menu options can be customized using the [`contextMenuItems`](../api/gantt/#contextmenuitems) property.

To use the context menu, inject the [`ContextMenu`](../api/gantt/#contextmodule) module into the Gantt control.

The default items are listed in the following table.

Items| Description
----|----
`AutoFit`|  Auto-fits the current column.
`AutoFitAll` | Auto-fits all columns.
`SortAscending` | Sorts the current column in ascending order.
`SortDescending` | Sorts the current column in descending order.
`TaskInformation`|  Edits the current task.
`Add` | Adds a new row to the Gantt.
`Indent` | Indent the selected record to one level.
`Outdent` | Outdent the selected record to one level.
`DeleteTask` | Deletes the current task.
`Save` | Saves the edited task.
`Cancel` | Cancels the edited task.
`DeleteDependency` | Deletes the current dependency task link.
`Convert` | Converts current task to milestone or vice-versa.
{% tab template="gantt/contextMenu", es5Template="contextMenu" %}

```typescript
import { Gantt, Resize, Sort, ContextMenu, Edit, Selection } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

Gantt.Inject(Resize, Sort, Edit, ContextMenu, Selection);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        dependency: 'Predecessor',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    },
    enableContextMenu: true,
    editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true
    }
});

gantt.appendTo('#ContextMenu');


```

{% endtab %}

## Custom context menu items

The custom context menu items can be added by defining the [`contextMenuItems`](../api/gantt/#contextmenuitems) as a collection of [`contextMenuItemModel`](../api/grid/contextMenuItemModel/).
Actions for the customized items can be defined in the [`contextMenuClick`](../api/gantt/#contextmenuclick) event and the visibility of customized items can be defined in the [`contextMenuOpen`](../api/gantt/#contextmenuopen) event.

To create custom context menu items for header area, define the target property as `.e-gridheader`.

The following sample shows context menu item for parent rows to expand or collapse child rows in the content area and a context menu item to hide columns in the header area.

{% tab template="gantt/customContextMenu", es5Template="customContextMenu" %}

```typescript

import { Gantt, Selection, Toolbar, Edit, Resize, Sort, ContextMenu, ContextMenuClickEventArgs, ContextMenuOpenEventArgs, ContextMenuItem} from '@syncfusion/ej2-gantt';
import { ContextMenuItemModel } from '@syncfusion/ej2-grids';
import { GanttData } from './datasource.ts';

Gantt.Inject(Selection, Toolbar,  Edit, Resize, Sort, ContextMenu, );

let contextMenuItems: (string | ContextMenuItemModel)[] = ['AutoFitAll', 'AutoFit', 'TaskInformation', 'DeleteTask', 'Save', 'Cancel',
        'SortAscending', 'SortDescending', 'Add', 'DeleteDependency', 'Convert',
        { text: 'Collapse the Row', target: '.e-content', id: 'collapserow' } as ContextMenuItemModel,
        { text: 'Expand the Row', target: '.e-content', id: 'expandrow' } as ContextMenuItemModel,
        { text: 'Hide Column', target: '.e-gridheader', id: 'hidecols' } as ContextMenuItemModel,
    ];

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency:'Predecessor',
        child: 'subtasks'
    },
    editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true
    },
    enableContextMenu: true,
    allowSorting: true,
    allowResizing: true,
    contextMenuItems: contextMenuItems as ContextMenuItem[],
    contextMenuClick: (args?: ContextMenuClickEventArgs) => {
        let record = args.rowData;
        if (args.item.id === 'collapserow') {
            gantt.collapseByID(Number(record.ganttProperties.taskId));
        }
        if (args.item.id === 'expandrow') {
            gantt.expandByID(Number(record.ganttProperties.taskId));
        }
        if (args.item.id === 'hidecols') {
            gantt.hideColumn(args.column.headerText);
        }
    },
    contextMenuOpen: (args?: ContextMenuOpenEventArgs) => {
        let record = args.rowData;
        if (args.type !== 'Header') {
            if (!record.hasChildRecords) {
                args.hideItems.push('Collapse the Row');
                args.hideItems.push('Expand the Row');
            } else {
                if(record.expanded){
                    args.hideItems.push("Expand the Row");
                } else {
                    args.hideItems.push("Collapse the Row");
                }
            }
        }
    }
});

gantt.appendTo('#CustomContextMenu');

```

{% endtab %}

> You can show an specific item in context menu for header/content area in the Gantt control by defining the `target` property.