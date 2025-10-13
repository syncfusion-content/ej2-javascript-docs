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
		rowSelecting:function(args) {
		    if(args.data.TaskID==4){
				args.cancel=true;
                message.innerText=`Row selection cancelled for Task: "${args.data.TaskName}"`;
			}
            else{
                message.innerText="";
            }
        },
    selectionSettings: {
        mode: 'Row'
    }
});
gantt.appendTo('#Gantt');