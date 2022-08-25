# Splitting and Merging tasks

## Splitting task at load time

To split task at load time, we can define segment details in both hierarchical and self-referential way.
Refer below link for more details.

* [Split task at load time](./data-binding/#split-task)

## Split task dynamically

The task can be splitted dynamically, either by using the context menu or dialog.

* `Dialog`: `Segments` tab is rendered in add/edit dialog, when the [`taskFields.segments`](../api/gantt/taskFields/#segments) or [`taskFields.segmentId`](../api/gantt/taskFields/#segmentId) property is mapped. Using this tab, we can split the task based on the original start and end date of a particular task.

* `Context menu`: When the [`taskFields.segments`](../api/gantt/taskFields/#segments) or [`taskFields.segmentId`](../api/gantt/taskFields/#segmentId) property is mapped and the [`enableContextMenu`](../api/gantt/#enablecontextmenu) property is enabled, `Split Task` item will be included in the context menu.

{% tab template="gantt/split-task", es5Template="splitTask"%}

```typescript

import { Gantt, Edit, Toolbar, Selection, ContextMenu } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Edit, Toolbar, Selection, ContextMenu);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: "450px",
    taskFields: {
        id: "TaskID",
        name: "TaskName",
        startDate: "StartDate",
        endDate: "EndDate",
        duration: "Duration",
        progress: "Progress",
        child: "subtasks",
        segments: "Segments"
    },
    toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
    editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    },
    enableContextMenu: true
});

gantt.appendTo('#Gantt');

```

{% endtab %}

## Merge tasks

The splitted tasks can be merged either by using the `Merge Task` item of the Context menu or by using the dialog. We can also merge the tasks, by simply dragging the segments together in the UI.

## Limitations of Split tasks

1. Parent and milestone tasks cannot be split into segments.
2. The task must have a width greater than the timeline unit cell in order to be split.
3. Split task is not supported in the `Resource view`.