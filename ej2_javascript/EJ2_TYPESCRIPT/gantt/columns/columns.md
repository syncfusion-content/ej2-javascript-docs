---
title: "Columns"
component: "Gantt"
description: "Documentation on column reordering, resizing, header templates (custom header content), and column templates (custom cell content) in the Essential JS 2 Gantt control."
---

# Columns

The column displays information from a bound data source, and you can edit the values of column to update the task details through TreeGrid. The operations such as sorting, filtering, and searching can be performed based on column definitions. To display a Gantt column, the [`field`](../api/gantt/column/#field) property should be mapped from the data source to the column.

> If the column [`field`](../api/gantt/column/#field) is not specified in the data source, the column values will be empty.

The [`treeColumnIndex`](../../api/gantt/#treecolumnindex) property is used to define the expander column in the Gantt control to expand and collapse the child rows.

## Defining columns

Using the [`columns`](../api/gantt/#columns) property, you can define the columns in Gantt. If the columns are not defined, then the default columns will be rendered based on the mapped data source fields in the [`taskFields`](../api/gantt/taskFields/) property. Refer to the following code example for defining the columns in Gantt along with their widths.

 {% tab template="gantt/columns", es5Template="definingColumns" %}

```typescript
import { Gantt } from '@syncfusion/ej2-gantt';

let GanttData: Object[]  = [
        {
            TaskID: 1,
            TaskName: 'Project Initiation',
            StartDate: new Date('04/02/2019'),
            EndDate: new Date('04/21/2019'),
            subtasks: [
                { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
                { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50  },
                { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
            ]
        },
        {
            TaskID: 5,
            TaskName: 'Project Estimation',
            StartDate: new Date('04/02/2019'),
            EndDate: new Date('04/21/2019'),
            subtasks: [
                { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
                { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
                { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 }
            ]
        },
    ];

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks',
    },
    height: '450px',
    splitterSettings: {
        columnIndex: 2
    },
    columns: [
        { field: 'TaskID', width: '150' },
        { field: 'TaskName', width: '250' }
    ]
});
gantt.appendTo('#Gantt');

```

{% endtab %}

## Custom column header

The column header text can be defined using the [`headerText`](../api/gantt/column/#headertext) property, and you can customize the column headers using the [`headerTemplate`](../api/gantt/column/#headertemplate) property.

{% tab template="gantt/headerTemplate", es5Template="headerTemplate" %}

```typescript
import { Gantt } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks',
    },
    height: '450px',
    splitterSettings: {
        columnIndex: 4
    },
    columns: [
        { field: 'TaskName', headerTemplate: '#projectName', width: '150' },
        { field: 'StartDate', headerTemplate: '#dateTemplate', width: '150' },
        { field: 'Duration', headerTemplate: '#durationTemplate', headerText: 'Duration', width: '150' },
        { field: 'Progress', headerTemplate: '#progressTemplate', headerText: 'Progress', width: '150' },
    ]
});
gantt.appendTo('#Gantt');

```

{% endtab %}

## Format

To format the cell values based on a specific culture, use the [`columns.format`](../api/gantt/column/#format) property. The Gantt control uses the [`Internationalization`](../../common/internationalization/) library to format `number` and `date` values.

{% tab template="gantt/columns", es5Template="formatColumn" %}

```typescript

import { Gantt } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    },
    splitterSettings: {
        columnIndex: 3
    },
    height: '450px',
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
        { field: 'Progress', headerText: 'Progress', width: '150', format: 'C' },
        { field: 'TaskName', headerText: 'Task Name', width: '150' },
        { field: 'StartDate', headerText: 'Start Date', width: '150' },
        { field: 'Duration', headerText: 'Duration', width: '150' }
    ]
});
gantt.appendTo('#Gantt');

```

{% endtab %}

> By default, the number and date values are formatted in `en-US` culture.

### Number formatting

The number or integer values can be formatted using the following format strings.

Format |Description |Remarks
-----|-----
N | Denotes numeric type. | The numeric format is followed by an integer value like N2 or N3, which denotes the number of precisions to be allowed.
C | Denotes currency type. | The currency format is followed by an integer value like C2 or C3, which denotes the number of precisions to be allowed.
P | Denotes percentage type | The percentage format expects the input value to be in the range of 0 to 100. For example, the cell value `0.2` is formatted as `20%`. The percentage format is followed by an integer value like P2, P3, which denotes the number of precisions to be allowed.

### Date formatting

You can format date values either using the built-in date format string or a custom format string.

For the built-in date format, you can specify the [`columns.format`](../api/gantt/column/#format) property as string (example: `yMd`).

You can also use the custom format string to format the date values. Some of the custom formats and the formatted date values are given in the following table.

Format | Formatted value
-----|-----
{ type:'date', format:'dd/MM/yyyy' } | 04/07/2019
{ type:'date', format:'dd.MM.yyyy' } | 04.07.2019
{ type:'date', skeleton:'short' } | 7/4/19
{ type: 'dateTime', format: 'dd/MM/yyyy hh:mm a' } | 04/07/2019 12:00 AM
{ type: 'dateTime', format: 'MM/dd/yyyy hh:mm:ss a' } | 07/04/2019 12:00:00 AM

{% tab template="gantt/columns", es5Template="formatColumns" %}

```typescript

import { Gantt } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    },
    splitterSettings: {
        columnIndex: 3
    },
    height: '450px',
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
        { field: 'TaskName', headerText: 'Task Name', width: '150' },
        { field: 'Progress', headerText: 'Progress', width: '150', format: 'C' },
        { field: 'StartDate', headerText: 'Start Date', width: '150', format: { format: 'dd/MM/yyyy', type: 'date' } },
        { field: 'Duration', headerText: 'Duration', width: '150' }
    ]
});
gantt.appendTo('#Gantt');

```

{% endtab %}