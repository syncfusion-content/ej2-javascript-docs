ej.gantt.Gantt.Inject(ej.gantt.Toolbar);

var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    resources: resourceCollection,
    addDialogFields: [
        { type: 'General', headerText: 'General add',fields: ["TaskID", "TaskName", "newInput"] },
        { type: 'Dependency'},
        { type: 'Resources'} , 
        { type: 'Notes' },
        {type:"Segments"}
    ],
    editDialogFields: [
        { type: 'General', headerText: 'General edit', fields: ["TaskID", "TaskName", "newInput"] },
        {type: 'Dependency', },
        { type: 'Resources'},
        {type: 'Notes'},
        {type: "Segments"}
    ],
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        resourceInfo: 'resources',
        work: 'work',
        child: 'subtasks',
        segments: 'Segments',
        notes:"note",
    },
    editSettings: {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    },
    toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'],
		
});
ganttChart.appendTo('#Gantt');















