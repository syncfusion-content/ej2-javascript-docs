# Editing tasks

The editing feature can be enabled in the Gantt control by enabling the [`editSettings.allowEditing`](../api/gantt/editSettings/#allowediting) and [`editSettings.allowTaskbarEditing`](../api/gantt/editSettings/#allowtaskbarediting) properties.

The following editing options are available to update the tasks in the Gantt chart:
* Cell
* Dialog
* Taskbar
* Dependency links

## Cell editing

By setting the edit mode to auto using the [`editSettings.mode`](../api/gantt/editSettings/#mode) property, the tasks can be edited through TreeGrid cells by double-clicking.

`Note:` If the [`Edit`](../api/gantt/#editmodule) module is not injected, you cannot edit the tasks through TreeGrid cells.

The following code example shows you how to enable the cell editing in Gantt control.

{% tab template="gantt/getting-started", es5Template="enableCellEditing" %}

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
        mode: 'Auto'
    }
});

gantt.appendTo('#Gantt');

```

{% endtab %}

`Note:` When the edit mode is set to `Auto`, on performing double-click action on TreeGrid side, the cells will be changed to editable mode and on performing double-click action on chart side, the edit dialog will appear for editing the task details.

## Dialog editing

Modify the task details through the edit dialog by setting the edit [`mode`](../api/gantt/editSettings/#mode) to `Dialog`.

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
        mode: 'Dialog'
    }
});

gantt.appendTo('#Gantt');

```

{% endtab %}

`Note:` In dialog editing mode, the edit dialog appears when performing double-click action on both TreeGrid or Gantt chart sides.

## Sections or tabs in dialog

In the Gantt dialog, you can define the required tabs or editing sections using the [`addDialogFields`](../api/gantt/#adddialogfields) and [`editDialogFields`](../api/gantt/#editdialogfields) properties. Every tab is defined using the [`type`](../api/gantt/dialogFieldType/) property.

{% tab template="gantt/editing", es5Template="add-edit dialogtab" %}

```typescript

import { Gantt, Edit, Toolbar } from '@syncfusion/ej2-gantt';

let ProjectResources: Object[] = [
    { resourceId: 1, resourceName: 'Martin Tamer' },
    { resourceId: 2, resourceName: 'Rose Fuller' },
    { resourceId: 3, resourceName: 'Margaret Buchanan' },
    { resourceId: 4, resourceName: 'Fuller King' },
    { resourceId: 5, resourceName: 'Davolio Fuller' },
    { resourceId: 6, resourceName: 'Van Jack' },
    { resourceId: 7, resourceName: 'Fuller Buchanan' },
    { resourceId: 8, resourceName: 'Jack Davolio' },
    { resourceId: 9, resourceName: 'Tamer Vinet' },
    { resourceId: 10, resourceName: 'Vinet Fuller' },
    { resourceId: 11, resourceName: 'Bergs Anton' },
    { resourceId: 12, resourceName: 'Construction Supervisor' }
];

let GanttData: Object[] = [
    {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 0, Progress: 50, info: 'Measure the total property area alloted for construction' },
            {
                TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50, resources: [2, 3, 5], info: 'Obtain an engineered soil test of lot where construction is planned.' +
                    'From an engineer or company specializing in soil testing'
            },
            { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, Predecessor: "2FS", Progress: 50 },
        ]
    },
    {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            {
                TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50, resources: [4],
                isParent: false, info: 'Develop floor plans and obtain a materials list for estimations'
            },
            { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50, resources: [4, 8], info: '' },
            { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 0, Predecessor: "6SS", Progress: 50, resources: [12, 5], info: '' }
        ]
    },
];

Gantt.Inject(Edit, Toolbar);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        resourceInfo: 'resources',
        duration: 'Duration',
        progress: 'Progress',
        notes: 'info',
        dependency: 'Predecessor',
        child: 'subtasks'
    },
    toolbar: ['Add', 'Edit', 'Delete', 'Cancel'],
    editDialogFields: [
        { type: 'General', headerText: 'General' },
        { type: 'Dependency' },
        { type: 'Resources' },
        { type: 'Notes' }
    ],
    addDialogFields: [
        { type: 'General', headerText: 'General' },
        { type: 'Dependency' }
    ],
    resourceFields: {
        id: 'resourceId',
        name: 'resourceName',
    },
    resources: ProjectResources,
    editSettings: {
        allowAdding: true,
        allowEditing: true,
        mode: 'Dialog',
        allowTaskbarEditing: true
    }
});
gantt.appendTo('#Gantt');

```

{% endtab %}

## Limiting data fields in general tab

In the Gantt dialog, you can make only specific data source fields visible for editing by using the [`addDialogFields`](../api/gantt/#adddialogfields) and [`editDialogFields`](../api/gantt/#editdialogfields) properties. The data fields are defined with [`type`](../api/gantt/addDialogFieldSettings/#type) and [`fields`](../api/gantt/addDialogFieldSettings/#fields) properties.

`Note:` You can also define the custom fields in the add/edit dialog General tab using the [`fields`](../api/gantt/addDialogFieldSettings/#fields) property.

{% tab template="gantt/editing", es5Template="add-edit dialog" %}

```typescript

import { Gantt, Edit, Toolbar } from '@syncfusion/ej2-gantt';

let ProjectResources: Object[] = [
    { resourceId: 1, resourceName: 'Martin Tamer' },
    { resourceId: 2, resourceName: 'Rose Fuller' },
    { resourceId: 3, resourceName: 'Margaret Buchanan' },
    { resourceId: 4, resourceName: 'Fuller King' },
    { resourceId: 5, resourceName: 'Davolio Fuller' },
    { resourceId: 6, resourceName: 'Van Jack' },
    { resourceId: 7, resourceName: 'Fuller Buchanan' },
    { resourceId: 8, resourceName: 'Jack Davolio' },
    { resourceId: 9, resourceName: 'Tamer Vinet' },
    { resourceId: 10, resourceName: 'Vinet Fuller' },
    { resourceId: 11, resourceName: 'Bergs Anton' },
    { resourceId: 12, resourceName: 'Construction Supervisor' }
];

let GanttData: Object[] = [
    {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        isParent: true,
        subtasks: [
            { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 0, Progress: 50, isParent: false, info: 'Measure the total property area alloted for construction' },
            {
                TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50, resources: [2, 3, 5], isParent: false, info: 'Obtain an engineered soil test of lot where construction is planned.' +
                    'From an engineer or company specializing in soil testing'
            },
            { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, Predecessor: "2FS", Progress: 50, isParent: false },
        ]
    },
    {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        isParent: true,
        subtasks: [
            {
                TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50, resources: [4],
                isParent: false, info: 'Develop floor plans and obtain a materials list for estimations'
            },
            { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50, resources: [4, 8], isParent: false, info: '' },
            { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 0, Predecessor: "6SS", Progress: 50, resources: [12, 5], isParent: false, info: '' }
        ]
    },
];

Gantt.Inject(Edit, Toolbar);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        resourceInfo: 'resources',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        child: 'subtasks'
    },
    toolbar: ['Add', 'Edit', 'Delete', 'Cancel'],
    editDialogFields: [
        { type: 'General', headerText: 'General', fields: ['TaskID', 'TaskName', 'isParent'] },
        { type: 'Dependency' },
        { type: 'Resources' }
    ],
    addDialogFields: [
        { type: 'General', headerText: 'General', fields: ['TaskID', 'TaskName', 'isParent'] },
        { type: 'Resources' },
        { type: 'Dependency' }
    ],
    columns: [
        { field: 'TaskID', headerText: 'Task ID', width: '100' },
        { field: 'TaskName', headerText: 'Task Name', width: '250' },
        { field: 'isParent', headerText: 'Custom Column', width: '100' },
        { field: 'resources', headerText: 'Resources', width: '200' },
        { field: 'StartDate', headerText: 'Start Date', width: '150' },
        { field: 'Duration', headerText: 'Duration', width: '150' },
        { field: 'Progress', headerText: 'Progress', width: '150' },
    ],
    resourceFields: {
        id: 'resourceId',
        name: 'resourceName',
    },
    resources: ProjectResources,
    editSettings: {
        allowAdding: true,
        allowEditing: true,
        mode: 'Dialog',
        allowTaskbarEditing: true
    }
});
gantt.appendTo('#Gantt');

```

{% endtab %}