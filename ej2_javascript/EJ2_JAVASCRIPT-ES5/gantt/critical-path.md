---
Title: "Critical Path"
Component: "Gantt"
Description: "Learn how to render the critical path in the Essential JS 2 Gantt control."
---

# Critical Path

The critical path in a project is indicated by a single task or a series of tasks. If a task in critical path is delayed, the entire project will be delayed. A task is considered to be critical if any delay to this task would affect the project end date.

The critical path can be enabled in Gantt by using the built-in toolbar button or [enableCriticalPath](../api/gantt/#enablecriticalpath) property.

The following code example shows how to display the critical path in the Gantt control:

{% tab template="gantt/criticalpath", es5Template="criticalpath" %}

```typescript

import { Gantt, CriticalPath, Toolbar, Edit } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

Gantt.Inject(CriticalPath, Toolbar, Edit);

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
    enableCriticalPath: true,
    editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    },
    toolbar: ['CriticalPath'],
});
gantt.appendTo('#Gantt');

```

{% endtab %}

## Customize taskbar in critical path

The taskbar in critical path can be customized by using [queryTaskbarInfo](../api/gantt/#querytaskbarinfo) event and [isCritical](../api/gantt/iGanttData/#iscritical) property of row [data](../api/gantt/iQueryTaskbarInfoEventArgs/#data) in the event argument.

The following code example shows how to customize the critical path taskbar in the Gantt control:

{% tab template="gantt/customizeCriticalPath", es5Template="customizecriticalpath" %}

```typescript

import { Gantt, CriticalPath, Toolbar, Edit } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

Gantt.Inject(CriticalPath, Toolbar, Edit);

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
    enableCriticalPath: true,
    editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    },
    toolbar: ['CriticalPath'],
    queryTaskbarInfo(args: any) {
        if (args.data.isCritical && !args.data.hasChildRecords) {
            args.taskbarBgColor = 'rgb(242, 210, 189)';
            args.progressBarBgColor = 'rgb(201, 169, 166)';
        }
    }
});
gantt.appendTo('#Gantt');

```

{% endtab %}
