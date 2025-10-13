import { Gantt, Edit } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';
Gantt.Inject(Edit);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        dependency: 'Predecessor',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    editSettings: {
        allowTaskbarEditing: true
    },
    actionBegin: (args: any) => {
        if (args.requestType == "validateLinkedTask") {
            args.validateMode.respectLink = true;
        }
    }
});

gantt.appendTo('#Gantt');