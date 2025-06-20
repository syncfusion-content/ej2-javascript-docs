var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
	height:'450px',
	taskFields: {
        id: 'TaskId',
        name: 'TaskName',
        startDate: 'StartDate',
		duration: 'Duration',
        progress: 'Progress',
		parentID: 'ParentId'
    },
	labelSettings: {
        leftLabel: 'TaskId',
		rightLabel: 'Task Name: ${taskData.TaskName}',
		taskLabel: '${Progress}%'
    },
    projectStartDate: new Date('03/31/2019'),
    projectEndDate: new Date('04/19/2019'),
});
ganttChart.appendTo('#Gantt');














