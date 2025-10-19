ej.gantt.Gantt.Inject(ej.gantt.Toolbar, ej.gantt.Edit);
var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID',
        verified: 'verified'
    },
    splitterSettings: {
        columnIndex: 5
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID' },
        { field: 'TaskName', headerText: 'Task Name' },
        { field: 'Progress', headerText: 'Progress' },
        { field: 'StartDate', headerText: 'Start Date' },
        { field: 'verified', headerText: 'Verified', width: 150, displayAsCheckBox: true, type: 'boolean' },
        { field: 'Duration', headerText: 'Duration' }
    ]
});
ganttChart.appendTo('#Gantt');

