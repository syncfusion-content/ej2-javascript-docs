ej.gantt.Gantt.Inject(ej.gantt.Filter, ej.gantt.Sort, ej.gantt.Resize);
var ganttChart = new ej.gantt.Gantt({
        dataSource: GanttData,
		height:'450px',
        showColumnMenu: true,
        allowFiltering: true,
        allowResizing: true,
        allowSorting: true,
		taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
			duration: 'Duration',
            progress: 'Progress',
			parentID: 'ParentID'
        },
        splitterSettings: {
            position: '100%'
        },
    columns: [
        { field: 'TaskID', headerText: 'Task ID' },
        { field: 'TaskName', headerText: 'Task Name' },
        { field: 'Progress', headerText: 'Progress' },
        { field: 'StartDate', headerText: 'Start Date' },
        { field: 'Duration', headerText: 'Duration' }
    ],
     columnMenuOpen: function (args) {
        for (var item of args.items) {
            if (item.text === 'Filter' && args.column.field === 'TaskName') {
                item.hide = true;
            } else {
                item.hide = false;
            }
        }
    },
});

ganttChart.appendTo('#Gantt');