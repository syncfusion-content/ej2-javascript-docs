import { Gantt, Toolbar, PdfExport, Selection, PdfQueryTimelineCellInfoEventArgs } from '@syncfusion/ej2-gantt';
import { ClickEventArgs } from '@syncfusion/ej2-navigations/src/toolbar/toolbar';
import { PdfColor } from '@syncfusion/ej2-pdf-export';
import { GanttData } from './datasource.ts';

Gantt.Inject(Toolbar, PdfExport, Selection);

let clickHandler: EmitType<ClickEventArgs> = (args: ClickEventArgs) => {
    if (args.item.id === 'GanttExport_pdfexport') {
        gantt.pdfExport();
    }
};

let pdfQueryTimelineCellInfo: EmitType<PdfQueryTimelineCellInfoEventArgs> = (args: PdfQueryTimelineCellInfoEventArgs) => {
    args.timelineCell.backgroundColor= new PdfColor(240, 248, 255);
};

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    allowPdfExport: true,
    toolbar: ['PdfExport'],
    toolbarClick: clickHandler,
    pdfQueryTimelineCellInfo: pdfQueryTimelineCellInfo
});
gantt.appendTo('#GanttExport');