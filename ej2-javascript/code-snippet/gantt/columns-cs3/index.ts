import { Gantt, Resize } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

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
        parentID: 'ParentID'
    },
    splitterSettings: {
        columnIndex: 4
    },
    height: '450px'
});
gantt.appendTo('#Gantt');