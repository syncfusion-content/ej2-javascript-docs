# Column Spanning

The gantt has option to span the adjacent cells. You need to define the [`colSpan`](../api/gantt/queryCellInfoEventArgs/#colspan) attribute to span cells in the [`QueryCellInfo`](../api/gantt/queryCellInfoEventArgs) event.

In the following demo, **Work 1**  cells have been spanned.

{% tab template="gantt/column-span", es5Template="column-span" %}

```typescript
import { Gantt, Edit, Selection, QueryCellInfoEventArgs } from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';

Gantt.Inject(Edit, Selection);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    gridLines: 'Both',
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        work1: 'work1',
        work2: 'work2',
        progress: 'Progress',
        child: 'subtasks'
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID' },
        { field: 'TaskName', headerText: 'Task Name' },
        { field: 'work1', headerText: 'Work 1' },
        { field: 'work2', headerText: 'Work 2' },
        { field: 'StartDate', headerText: 'Start Date' },
        { field: 'Duration', headerText: 'Duration' },
        { field: 'Progress', headerText: 'Progress'}
    ],
    splitterSettings: {
        columnIndex: 5
    },
    queryCellInfo: function (args: QueryCellInfoEventArgs) {
        switch(args.data.TaskID) {
            case 1:
            if ((args.column.field == 'work1') && (args.data.taskData.work1 == 'support')) {
                args.colSpan = 2;
            }
            break;
            case 2:
            if ((args.column.field == 'work1') && (args.data.taskData.work1 == 'support')) {
                args.colSpan = 2;
            }
            break;
            case 3:
            if ((args.column.field == 'work1') && (args.data.taskData.work1 == 'support')) {
                args.colSpan = 2;
            }
            break;
            case 4:
            if ((args.column.field == 'work1') && (args.data.taskData.work1 == 'support')) {
                args.colSpan = 2;
            }
            break;
            case 5  :
            if ((args.column.field == 'work1') && (args.data.taskData.work1 == 'support')) {
                args.colSpan = 2;
            }
            break;
            case 7:
            if ((args.column.field == 'work1') && (args.data.taskData.work1 == 'support')) {
                args.colSpan = 2;
            }
            break;
        }
    }
});

gantt.appendTo('#Gantt');

```

{% endtab %}