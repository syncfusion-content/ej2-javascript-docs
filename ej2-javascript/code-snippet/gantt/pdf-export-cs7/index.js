var clickHandler = function(args){
   if (args.item.id === 'GanttExport_pdfexport') {
        var exportProperties = {
            showPredecessorLines: true
        };
        ganttChart.pdfExport(exportProperties);
   }
};

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
    allowPdfExport: true,
    toolbar: ['PdfExport'],
    toolbarClick: clickHandler
});
ganttChart.appendTo('#GanttExport');

