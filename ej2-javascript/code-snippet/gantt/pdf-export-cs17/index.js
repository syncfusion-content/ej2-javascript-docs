
var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    taskFields: {
        id: "TaskID",
        name: "TaskName",
        startDate: "StartDate",
        endDate: "EndDate",
        duration: "Duration",
        progress: "Progress",
        child: "subtasks",
        segments: "Segments"
    },

    editSettings: {
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    },
    toolbar: ['PdfExport'],

    toolbarClick: (args) => {
        if (args.item.id === 'GanttExport_pdfexport') {
            ganttChart.pdfExport();
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
    queryTaskbarInfo: (args) => {
        if (args.data.taskData.Segments) {
            var segmentIndex = args.taskbarElement.dataset.segmentIndex;
            if (Number(segmentIndex) === 1) {
                args.taskbarBgColor = 'red';
                args.taskbarBorderColor = 'black';
                args.progressBarBgColor = "green";
            }
        }
    },
    height: "450px",
    pdfQueryTaskbarInfo: (args) => {
        if (args.taskbar.taskSegmentStyles) {
            args.taskbar.taskSegmentStyles[1].taskColor = new ej.pdfexport.PdfColor(255, 0, 0);
            args.taskbar.taskSegmentStyles[1].progressColor = new ej.pdfexport.PdfColor(0, 128, 0);
            args.taskbar.taskSegmentStyles[1].taskBorderColor = new ej.pdfexport.PdfColor(0, 0, 0);
        }
    },
});
ganttChart.appendTo('#GanttExport');

