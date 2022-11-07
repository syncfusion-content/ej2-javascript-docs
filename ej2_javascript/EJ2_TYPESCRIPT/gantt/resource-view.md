---
title: "Resource View"
component: "Gantt Chart"
description: "Learn how to specify the view type for a project in the Essential JS 2 Gantt control."
---

# Resource Breakdown View

The resource breakdown view is used to visualize the tasks assigned to each resource in hierarchy manner. Resources are displayed as parents and all the tasks assigned to each resource are displayed as its child records. It can be initialized by setting the [`viewType`](../api/gantt/#viewtype) property to `ResourceView`.

## Unassigned task

A task not assigned to any one of the resource are termed as unassigned tasks. The unassigned tasks are grouped with a name as `Unassigned Task` and displayed at the bottom of Gantt data collection . It is validated at load time during Gantt record creation by default based on a task `resourceInfo` mapping property in the Gantt chart data source. If the resource is assigned to the unassigned grouped tasks, the task will be moved as child to the respective resource.

## Resource task

A task assigned to one or more resources are termed as resource task and it is added as child task to the respective resource. Already assigned task can also be shared or moved with other resources by adding a resource name to the task or removing resource name from the task by cell or dialog editing.

>Note: Currently there is no support for unscheduled task in Resource view Gantt.

{% tab template="gantt/resource-view",es5Template="resource-view" %}

```typescript

import { Gantt, Toolbar, Edit, Selection } from '@syncfusion/ej2-gantt';
import { GanttData, resourceCollection } from 'datasource.ts';

Gantt.Inject(Toolbar, Edit, Selection);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    resources: resourceCollection,
    viewType: 'ResourceView',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        resourceInfo: 'resources',
        work: 'work',
        child: 'subtasks'
    },
    resourceFields: {
        id: 'resourceId',
        name: 'resourceName',
        unit: 'resourceUnit',
        group: 'resourceGroup'
    },
    editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    },
    columns: [
        { field: 'TaskID', visible: false },
        { field: 'TaskName', headerText: 'Name', width: 250 },
        { field: 'work', headerText: 'Work' },
        { field: 'Progress' },
        { field: 'resourceGroup', headerText: 'Group' },
        { field: 'StartDate' },
        { field: 'Duration' },
    ],
    toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
    labelSettings: {
        rightLabel: 'resources'
    },
    splitterSettings: {
        columnIndex: 3
    },
    allowResizing: true,
    allowSelection: true,
    highlightWeekends: true,
    treeColumnIndex: 1,
    height: '450px',
    projectStartDate: new Date('03/28/2019'),
    projectEndDate: new Date('05/18/2019')
});
gantt.appendTo('#Gantt');

```

{% endtab %}

## Resource OverAllocation

When a resource is assigned too much of work to complete within a day of resource’s available time then it is called as overallocation.

The available working time of resources for completing the task in a day will be calculated based on the `dayWorkingTime` property and `resource unit`.

The range of overallocation dates can be highlighted by a square bracket. It can be enabled by setting the `showOverallocation` property as `true`. The following code example demonstrates how to hide or show the over allocation by clicking the custom button.

>Note: By default, the `showOverAllocation` property value is `false`.

{% tab template="gantt/resource-view",es5Template="showhideoverallocation" %}

```typescript

import { Gantt, Toolbar, Edit, Selection } from '@syncfusion/ej2-gantt';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { overAllocationData, resources } from 'datasource.ts';

Gantt.Inject(Toolbar, Edit, Selection);

let gantt: Gantt = new Gantt({
    dataSource: overAllocationData,
    resources: resources,
    viewType: 'ResourceView',
    showOverAllocation: true,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        resourceInfo: 'resources',
        work: 'work',
        child: 'subtasks'
    },
    resourceFields: {
        id: 'resourceId',
        name: 'resourceName',
        unit: 'resourceUnit',
        group: 'resourceGroup'
    },
    editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    },
    columns: [
        { field: 'TaskID', visible: false },
        { field: 'TaskName', headerText: 'Name', width: 250 },
        { field: 'work', headerText: 'Work' },
        { field: 'Progress' },
        { field: 'resourceGroup', headerText: 'Group' },
        { field: 'StartDate' },
        { field: 'Duration' },
    ],
    toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll',
            { text: 'Show/Hide Overallocation', tooltipText: 'Show/Hide Overallocation', id: 'showhidebar' }],
    toolbarClick: (args: ClickEventArgs) => {
                if (args.item.id === 'showhidebar') {
                    gantt.showOverAllocation = gantt.showOverAllocation ? false : true;
                }
            },
    labelSettings: {
        rightLabel: 'resources',
        taskLabel: 'Progress'
    },
    projectStartDate: new Date('03/28/2019'),
    projectEndDate: new Date('05/18/2019')
});
gantt.appendTo('#Gantt');

```

{% endtab %}

## Resource Multi Taskbar

To visualize multiple tasks assigned to each resource in a row when the records are in the collapsed state. It can be enabled by settings the `enableMultiTaskbar` property value as `true`.

The collapse or expand action of a resource record can be achieved only by using the tree grid side arrow icon. Because it will be disabled on chart side action for this support.

When a resource has multiple tasks scheduled on the same date, then the tasks will be overlapped one another. Taskbar editing is also possible to change the task scheduling on the collapsed state.

>Note: By default, the `enableMultiTaskbar` property value is `false`.

{% tab template="gantt/resource-view",es5Template="multitaskbar" %}

```typescript

import { Gantt, Toolbar, Edit, Selection } from '@syncfusion/ej2-gantt';
import { overAllocationData, resources } from 'datasource.ts';

Gantt.Inject(Toolbar, Edit, Selection);

let gantt: Gantt = new Gantt({
    dataSource: overAllocationData,
    resources: resources,
    viewType: 'ResourceView',
    showOverAllocation: true,
    enableMultiTaskbar: true,
    collapseAllParentTasks: true,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        resourceInfo: 'resources',
        work: 'work',
        expandState: 'isExpand',
        child: 'subtasks'
    },
    resourceFields: {
        id: 'resourceId',
        name: 'resourceName',
        unit: 'resourceUnit',
        group: 'resourceGroup'
    },
    editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    },
    columns: [
        { field: 'TaskID' },
        { field: 'TaskName', headerText: 'Name', width: 250 },
        { field: 'work', headerText: 'Work' },
        { field: 'Progress' },
        { field: 'resourceGroup', headerText: 'Group' },
        { field: 'StartDate' },
        { field: 'Duration' },
    ],
    toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
    labelSettings: {
        rightLabel: 'resources',
        taskLabel: 'TaskName'
    },
    projectStartDate: new Date('03/28/2019'),
    projectEndDate: new Date('05/18/2019')
});
gantt.appendTo('#Gantt');

```

{% endtab %}