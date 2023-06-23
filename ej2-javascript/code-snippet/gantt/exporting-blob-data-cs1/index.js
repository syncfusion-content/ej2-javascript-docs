
var GanttData = [
    {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 90 },
            { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 40  },
            { TaskID: 4, Predecessor: '3FS', TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 10 },
        ]
    },
    {
        TaskID: 5,
        TaskName: 'Project Estimation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 85 },
            { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 15 },
            { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 70 }
        ]
    },
];
/**
 * Exporting Blob data
 */

let excelExpComplete = (args) => {
    //This event will be triggered when excel exporting.
        args.promise.then((e) => {
    //In this `then` function, we can get blob data through the arguments after promise resolved.
            exportBlob(e.blobData);
});
};
let pdfExpComplete = (args) => {
//This event will be triggered when pdf exporting.
    args.promise.then((e) => {
    //In this `then` function, we can get blob data through the arguments after promise resolved.
    exportBlob(e.blobData);
});
};


let exportBlob = (blob) => {
let a = document.createElement('a');
document.body.appendChild(a);
a.style.display = 'none';
let url = window.URL.createObjectURL(blob);
a.href = url;
a.download = 'Export';
a.click();
window.URL.revokeObjectURL(url);
document.body.removeChild(a);
}
const clickHandler = (args) => {
if (args.item.id === 'GanttExport_pdfexport') {
    gantt.pdfExport(null,null,null,true);
}
if (args.item.id === 'GanttExport_excelexport') {
    gantt.excelExport(null, null, null, true);
}
};

 
 var gantt = new ej.gantt.Gantt({
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
     allowExcelExport: true,
     excelExportComplete: excelExpComplete,
     pdfExportComplete: pdfExpComplete,
     toolbar: ['PdfExport','ExcelExport'],
     toolbarClick: clickHandler
    
 });
 gantt.appendTo('#GanttExport');