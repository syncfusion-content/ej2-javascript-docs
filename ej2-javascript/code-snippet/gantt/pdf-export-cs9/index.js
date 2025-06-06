var clickHandler = function(args){
   if (args.item.id === 'GanttExport_pdfexport') {
     ganttChart.pdfExport();
   }
};

var pdfQueryCellInfo = function(args){
    if(args.column.field == 'Progress'){
        if(args.value < 50) {
            args.style.backgroundColor = new ej.pdfexport.PdfColor(240, 128, 128);
        } else {
            args.style.backgroundColor = new ej.pdfexport.PdfColor(165, 105, 189);
        }
    }
};

var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskId',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID:'ParentId'
    },
    columns: [
        { field: 'TaskId'},
        { field: 'TaskName'},
        { field: 'StartDate'},
        { field: 'Duration', visible: false},
        { field: 'Progress'}
    ],
    allowPdfExport: true,
    toolbar: ['PdfExport'],
    toolbarClick: clickHandler,
    pdfQueryCellInfo: pdfQueryCellInfo
});
ganttChart.appendTo('#GanttExport');

