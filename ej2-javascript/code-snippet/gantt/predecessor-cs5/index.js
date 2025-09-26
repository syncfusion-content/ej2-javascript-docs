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
			parentID: 'ParentID'
        },
		editSettings:{
			allowTaskbarEditing:true
		},
		actionBegin:function(args){
	       if (args.requestType == "validateLinkedTask") {
              args.validateMode.preserveLinkWithEditing = false;
            }
		}
});
ganttChart.appendTo('#Gantt');