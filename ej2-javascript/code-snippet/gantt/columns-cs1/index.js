ej.gantt.Gantt.Inject(ej.gantt.Filter, ej.gantt.Sort, ej.gantt.Resize);

var ganttChart = new ej.gantt.Gantt({
         dataSource: GanttData,
		 showColumnMenu:true,
		 allowResizing: true,
		 allowFiltering: true,
         allowSorting: true,
		 splitterSettings:{
		  position:'100%'
		},
         taskFields: {
            id: 'TaskID',
            name: 'TaskName',
		    startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
			child: 'subtasks',
        },
		height:'450px'
});
ganttChart.appendTo('#Gantt');


