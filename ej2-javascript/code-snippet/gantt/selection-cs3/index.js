ej.gantt.Gantt.Inject(ej.gantt.Selection);

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
	    cellSelecting: function (args) {
			if (args.data.TaskID === 4 && args.cellIndex.cellIndex === 1) {
				args.cancel = true;
				message.innerText=`Cell selection cancelled for Task: "${args.data.TaskName}"`;
			}
			else{
				message.innerText = "";
			}
		},
		selectionSettings: {
            mode: 'Cell'
        }
    });
ganttChart.appendTo('#Gantt');