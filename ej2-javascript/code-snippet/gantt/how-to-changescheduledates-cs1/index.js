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
        }
});
ganttChart.appendTo('#Gantt');

var dateBtn= new ej.buttons.Button();
dateBtn.appendTo('#updateSchedule');

document.getElementById('updateSchedule').addEventListener('click', function() {
    ganttChart.updateProjectDates(new Date('01/10/2019'),new Date('06/20/2019'),true);
});
