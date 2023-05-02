var hostUrl = 'https://ej2services.syncfusion.com/production/web-services/';
    var GanttData = new ej.data.DataManager({
        url: hostUrl + 'api/GanttData',
        adaptor: new ej.data.WebApiAdaptor(),
        crossDomain: true
    });
var ganttChart = new ej.gantt.Gantt({
        dataSource: GanttData,
		height:'450px',
		taskFields: {
            id: 'TaskId',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            dependency: 'Predecessor',
            child: 'SubTasks'
        }
});
ganttChart.appendTo('#Gantt');

