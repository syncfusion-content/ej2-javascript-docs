import { Gantt} from '@syncfusion/ej2-gantt';
import { GanttData } from 'datasource.ts';


let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks',
    },
    columns: [
        { field: 'TaskName', width: '150' },
        { field: 'StartDate', width: '150'},
        { field: 'Duration', width: '150' },
        { field: 'Progress', width: '150' }
    ],
    height: '450px',
    splitterSettings: {
        position: '50%'
    },
    actionFailure(args: any){
        let span = document.createElement('span');
        ((gantt.element).parentNode).insertBefore(span,(gantt).element);
        span.style.color = '#FF0000'
        span.innerHTML = args.error[0];
    }
});
gantt.appendTo('#Gantt');



