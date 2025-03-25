import { Gantt, Toolbar, PdfExport, Selection } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';
import { PdfColor } from '@syncfusion/ej2-pdf-export';
Gantt.Inject(Toolbar, PdfExport, Selection);

var clickHandler = function(args){
    if (args.item.id === 'GanttExport_pdfexport') {
        gantt.pdfExport();
    }
 };

 var pdfQueryCellInfo = function(args){
    if(args.column.field == 'Progress'){
     if(args.value < 50) {
         args.style.backgroundColor = new PdfColor(240, 128, 128);
       } else {
         args.style.backgroundColor = new PdfColor(165, 105, 189);
       }
     }
 };

let gantt: Gantt = new Gantt({
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
        { field: 'TaskName', visible: false},
        { field: 'StartDate'},
        { field: 'Duration'},
        { field: 'Progress'}
    ],
    allowPdfExport: true,
    toolbar: ['PdfExport'],
    toolbarClick: clickHandler,
    pdfQueryCellInfo: pdfQueryCellInfo
});
gantt.appendTo('#GanttExport');



