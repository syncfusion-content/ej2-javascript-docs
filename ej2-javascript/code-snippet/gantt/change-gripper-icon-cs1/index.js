ej.gantt.Gantt.Inject(ej.gantt.Edit, ej.gantt.Sort, ej.gantt.Filter);

var ganttChart = new ej.gantt.Gantt({
        dataSource: GanttData,
		height:'450px',
		taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
			resourceInfo: 'resources',
            duration: 'Duration',
            progress: 'Progress',
			dependency: 'Predecessor',
            parentID: 'ParentID'
        },
		columns: [
            { field: 'TaskID', headerText: 'Task ID', width: '100' },
            { field: 'TaskName', headerText: 'Task Name', width: '250' },
            { field: 'StartDate', headerText: 'Start Date', width: '150' },
			{ field: 'resources', headerText: 'Resources', width: '200' },
            { field: 'Duration', headerText: 'Duration', width: '150' },
            { field: 'Progress', headerText: 'Progress', width: '150' },
        ],
		resourceFields: {
            id: 'resourceId',
            name: 'resourceName',
        },
        resources: projectResources,
		allowSorting: true,
		editSettings: {
		   allowEditing:true,
           allowTaskbarEditing:true
         },
		allowFiltering: true
});
ganttChart.appendTo('#Gantt');