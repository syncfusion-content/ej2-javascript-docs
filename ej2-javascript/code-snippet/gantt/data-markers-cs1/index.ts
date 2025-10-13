import { Gantt } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

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
        parentID: 'ParentID',
        indicators: 'Indicators'
    },
});
gantt.appendTo('#Gantt');