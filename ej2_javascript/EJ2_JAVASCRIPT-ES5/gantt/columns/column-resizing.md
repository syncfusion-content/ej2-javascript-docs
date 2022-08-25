# Column resizing

The column width can be resized by clicking and dragging the right edge of the column header. While dragging, the width of the column will be resized immediately. Each column can be auto resized by double-clicking the right edge of the column header to fit the width of that column based on the widest cell content. To resize the column, set the [`allowResizing`](../api/gantt/#allowresizing) property to true. The following code example shows how to enable the column resize feature in the Gantt control.

To resize the column, inject the `Resize` module into the Gantt control.

{% tab template="gantt/columns", es5Template="resizeColumns" %}

```typescript

import { Gantt, Resize } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Resize);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    allowResizing: true,
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
    height: '450px'
});
gantt.appendTo('#Gantt');

```

{% endtab %}

> You can disable resizing for a particular column by setting the [`columns.allowResizing`](../api/gantt/column/#allowresizing) to `false`.

## Defining minimum and maximum column width

The column resizing can be restricted between minimum and maximum widths by defining the [`columns->minWidth`](../api/gantt/column/#minwidth) and [`columns->maxWidth`](../api/gantt/column/#maxwidth) properties.

In the following example, the minimum and maximum widths are defined for the `Duration`, and `Task Name` columns.

{% tab template="gantt/columns", es5Template="minMaxWidth" %}

```typescript

import { Gantt, Resize } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Resize);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    allowResizing: true,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    },
    splitterSettings: {
        columnIndex: 5
    },
    height: '450px',
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
        { field: 'TaskName', headerText: 'Task Name', width: '200', minWidth: '150', maxWidth: '250', },
        { field: 'StartDate', headerText: 'Start Date', width: '150' },
        { field: 'Duration', headerText: 'Duration', width: '100', minWidth: '50', maxWidth: '200' },
        { field: 'Progress', headerText: 'Progress', width: '150' }
    ]

});
gantt.appendTo('#Gantt');

```

{% endtab %}