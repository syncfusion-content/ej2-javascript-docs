var ganttChart = new ej.gantt.Gantt({
         dataSource: GanttData,
		 height:'450px',
		 taskFields: {
            id: 'TaskID',
            name: 'TaskName',
		    startDate: 'StartDate',
			dependency:'Predecessor',
            duration: 'Duration',
            progress: 'Progress',
			parentID: 'ParentID',
        }
	 });
ganttChart.appendTo('#Gantt');