var ganttChart = new ej.gantt.Gantt({
         dataSource: ProjectNewData,
		 height:'450px',
		 taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            parentID: 'parentID'
        },
        editSettings: {
            allowAdding: true,
            allowEditing: true,
            allowDeleting: true,
            allowTaskbarEditing: true,
            showDeleteConfirmDialog: true
        },
        allowTaskbarDragAndDrop: true,
        allowRowDragAndDrop: true
	});
ganttChart.appendTo('#Gantt');