

import { Gantt, Reorder } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

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
        parentID: 'ParentID'
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
        console.log('columnDragStart event is Triggered');
    },
    columnDrag: () => {
        console.log('columnDrag event is Triggered');
    },
    columnDrop: () => {
        console.log('columnDrop event is Triggered');
    }
});
gantt.appendTo('#Gantt');