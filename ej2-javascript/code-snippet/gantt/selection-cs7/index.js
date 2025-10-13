ej.gantt.Gantt.Inject(ej.gantt.Selection);

var message = document.getElementById('message');
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
		rowSelecting:function(args) {
		    if(args.data.TaskID==4){
				args.cancel=true;
                message.innerText=`Row selection cancelled for Task: "${args.data.TaskName}"`;
			}
            else{
                message.innerText="";
            }
        },
		selectionSettings: {
            mode: 'Row'
        }
    });
ganttChart.appendTo('#Gantt');