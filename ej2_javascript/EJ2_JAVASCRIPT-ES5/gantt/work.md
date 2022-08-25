---
title: "Work"
component: "Gantt"
description: "Learn how to map the work field to the tasks in the Essential JS 2 Gantt control."
---

# Work

The work is the total hours required to complete a task. Work can be mapped from the data source field using the property [`taskFields.work`](../api/gantt/taskFields/#work). Work can be measured in
`Hour`, `Day`, `Minute`. By default, work is measured in `Hour` and it can be changed, by using the property [`workUnit`](../api/gantt/#viewtype).

>Note: When the work field is mapped from the data source, the default task type will be `FixedWork`.

{% tab template="gantt/work",es5Template="work" %}

```typescript

import { Gantt, Toolbar, Edit, Selection } from '@syncfusion/ej2-gantt';
import { GanttData, resourceResources } from 'datasource.ts';

Gantt.Inject(Toolbar, Edit, Selection);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
      taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                duration: 'Duration',
                progress: 'Progress',
                resourceInfo: 'resources',
                work: 'Work',
                child: 'subtasks'
            },
            editSettings: {
                allowAdding: true,
                allowEditing: true,
                allowDeleting: true,
                allowTaskbarEditing: true,
                showDeleteConfirmDialog: true
            },
            resources: resourceResources,
            resourceFields: {
                id: 'resourceId',
                name: 'resourceName',
                unit: 'Unit'
            },
            workUnit: 'Hour',
            toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
            allowSelection: true,
            height: '450px',
            treeColumnIndex: 1,
            columns: [
                { field: 'TaskID', visible: false },
                { field: 'TaskName', headerText: 'Task Name', width: '180' },
                { field: 'resources', headerText: 'Resources', width: '160' },
                { field: 'Work', width: '110' },
                { field: 'Duration', width: '100' },
            ],
});
gantt.appendTo('#Gantt');

```

{% endtab %}

## Task type

The work, duration and resource unit fields of a task depends upon each other and will change automatically on editing any one of these fields. But we can also set these field’s values as constant using the [`taskType`](../api/gantt/#tasktype) property. `FixedUnit` is the default [`taskType`](../api/gantt/#tasktype). The following values can be set to the [`taskType`](../api/gantt/#tasktype)
 property,

* `FixedDuration` - Duration task field will remain constant while updating resource unit or work field.
* `FixedWork` - Work field will remain constant while updating resource unit or duration fields.
* `FixedUnit` - Resource units will remain constant while updating duration or work field.

{% tab template="gantt/work",es5Template="tasktype" %}

```typescript

import { Gantt, Toolbar, Edit, Selection } from '@syncfusion/ej2-gantt';
import { GanttData, resourceResources } from 'datasource.ts';

Gantt.Inject(Toolbar, Edit, Selection);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
      taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                duration: 'Duration',
                progress: 'Progress',
                resourceInfo: 'resources',
                work: 'Work',
                child: 'subtasks'
            },
            editSettings: {
                allowAdding: true,
                allowEditing: true,
                allowDeleting: true,
                allowTaskbarEditing: true,
                showDeleteConfirmDialog: true
            },
            resources: resourceResources,
            resourceFields: {
                id: 'resourceId',
                name: 'resourceName',
                unit: 'Unit'
            },
            workUnit: 'Hour',
            taskType: 'FixedWork',
            toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
            allowSelection: true,
            height: '450px',
            treeColumnIndex: 1,
            columns: [
                { field: 'TaskID', visible: false },
                { field: 'TaskName', headerText: 'Task Name', width: '180' },
                { field: 'resources', headerText: 'Resources', width: '160' },
                { field: 'Work', width: '110' },
                { field: 'Duration', width: '100' },
                { field: 'taskType', headerText: 'Task Type', width: '110' }
            ],
});
gantt.appendTo('#Gantt');

```

{% endtab %}

Following table explains how the work, duration and resource unit fields will gets updated on changing any of the fields

Task Type | Changes in Duration | Changes in work | Changes in Resource Units
-----|-----|-----|-----
Fixed Duration | Work field updates | Resource unit updates| Work field updates
Fixed Work | Resource unit updates. Note: For manually scheduled task work will update.| Duration field updates. Note: For manually scheduled task resource unit updates. |Duration will update. Note: For manually scheduled task work field updates.
Fixed Unit | Work field updates | Duration field updates. Note: For manually scheduled task resource unit updates.| Duration will update. Note: For manually scheduled task work field updates.

>Note: 1. Fixed Unit is the default taskType in Gantt. 2. The above calculations are not applicable for Milestones.