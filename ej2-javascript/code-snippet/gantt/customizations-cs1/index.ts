import { Gantt } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    rowHeight: 60,
    milestoneTemplate: '#MilestoneTemplate',
    parentTaskbarTemplate: '#ParentTaskbarTemplate',
    taskbarTemplate: '#TaskbarTemplate'
});

gantt.appendTo('#Gantt');