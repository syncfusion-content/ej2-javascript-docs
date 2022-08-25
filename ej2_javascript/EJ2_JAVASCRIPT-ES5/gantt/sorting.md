---
title: "Sorting"
component: "Gantt"
description: "Learn how to order the records in the Essential JS 2 Gantt control."
---

# Sorting

Sorting enables you to sort data in the ascending or descending order. To sort a column, click the column header.

To sort multiple columns, press and hold the CTRL key and click the column header. You can clear sorting of any one of the multi-sorted columns by pressing and holding the SHIFT key and clicking the specific column header.

To enable sorting in the Gantt control, set the [`allowSorting`](../api/gantt/#allowsorting) property to true. Sorting options can be configured through the [`sortSettings`](../api/gantt/sortSettings/) property.

To sort, inject the [`Sort`](../api/gantt/#sortmodule) module into the Gantt control.

{% tab template= "gantt/getting-started", es5Template="ganttSample" %}

```typescript

import { Gantt, Sort } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Sort);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    allowSorting: true,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    }
});
gantt.appendTo('#Gantt');

```

{% endtab %}

> * Gantt columns are sorted in the ascending order. If you click the already sorted column, the sort direction toggles.
> * To disable sorting for a particular column, set the [`columns.allowSorting`](../api/gantt/column/#allowsorting) property to false.

## Sorting column on Gantt initialization

The Gantt control can be rendered with sorted columns initially, and this can be achieved by using the [`sortSettings`](../api/gantt/sortSettings/) property. You can add columns that are sorted initially in the [`sortSettings.columns`](../api/gantt/sortSettings/#columns) collection defined with [`field`](../api/gantt/sortDescriptorModel/#field) and [`direction`](../api/gantt/sortDescriptorModel/#direction) properties. The following code example shows how to add the sorted column to Gantt initialization.

{% tab template= "gantt/sorting", es5Template="initialLoadSorting" %}

```typescript

import { Gantt, Sort } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Sort);

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
    sortSettings: { columns: [{ field: 'TaskID', direction: 'Ascending' }, { field: 'TaskName', direction: 'Ascending' }] },
    allowSorting: true
});
gantt.appendTo('#Gantt');

```

{% endtab %}

## Sorting column dynamically

Columns in the Gantt control can be sorted dynamically using the [`sortColumn`](../api/gantt/#sortcolumn) method. The following code example demonstrates how to invoke the [`sortColumn`](../api/gantt/#sortcolumn) method by clicking the custom button.

{% tab template= "gantt/sortingColumns", es5Template="ganttSample" %}

```typescript

import { Gantt, Sort } from '@syncfusion/ej2-gantt';
import { Button } from '@syncfusion/ej2-buttons';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Sort);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    allowSorting: true,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    }
});
gantt.appendTo('#Gantt');

let sortBtn: Button = new Button();
sortBtn.appendTo('#sortColumn');

document.getElementById('sortColumn').addEventListener('click', () => {
    gantt.sortModule.sortColumn('TaskName', "Descending", false)
});

```

{% endtab %}

## Clear all the sorted columns dynamically

In the Gantt control, you can clear all the sorted columns and return to previous position using the [`clearSorting`](../api/gantt/#clearsorting) public method. The following code snippet shows how to clear all the sorted columns by clicking the custom button.

{% tab template= "gantt/clearSorting", es5Template="clearSorting" %}

```typescript

import { Gantt, Sort } from '@syncfusion/ej2-gantt';
import { Button } from '@syncfusion/ej2-buttons';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Sort);

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
    sortSettings: { columns: [{ field: 'TaskID', direction: 'Ascending' }, { field: 'TaskName', direction: 'Ascending' }] },
    allowSorting: true
});
gantt.appendTo('#Gantt');

let clrBtn: Button = new Button();
clrBtn.appendTo('#clearSorting');

document.getElementById('clearSorting').addEventListener('click', () => {
    gantt.clearSorting();
});

```

{% endtab %}

## Sorting events

During the sort action, the Gantt control triggers two events. The [`actionBegin`](../api/gantt/#actionbegin) event triggers before the sort action starts, and the [`actionComplete`](../api/gantt/#actioncomplete) event triggers after the sort action is completed.

{% tab template= "gantt/sorting", es5Template="sortingEvents" %}

```typescript

import { Gantt, Sort } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';
import { SortEventArgs } from '@syncfusion/ej2-grids';

Gantt.Inject(Sort);

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
    allowSorting: true,
    actionBegin: actionHandler,
    actionComplete: actionHandler
});
gantt.appendTo('#Gantt');

function actionHandler(args: SortEventArgs) {
    alert(args.requestType + ' ' + args.type);
}

```

{% endtab %}

> The `args.requestType` is the current action name. For example, for sorting the `args.requestType`, value is **sorting**.

## Sorting Custom Columns

In Gantt, you can sort custom columns of different types like string, numeric, etc.,
By adding the custom column in the column collection,
you can perform initial sort using the `sortSettings` or
you can also sort the column dynamically by a button click.

The following code snippets explains how to achieve this.

{% tab template= "gantt/sortingCustomColumns", es5Template="sortingCustomColumns" %}

```typescript

import { Gantt, Sort } from '@syncfusion/ej2-gantt';
import { Button } from '@syncfusion/ej2-buttons';

Gantt.Inject(Sort);

let GanttData: Object[]  = [
        {
            TaskID: 1,
            TaskName: 'Project Initiation',
            StartDate: new Date('04/02/2019'),
            EndDate: new Date('04/21/2019'),
            subtasks: [
                { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50, /*CustomColumn: 'BCustomColumn'*/ CustomColumn: '2' },
                { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50, /*CustomColumn: 'BCustomColumn'*/ CustomColumn: '3'  },
                { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50, /*CustomColumn: 'BCustomColumn'*/ CustomColumn: '4' },
            ]
        },
        {
            TaskID: 5,
            TaskName: 'Project Estimation',
            StartDate: new Date('04/02/2019'),
            EndDate: new Date('04/21/2019'),
            subtasks: [
                { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50, /*CustomColumn: 'BCustomColumn'*/ CustomColumn: '6' },
                { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50, /*CustomColumn: 'BCustomColumn'*/ CustomColumn: '1' },
                { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50, /*CustomColumn: 'BCustomColumn'*/ CustomColumn: '5' }
            ]
        },
    ];

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    allowSorting: true,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID' },
        { field: 'Progress', headerText: 'Progress' },
        { field: 'TaskName', headerText: 'Task Name' },
        { field: 'StartDate', headerText: 'Start Date' },
        { field: 'Duration', headerText: 'Duration' },
        { field: 'CustomColumn', headerText: 'CustomColumn' }
    ]
});
gantt.appendTo('#Gantt');

let sortBtn: Button = new Button();
sortBtn.appendTo('#sortColumn');

document.getElementById('sortColumn').addEventListener('click', () => {
    gantt.sortModule.sortColumn('CustomColumn', "Ascending", false)
});

```

{% endtab %}
