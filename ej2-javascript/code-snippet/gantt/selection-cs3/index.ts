import { Gantt, Selection } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

Gantt.Inject(Selection);

var message = document.getElementById('message') as HTMLElement;
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
    cellSelecting: function (args: any) {
        if (args.data.TaskID === 4 && args.cellIndex.cellIndex === 1) {
            args.cancel = true;
            message.innerText=`Cell selection cancelled for Task: "${args.data.TaskName}"`;
        }
        else{
            message.innerText = "";
        }
    },
    selectionSettings: {
        mode: 'Cell'
    }
});
gantt.appendTo('#Gantt');
