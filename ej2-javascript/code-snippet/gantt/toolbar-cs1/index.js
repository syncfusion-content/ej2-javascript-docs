ej.gantt.Gantt.Inject(ej.gantt.Edit,ej.gantt.Toolbar);

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
		toolbar: ['Add','Cancel','CollapseAll','Delete','Edit','ExpandAll','NextTimeSpan','PrevTimeSpan','Search','Update', 'Indent', 'Outdent'],
	    editSettings: {
		   allowEditing:true,
		   allowAdding:true,
		   allowDeleting:true
		}
     });
ganttChart.appendTo('#Gantt');