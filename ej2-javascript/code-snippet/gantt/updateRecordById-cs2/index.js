ej.gantt.Gantt.Inject(ej.gantt.Edit);

var ganttChart = new ej.gantt.Gantt({
         dataSource: GanttData,
		 height:'450px',
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
ganttChart.appendTo('#Gantt');

var updateBtn= new ej.buttons.Button();
updateBtn.appendTo('#updateRecord');

document.getElementById('updateRecord').addEventListener('click', () => {
    var data = { 
        TaskID: 3,
        Custom: 'Dynamically custom column value updated'
    };
	ganttChart.updateRecordByID(data);
	  
});