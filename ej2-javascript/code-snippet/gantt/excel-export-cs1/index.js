var clickHandler = function(args){
	if (args.item.id === 'GanttExport_excelexport') {
		var excelExportProperties = {
            dataSource: [GanttData[1]]
        };
        ganttChart.excelExport(excelExportProperties);
	}
};

ej.gantt.Gantt.Inject(ej.gantt.ExcelExport,ej.gantt.Toolbar);

var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',        
        duration: 'Duration',
        progress: 'Progress',        
        child: 'subtasks'
    },
    allowExcelExport: true,
    toolbar: ['ExcelExport'],
	toolbarClick: clickHandler
});
ganttChart.appendTo('#GanttExport');

