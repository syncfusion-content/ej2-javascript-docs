
var ganttChart = new ej.gantt.Gantt({
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
		{ field: 'StartDate', width: '150' },
		{ field: 'Duration', width: '150' },
		{ field: 'Progress', width: '150' }
	],
	height:'450px',
	splitterSettings:{
		position: '50%'
	},
	actionFailure: (args) => {
		let span = document.createElement('span');
		((ganttChart.element).parentNode).insertBefore(span,(ganttChart).element);
		span.style.color = '#FF0000'
		span.innerHTML = args.error[0];
	}
});
ganttChart.appendTo('#Gantt');


