---
title: "Managing Tasks"
component: "Gantt"
description: "Learn how to perform CRUD operations in various edit modes, and use different cell editors in the Essential JS 2 Gantt control."
---

# Managing Tasks

The Gantt component has options to dynamically insert, delete, and update tasks in the project. The primary key column is necessary to manage the tasks and perform CRUD operations in Gantt. To define the primary key, set the [`columns.isPrimaryKey`](../api/gantt/column/#isprimarykey) property to `true` in the particular column.

To use CRUD, inject the [`Edit`](../api/gantt/#editmodule) module into the Gantt control.

{% tab template="gantt/getting-started", es5Template="enableNormalEditing" %}

```typescript

import { Gantt, Edit } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Edit);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks',
    },
    editSettings: {
        allowEditing: true,
        allowAdding: true,
        allowTaskbarEditing: true,
    }
});

gantt.appendTo('#Gantt');

```

{% endtab %}

## Read-only Gantt

In Gantt, all create, update, delete operations can be disabled by set `readOnly` property as `true`. The following sample demonstrates, render Gantt chart as read only.

{% tab template="gantt/editing", es5Template="readOnly"%}

```typescript

import { Gantt, Edit, Toolbar, ContextMenu, Resize, Sort, Selection} from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Edit, Toolbar, ContextMenu, Resize, Sort, Selection);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks',
    },
    toolbar: ['Add', 'Cancel', 'CollapseAll', 'Delete', 'Edit', 'ExpandAll', 'NextTimeSpan', 'PrevTimeSpan', 'Search', 'Update', 'Indent', 'Outdent'],
    enableContextMenu: true,
    editSettings: {
        allowEditing: true,
        allowAdding: true,
        allowDeleting: true,
        allowTaskbarEditing: true
    },
    allowSorting: true,
    allowResizing: true,
    readOnly: true
});

gantt.appendTo('#Gantt');

```

{% endtab %}

## Troubleshoot: Editing works only when primary key column is defined

Editing feature requires a primary key column for CRUD operations.
While defining columns in Gantt using the [`columns`](../api/gantt/#columns) property, it is mandatory that any one of the columns, must be a primary column. By default, the [`id`](../api/gantt/taskFields/#id) column will be the primary key column.  If [`id`](../api/gantt/taskFields/#id) column is not defined, we need to enable [`isPrimaryKey`](../api/gantt/column/#isprimarykey) for any one of the columns defined in the [`columns`](../api/gantt/#columns) property.

## Open new task dialog with default values

You can set default values when new task dialog opens using [actionBegin](../api/gantt/#actionbegin) event when `requestType` is `beforeOpenAddDialog`.

{% tab template="gantt/rows", es5Template="new-task-dialog-default-values" %}

```typescript

import { Gantt, Toolbar, Edit, ActionBeginArgs } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Toolbar, Edit);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    },
    editSettings: {
        allowAdding: true
    },
    actionBegin : (args: ActionBeginArgs) => {
        if (args.requestType == 'beforeOpenAddDialog') {
            args.rowData.TaskName = 'Gantt';
            args.rowData.Progress = 70;
            args.rowData.ganttProperties.taskName = 'Gantt';
            args.rowData.ganttProperties.progress = 70;
        }
    },
    toolbar: ['Add']
});
gantt.appendTo('#Gantt');

```

{% endtab %}