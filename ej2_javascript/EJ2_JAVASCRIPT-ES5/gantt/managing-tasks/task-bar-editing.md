# Taskbar editing

Modify the task details through user interaction such as resizing and dragging the taskbar by enabling the [`allowTaskbarEditing`](../api/gantt/editSettings/#allowtaskbarediting) property.

{% tab template="gantt/getting-started", es5Template="enableTaskbarEditing" %}

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
        child: 'subtasks'
    },
    editSettings: {
        allowTaskbarEditing: true
    }
});
gantt.appendTo('#Gantt');


```

{% endtab %}

## Prevent editing for specific tasks

On taskbar edit action, the [`taskbarEditing`](../api/gantt/#taskbarediting) event will be triggered. You can prevent the taskbar from editing using the [`taskbarEditing`](../api/gantt/#taskbarediting) event. This can be done by setting cancel property of [`taskbarEditing`](../api/gantt/#taskbarediting) event argument to true. And we can hide the taskbar editing indicators like taskbar resizer, progress resizer and connector points by using [`queryTaskbarInfo`](../api/gantt/#querytaskbarinfo) event.  The following code example shows how to achieve this.

{% tab template="gantt/editing", es5Template="preventTaskbarEditing"%}

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
        child: 'subtasks'
    },
    taskbarEditing: function (args: any) {
        if (args.data.TaskID == 4) // We can't edit Task Id 4
            args.cancel = true;
    },
    queryTaskbarInfo: function (args) {
        if (args.data.TaskID == 6) {
            args.taskbarElement.className += ' e-preventEdit' // Taskbar editing indicators are hidden
        }
    },
    editSettings: {
        allowTaskbarEditing: true
    }
});
gantt.appendTo('#Gantt');

```

{% endtab %}

## Task dependencies

In the Gantt control, you can update the dependencies between the tasks and link the tasks interactively. The task dependencies can be mapped from the data source using the [`dependency`](../api/gantt/taskFields/#dependency) property.

You can update the task dependencies using the following ways:

* Mouse interactions: Using connector points in the taskbar, you can perform drag and drop action to create task dependency links.
* Edit dialog: Create or remove the task dependencies using the `Dependency` tab in the edit dialog.
* Cell editing: Create or remove the task links using cell editing.

The following code example demonstrates how to enable task dependency editing in the Gantt chart using the [`editSettings`](../api/gantt/editSettings/) property.

{% tab template="gantt/editing", es5Template="edit-dialog"%}

```typescript

import { Gantt, Edit } from '@syncfusion/ej2-gantt';

let GanttData: Object[] = [
    {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        isParent: true,
        subtasks: [
            { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 0, Progress: 50 },
            { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
            { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, Predecessor: "2FS", Progress: 50 },
        ]
    },
    {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        isParent: true,
        subtasks: [
            { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
            { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
            { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 0, Predecessor: "6SS", Progress: 50 }
        ]
    },
];

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
        dependency: 'Predecessor',
        child: 'subtasks'
    },
    editSettings: {
        allowTaskbarEditing: true,
        allowEditing: true,
        mode: 'Auto'
    }
});

gantt.appendTo('#Gantt');

```

{% endtab %}

![Alt text](images/user-interaction.png)

Updating with mouse interaction action

![Alt text](images/cell-edit.png)

Updating with cell edit

![Alt text](images/dialog.png)

Updating with dialog

`Note:` When the edit mode is set to `Auto`, on performing double-click action on TreeGrid side, the cells will be changed to editable mode and on performing double-click action on chart side, the edit dialog will appear for editing the task details.

## Update task values using method

Tasks' value can be dynamically updated by using the [`updateRecordById`](../api/gantt/#updaterecordbyid) method. You can call this method on any custom action. The following code example shows how to use this method to update a task.

>NOTE: Using the [`updateRecordById`](../api/gantt/#updaterecordbyid) method, you cannot update the task ID value.

{% tab template="gantt/updateRecordById", es5Template="updateRecordById"%}

```typescript

import { Gantt, Edit } from '@syncfusion/ej2-gantt';
import { Button } from '@syncfusion/ej2-buttons';
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
        child: 'subtasks'
    },
    editSettings: {
        allowEditing: true
    }
});

gantt.appendTo('#Gantt');

let updateBtn: Button = new Button();
updateBtn.appendTo('#updateRecord');

document.getElementById('updateRecord').addEventListener('click', () => {
    let data: Object = {
        TaskID: 3,
        TaskName: 'Updated by index value',
        StartDate: new Date('04/02/2019'),
        Duration: 4,
        Progress: 50
    };
    gantt.updateRecordByID(data);
});

```

{% endtab %}

## Cell edit type and its params

The [`columns.editType`](../api/gantt/column/#edittype) is used to define the edit type for any particular column.
You can set the [`columns.editType`](../api/gantt/column/#edittype) based on data type of the column.

* `numericedit` - [`NumericTextBox`](../numerictextbox) component for integers, double, and decimal data types.

* `defaultedit` - [`TextBox`](../textbox) component for string data type.

* `dropdownedit` - [`DropDownList`](../drop-down-list) component to show all unique values related to that field.

* `booleanedit` - [`CheckBox`](../check-box) component for boolean data type.

* `datepickeredit` - [`DatePicker`](../datepicker) component for date data type.

* `datetimepickeredit` - [`DateTimePicker`](../datetimepicker) component for date time data type.

Also, you can customize the behavior of the editor component through the [`columns.edit.params`](../api/gantt/column/#edit).

The following table describes cell edit type component and their corresponding edit params of the column.

Edit Type |Component |Example
-----|-----|-----
`numericedit` | [`NumericTextBox`](../numerictextbox) | params: { decimals: 2, value: 5 }
`dropdownedit` | [`DropDownList`](../drop-down-list) | params: { value: 'Germany' }
`booleanedit` | [`Checkbox`](../check-box) | params: { checked: true}
`datepickeredit` | [`DatePicker`](../datepicker) | params: { format:'dd.MM.yyyy' }
`datetimepickeredit` | [`DateTimePicker`](../datetimepicker) | params: { value: new Date() }

{% tab template="gantt/managingTasks", es5Template="editParams"%}

```typescript

import { Gantt, Edit } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Edit);
function durationFormat(field: string, data: Object, column: Object): string {
    return data[field];
}
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
        allowEditing: true
    },
    toolbar: ['Edit'],
    columns: [
        { field: 'TaskID', headerText: 'Task ID' },
        { field: 'TaskName', headerText: 'Task Name' },
        { field: 'StartDate', headerText: 'Start Date'  },
        { field: 'Duration', headerText: 'Duration', editType:'numericedit', edit: { params: { min:1 } }, valueAccessor: durationFormat },
        { field: 'Progress', headerText: 'Progress', edit: { params: { showSpinButton: false }  } },
    ],
});

gantt.appendTo('#Gantt');

```

{% endtab %}

## Cell Edit Template

The cell edit template is used to create a custom component for a particular column by invoking the following functions:

* `create` - It is used to create the element at the time of initialization.

* `write` - It is used to create the custom component or assign default value at the time of editing.

* `read` - It is used to read the value from the component at the time of save.

* `destroy` - It is used to destroy the component.

{% tab template="gantt/managingTasks", es5Template="cellEditTemplate"%}

```typescript

import { Gantt, Edit } from '@syncfusion/ej2-gantt';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Edit);
let elem: HTMLElement;
let dropdownlistObj: DropDownList;

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
        allowEditing: true
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID' },
        {
            field: 'TaskName', headerText: 'Task Name',
            edit: {
                create: () => {
                    elem = document.createElement('input');
                    return elem;
                },
                read: () => {
                   return dropdownlistObj.value;
                },
                destroy: () => {
                    dropdownlistObj.destroy();
                },
                write: (args: Object) => {
                    dropdownlistObj = new DropDownList({
                        dataSource: gantt.treeGrid.grid.dataSource,
                        fields: { value: 'TaskName' },
                        value: args.rowData[args.column.field],
                        floatLabelType: 'Auto',
                    });
                    dropdownlistObj.appendTo(elem);
                }
            }
        },
        { field: 'StartDate', headerText: 'Start Date' },
        { field: 'Duration', headerText: 'Duration' },
        { field: 'Progress', headerText: 'Progress' },
    ],

});

gantt.appendTo('#Gantt');

```

{% endtab %}

## Disable editing for particular column

You can disable editing for particular columns, by using the [`columns.allowEditing`](../api/gantt/column/#allowediting) property.

In the following demo, editing is disabled for the `TaskName` column.

{% tab template="gantt/managingTasks",es5Template="disableedit" %}

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
        child: 'subtasks'
    },
    editSettings: {
        allowEditing: true
    },
    toolbar: ['Edit'],
    columns: [
        { field: 'TaskID', headerText: 'Task ID' },
        { field: 'TaskName', headerText: 'Task Name', allowEditing: false },
        { field: 'StartDate', headerText: 'Start Date', },
        { field: 'Duration', headerText: 'Duration' },
        { field: 'Progress', headerText: 'Progress'  },
    ],
});

gantt.appendTo('#Gantt');

```

{% endtab %}