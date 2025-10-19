import { Gantt, Selection, Toolbar, Edit, PdfExport } from '@syncfusion/ej2-gantt';
Gantt.Inject(Selection, Toolbar, Edit, PdfExport);
import { GanttData } from './datasource.ts';
import { PdfColor } from '@syncfusion/ej2-pdf-export';


let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    taskFields: {
        id: "TaskID",
        name: "TaskName",
        startDate: "StartDate",
        endDate: "EndDate",
        duration: "Duration",
        progress: "Progress",
        parentID: 'ParentID',
        segments: "Segments"
    },

    editSettings: {
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    },
    toolbar: ['PdfExport'],

    toolbarClick: (args?: any) => {
        if (args.item.id === 'GanttExport_pdfexport') {
            gantt.pdfExport();
        }
    },
    columns: [
        { field: 'TaskID', headerText: 'Task ID' },
        { field: 'TaskName', headerText: 'Task Name' },
        { field: 'StartDate', headerText: 'Start Date' },
        { field: 'EndDate', headerText: 'End Date' },
    ],
    allowPdfExport: true,
    gridLines: "Both",
    showColumnMenu: false,
    queryTaskbarInfo: (args: any) => {
        if (args.data.taskData.Segments) {
            const segmentIndex = args.taskbarElement.dataset.segmentIndex;
            if (Number(segmentIndex) === 1) {
                args.taskbarBgColor = 'red';
                args.taskbarBorderColor = 'black';
                args.progressBarBgColor = "green";
            }
        }
    },
    height: "450px",
    pdfQueryTaskbarInfo: (args: any) => {
        if (args.taskbar.taskSegmentStyles) {
            args.taskbar.taskSegmentStyles[1].taskColor = new PdfColor(255, 0, 0);
            args.taskbar.taskSegmentStyles[1].progressColor = new PdfColor(0, 128, 0);
            args.taskbar.taskSegmentStyles[1].taskBorderColor = new PdfColor(0, 0, 0);
        }
    },
});
gantt.appendTo('#GanttExport');