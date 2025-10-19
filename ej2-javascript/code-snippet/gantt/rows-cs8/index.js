var ganttChart = new ej.gantt.Gantt({
        dataSource: projectNewData,
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
        selectionSettings: {
            type: 'Multiple'
        },
		allowRowDragAndDrop: true
});
ganttChart.appendTo('#Gantt');