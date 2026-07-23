import { Gantt, Edit } from '@syncfusion/ej2-gantt';
import { Button } from '@syncfusion/ej2-buttons';
import { GanttData } from './datasource.ts';

Gantt.Inject(Edit);

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
    editSettings: {
        allowEditing: true
    },
    splitterSettings: {
        columnIndex: 3
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '80' },
        { field: 'TaskName', headerText: 'Task Name', width: '180' },
        { field: 'Custom', headerText: 'Custom', width: '220' },
        { field: 'StartDate', headerText: 'Start Date', width: '110' },
        { field: 'Duration', headerText: 'Duration', width: '100' },
        { field: 'Progress', headerText: 'Progress', width: '100' }
    ]
});

gantt.appendTo('#Gantt');

let updateBtn: Button = new Button();
updateBtn.appendTo('#updateRecord');

document.getElementById('updateRecord').addEventListener('click', () => {
    let data: Object = {
        TaskID: 3,
        Custom: 'Dynamically custom column value updated'
    };
    gantt.updateRecordByID(data);
});