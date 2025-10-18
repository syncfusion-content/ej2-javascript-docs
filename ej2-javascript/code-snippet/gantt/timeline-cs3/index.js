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
		timelineSettings: {
		    timelineViewMode:'Year',
			timelineUnitSize:70
		}
});
ganttChart.appendTo('#Gantt');