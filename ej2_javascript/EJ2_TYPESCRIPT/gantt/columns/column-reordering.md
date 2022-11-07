
# Column reordering

The column reordering can be done by dragging a column header from one index to another index within the TreeGrid. To enable reordering, set the [`allowReordering`](../api/gantt/#allowreordering) property to true.

To use the column reordering feature, inject the `Reorder` module to the Gantt control.

{% tab template="gantt/columns", es5Template="reOrdering" %}

```typescript

import { Gantt, Reorder } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Reorder);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    allowReordering: true,
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
        columnIndex: 5
    }
});
gantt.appendTo('#Gantt');

```

{% endtab %}

> You can disable the reordering of a particular column by setting the [`columns.allowReordering`](../api/gantt/column/#allowreordering) property to `false`.

## Reorder multiple columns

Multiple columns can be reordered at a time by using the [`reorderColumns`](../api/gantt/#reordercolumns) method.

{% tab template="gantt/multipleReorder", es5Template="reOrderMultiple" %}

```typescript
import { Gantt, Reorder } from '@syncfusion/ej2-gantt';
import { Button } from '@syncfusion/ej2-buttons';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Reorder);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    allowReordering: true,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    },
    height: '450px',
    splitterSettings: {
        position: '100%'
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
        { field: 'TaskName', headerText: 'Task Name', width: '150' },
        { field: 'StartDate', headerText: 'Start Date', width: '150' },
        { field: 'Duration', headerText: 'Duration', width: '150' },
        { field: 'Progress', headerText: 'Progress', width: '150' }
    ]
});
gantt.appendTo('#Gantt');

let reorderMultipleCols: Button = new Button();
reorderMultipleCols.appendTo('#reorderMultipleCols');

document.getElementById('reorderMultipleCols').addEventListener('click', () => {
    gantt.reorderColumns('TaskName', 'Progress');
});

```

{% endtab %}

## Reorder Events

During the reorder action, the gantt component triggers the below three events.

1. The [`columnDragStart`](../api/gantt/#columndragstart) event triggers when column header element drag (move) starts.
2. The [`columnDrag`](../api/gantt/#columndrag) event triggers when column header element is dragged (moved) continuously.
3. The [`columnDrop`](../api/gantt/#columndrop) event triggers when a column header element is dropped on the target column.

{% tab template="gantt/reorder-events", es5Template="reorder-events" %}

```typescript
import { Gantt, Reorder } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Reorder);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    allowReordering: true,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    },
    splitterSettings: {
        columnIndex: 4
    },
    height: '450px',
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
        { field: 'TaskName', headerText: 'Task Name', width: '150' },
        { field: 'StartDate', headerText: 'Start Date', width: '150' },
        { field: 'Duration', headerText: 'Duration', width: '150' },
        { field: 'Progress', headerText: 'Progress', width: '150' }
    ],
    columnDragStart: () => {
        alert('columnDragStart event is Triggered');
    },
    columnDrag: () => {
        alert('columnDrag event is Triggered');
    },
    columnDrop: () => {
        alert('columnDrop event is Triggered');
    }
});
gantt.appendTo('#Gantt');

```

{% endtab %}